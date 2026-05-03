# NCHRP 01-64 — LLM Wiki (GitHub Pages)

This folder is a static website that hosts the **NCHRP 01-64** wiki plus an **in-browser LLM** (WebLLM). It runs entirely client-side: no server, no API keys.

## Host on GitHub Pages

1. Put the contents of this folder at the **root of a GitHub repo**
2. In GitHub: **Settings → Pages → Source: Deploy from branch → main → / (root)**
3. Visit the published site URL

> Note: first load downloads the model (~300MB) and caches it in the browser.

## Repo wiki import

On first run (when browser storage is empty), the site imports the markdown files listed in `wiki-manifest.json` into `localStorage`.

- Wiki markdown lives in `wiki/`
- The manifest is generated from `wiki/**/*.md` (excluding `wiki/.obsidian/**`) plus `index.md` and `log.md`

## Updating the manifest

If you add/remove markdown files under `wiki/`, regenerate the manifest:

```powershell
PowerShell -NoProfile -ExecutionPolicy Bypass -File .\\scripts\\generate-manifest.ps1
```

