import * as webllm from "https://esm.run/@mlc-ai/web-llm";

// ── CONFIG ──────────────────────────────────────────────────────────────────
const MODEL_ID = "Qwen2.5-0.5B-Instruct-q4f32_1-MLC";

const SYSTEM_PROMPT = `You are an AI wiki assistant. You help users build and maintain a personal knowledge base stored as markdown pages.

When the user shares information, extracts knowledge, or asks you to write/update a page:
- Respond with clear, structured markdown
- Use headings, bullet points, and internal links like [[page-slug]] (lowercase-hyphenated)
- Be concise but comprehensive
- When updating wiki pages, output the FULL new markdown content of the page

When you determine a wiki page should be created or updated, end your response with a special block:
<wiki-update>
title: <exact page title>
content: <full markdown content>
</wiki-update>

You may emit multiple <wiki-update> blocks if several pages need updating.

Current wiki index will be provided in context.`;

// ── STATE ────────────────────────────────────────────────────────────────────
let engine = null;
let modelReady = false;
let currentPageId = null;
let isGenerating = false;

// ── STORAGE ──────────────────────────────────────────────────────────────────
const DB = {
  key: (id) => `wiki_page_${id}`,
  indexKey: "wiki_index",

  getIndex() {
    try { return JSON.parse(localStorage.getItem(this.indexKey) || "[]"); }
    catch { return []; }
  },

  saveIndex(index) {
    localStorage.setItem(this.indexKey, JSON.stringify(index));
  },

  getPage(id) {
    try { return JSON.parse(localStorage.getItem(this.key(id))); }
    catch { return null; }
  },

  savePage(page, { updateIndex = true, updated = Date.now() } = {}) {
    localStorage.setItem(this.key(page.id), JSON.stringify(page));
    if (updateIndex) {
      const index = this.getIndex();
      const existing = index.findIndex(p => p.id === page.id);
      const entry = { id: page.id, title: page.title, updated };
      if (existing >= 0) index[existing] = entry;
      else index.unshift(entry);
      this.saveIndex(index);
    }
  },

  deletePage(id) {
    localStorage.removeItem(this.key(id));
    const index = this.getIndex().filter(p => p.id !== id);
    this.saveIndex(index);
  },

  clearAll() {
    const keys = Object.keys(localStorage);
    keys.forEach((k) => {
      if (k.startsWith("wiki_page_")) localStorage.removeItem(k);
    });
    localStorage.removeItem(this.indexKey);
  },

  newId() {
    return "p_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }
};

// ── UI REFS ──────────────────────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const statusDot = $("status-dot");
const statusLabel = $("status-label");
const progressWrap = $("progress-wrap");
const progressFill = $("progress-fill");
const progressText = $("progress-text");
const pageList = $("page-list");
const pageTitle = $("page-title");
const editor = $("editor");
const chatMessages = $("chat-messages");
const chatInput = $("chat-input");
const sendBtn = $("send-btn");
const previewContent = $("preview-content");
const importBtn = $("import-btn");

// ── RENDER HELPERS ────────────────────────────────────────────────────────────
function renderNav() {
  const index = DB.getIndex();
  pageList.innerHTML = "";
  if (index.length === 0) {
    pageList.innerHTML = `<li style="color:var(--text2);font-size:12px;padding:6px 16px;font-style:italic">No pages yet</li>`;
    return;
  }
  index.forEach(entry => {
    const li = document.createElement("li");
    li.dataset.id = entry.id;
    if (entry.id === currentPageId) li.classList.add("active");
    li.innerHTML = `<span class="page-icon">◇</span><span class="page-name">${escHtml(entry.title || "Untitled")}</span>`;
    li.addEventListener("click", () => loadPage(entry.id));
    pageList.appendChild(li);
  });
}

function renderPreview() {
  const raw = editor.value || "";
  const md = preprocessMarkdown(raw);
  previewContent.innerHTML = marked.parse(md || "*Nothing to preview.*");
}

function escHtml(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function stripFrontmatter(md) {
  if (!md.startsWith("---")) return md;
  const end = md.indexOf("\n---", 3);
  if (end < 0) return md;
  return md.slice(end + 4).replace(/^\s+/, "");
}

function wikilinkToSlug(label) {
  return label
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function preprocessMarkdown(md) {
  const noFrontmatter = stripFrontmatter(md || "");
  return noFrontmatter.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
    const label = inner.trim();
    const slug = wikilinkToSlug(label);
    return `[${label}](#wiki=${encodeURIComponent(slug)})`;
  });
}

function openWikilink(slug) {
  const id = slug;
  const page = DB.getPage(id);
  if (!page) {
    addMsg("system", `Page not found: ${slug}`);
    return;
  }
  loadPage(id);
}

function makeUniqueIdFromTitle(title) {
  const base = wikilinkToSlug(title || "untitled") || "untitled";
  let id = base;
  let i = 2;
  while (DB.getPage(id)) {
    id = `${base}-${i}`;
    i += 1;
  }
  return id;
}

// ── PAGE OPS ─────────────────────────────────────────────────────────────────
function loadPage(id) {
  saveCurrent();
  const page = DB.getPage(id);
  if (!page) return;
  currentPageId = id;
  pageTitle.value = page.title || "";
  editor.value = page.content || "";
  renderNav();
  renderPreview();
}

function saveCurrent() {
  if (!currentPageId) return;
  const page = DB.getPage(currentPageId) || { id: currentPageId };
  page.title = pageTitle.value.trim() || "Untitled";
  page.content = editor.value;
  DB.savePage(page);
  renderNav();
}

function newPage(title = "New Page", content = "") {
  saveCurrent();
  const id = makeUniqueIdFromTitle(title);
  DB.savePage({ id, title, content });
  loadPage(id);
}

function deleteCurrent() {
  if (!currentPageId) return;
  if (!confirm("Delete this page?")) return;
  DB.deletePage(currentPageId);
  currentPageId = null;
  const index = DB.getIndex();
  if (index.length > 0) loadPage(index[0].id);
  else { pageTitle.value = ""; editor.value = ""; renderNav(); renderPreview(); }
}

async function importRepoWiki({ force = false } = {}) {
  if (!force && DB.getIndex().length > 0) {
    addMsg("system", "Wiki already has pages — not importing. (Use a fresh browser profile or clear site data to re-import.)");
    return false;
  }

  addMsg("system", "Importing wiki from repo…");

  let manifest;
  try {
    const res = await fetch("wiki-manifest.json", { cache: "no-cache" });
    if (!res.ok) throw new Error(`wiki-manifest.json HTTP ${res.status}`);
    manifest = await res.json();
  } catch (err) {
    addMsg("system", "Import failed: couldn't load wiki-manifest.json. " + err.message);
    return false;
  }

  const pages = Array.isArray(manifest?.pages) ? manifest.pages : [];
  if (pages.length === 0) {
    addMsg("system", "Import failed: manifest contains no pages.");
    return false;
  }

  const imported = [];
  const now = Date.now();
  for (const p of pages) {
    const id = (p?.id || p?.slug || "").toString().trim();
    const title = (p?.title || id || "Untitled").toString().trim();
    const path = (p?.path || "").toString().trim();
    if (!id || !path) continue;

    try {
      const res = await fetch(path, { cache: "no-cache" });
      if (!res.ok) throw new Error(`${path} HTTP ${res.status}`);
      const content = await res.text();
      DB.savePage({ id, title, content }, { updateIndex: false, updated: now });
      imported.push({ id, title, updated: now });
    } catch (err) {
      addMsg("system", `Skipped ${path}: ${err.message}`);
    }
  }

  if (imported.length === 0) {
    addMsg("system", "Import failed: no pages could be loaded.");
    return false;
  }

  imported.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
  const overviewIdx = imported.findIndex(p => p.id === "overview");
  if (overviewIdx > 0) {
    const [ov] = imported.splice(overviewIdx, 1);
    imported.unshift(ov);
  }
  DB.saveIndex(imported);

  renderNav();
  loadPage(imported[0].id);
  addMsg("system", `✓ Imported ${imported.length} pages from repo`);
  return true;
}

// ── AUTO-SAVE ─────────────────────────────────────────────────────────────────
let saveTimer = null;
function scheduleAutoSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveCurrent, 600);
  renderPreview();
}
editor.addEventListener("input", scheduleAutoSave);
pageTitle.addEventListener("input", scheduleAutoSave);

// ── CHAT ──────────────────────────────────────────────────────────────────────
function addMsg(role, text) {
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function buildContext() {
  const index = DB.getIndex();
  let ctx = "## Current wiki index\n";
  if (index.length === 0) ctx += "_No pages yet._\n";
  else index.forEach(p => { ctx += `- [[${p.id}]] — ${p.title}\n`; });

  if (currentPageId) {
    const page = DB.getPage(currentPageId);
    if (page) ctx += `\n## Currently open page: "${page.title}" (id: ${page.id})\n\`\`\`\n${page.content}\n\`\`\``;
  }
  return ctx;
}

function applyWikiUpdates(response) {
  const re = /<wiki-update>([\s\S]*?)<\/wiki-update>/g;
  let match;
  let updated = [];

  while ((match = re.exec(response)) !== null) {
    const block = match[1];
    const titleMatch = block.match(/^title:\s*(.+)/m);
    const contentMatch = block.match(/^content:\s*([\s\S]+)/m);
    if (!titleMatch || !contentMatch) continue;

    const title = titleMatch[1].trim();
    const content = contentMatch[1].trim();

    const slugId = wikilinkToSlug(title);
    const direct = slugId ? DB.getPage(slugId) : null;

    if (direct) {
      direct.title = title;
      direct.content = content;
      DB.savePage(direct);
      updated.push(title);
      if (currentPageId === direct.id) {
        editor.value = content;
        renderPreview();
      }
    } else {
      const index = DB.getIndex();
      const existing = index.find(p => (p.title || "").toLowerCase() === title.toLowerCase());

      if (existing) {
        const page = DB.getPage(existing.id);
        page.title = title;
        page.content = content;
        DB.savePage(page);
        updated.push(title);
        if (currentPageId === existing.id) {
          editor.value = content;
          renderPreview();
        }
      } else {
        const id = makeUniqueIdFromTitle(title);
        DB.savePage({ id, title, content });
        updated.push(title);
        if (!currentPageId) loadPage(id);
      }
    }
    renderNav();
  }

  return updated;
}

function cleanResponse(text) {
  return text.replace(/<wiki-update>[\s\S]*?<\/wiki-update>/g, "").trim();
}

async function sendMessage() {
  const input = chatInput.value.trim();
  if (!input || !modelReady || isGenerating) return;

  chatInput.value = "";
  chatInput.style.height = "auto";
  addMsg("user", input);

  const thinkMsg = addMsg("thinking", "Thinking…");
  isGenerating = true;
  sendBtn.disabled = true;

  const messages = [
    { role: "system", content: SYSTEM_PROMPT + "\n\n" + buildContext() },
    { role: "user", content: input }
  ];

  let fullText = "";
  let aiMsg = null;

  try {
    const chunks = await engine.chat.completions.create({ messages, stream: true, max_tokens: 1200 });
    thinkMsg.remove();
    aiMsg = addMsg("ai", "");

    for await (const chunk of chunks) {
      const delta = chunk.choices[0]?.delta?.content || "";
      fullText += delta;
      aiMsg.textContent = cleanResponse(fullText) || "…";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    const updated = applyWikiUpdates(fullText);
    if (updated.length > 0) {
      addMsg("system", `✓ Updated: ${updated.join(", ")}`);
    }

  } catch (err) {
    thinkMsg?.remove();
    addMsg("system", "Error: " + err.message);
  }

  isGenerating = false;
  sendBtn.disabled = !modelReady;
}

// ── LINT ──────────────────────────────────────────────────────────────────────
async function lintWiki() {
  if (!modelReady || isGenerating) return;
  const index = DB.getIndex();
  if (index.length === 0) { addMsg("system", "Wiki is empty — nothing to lint."); return; }

  let allContent = "## Full wiki content\n";
  index.forEach(entry => {
    const page = DB.getPage(entry.id);
    allContent += `\n### ${entry.title}\n${page?.content || ""}\n`;
  });

  chatInput.value = "Please health-check this wiki. Look for: orphan pages with no inbound links, important concepts that need their own page, contradictions, stale claims, and missing cross-references. Suggest improvements.";
  await sendMessage();
}

// ── WEBLLM INIT ───────────────────────────────────────────────────────────────
async function initModel() {
  statusLabel.textContent = "Downloading model…";
  progressWrap.style.display = "block";

  try {
    engine = await webllm.CreateMLCEngine(MODEL_ID, {
      initProgressCallback: (progress) => {
        const pct = Math.round((progress.progress || 0) * 100);
        progressFill.style.width = pct + "%";
        progressText.textContent = progress.text || pct + "%";
      }
    });

    progressWrap.style.display = "none";
    statusDot.className = "dot-ready";
    statusLabel.textContent = "Ready";
    modelReady = true;
    sendBtn.disabled = false;
    addMsg("system", `Model loaded: ${MODEL_ID}`);

  } catch (err) {
    progressWrap.style.display = "none";
    statusDot.className = "dot-error";
    statusLabel.textContent = "Failed to load";
    addMsg("system", "Model error: " + err.message);
  }
}

// ── BOOTSTRAP ─────────────────────────────────────────────────────────────────
function handleHashLink() {
  const h = (location.hash || "").trim();
  if (!h.startsWith("#wiki=")) return;
  const slug = decodeURIComponent(h.slice("#wiki=".length));
  if (slug) openWikilink(slug);
}

async function init() {
  const index = DB.getIndex();
  if (index.length > 0) {
    loadPage(index[0].id);
  } else {
    const imported = await importRepoWiki();
    if (!imported) {
      newPage("Welcome", `# Welcome\n\nThis is a static GitHub Pages–friendly wiki + in-browser LLM (WebLLM).\n\n## First run\n\n- The first load downloads the model (~300MB) and caches it in your browser.\n- Your edits are saved in your browser storage (they do not write back to GitHub).\n\n## Tips\n\n- Use [[page-slug]] links (e.g., [[overview]]).\n- Click links in the Preview panel to open pages.\n`);
    }
  }

  $("new-page-btn").addEventListener("click", () => newPage());
  $("delete-page-btn").addEventListener("click", deleteCurrent);
  $("send-btn").addEventListener("click", sendMessage);
  $("lint-btn").addEventListener("click", lintWiki);
  importBtn?.addEventListener("click", () => importRepoWiki());

  previewContent.addEventListener("click", (e) => {
    const a = e.target?.closest?.("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("#wiki=")) return;
    e.preventDefault();
    const slug = decodeURIComponent(href.slice("#wiki=".length));
    if (slug) openWikilink(slug);
  });

  window.addEventListener("hashchange", handleHashLink);
  handleHashLink();

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
  chatInput.addEventListener("input", () => {
    chatInput.style.height = "auto";
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + "px";
  });

  $("toggle-preview").addEventListener("click", () => {
    const panel = $("preview-panel");
    panel.style.display = panel.style.display === "none" ? "" : "none";
  });

  addMsg("system", "Loading AI model into your browser… (first load downloads ~300MB and is cached)");
  initModel();
}

document.addEventListener("DOMContentLoaded", () => {
  init().catch((err) => addMsg("system", "Init error: " + err.message));
});
