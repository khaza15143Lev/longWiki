$ErrorActionPreference = "Stop"

function Get-Frontmatter {
  param(
    [Parameter(Mandatory = $true)][string]$Text
  )
  if (-not $Text.StartsWith("---")) { return $null }
  $end = $Text.IndexOf("`n---", 3)
  if ($end -lt 0) { return $null }
  return $Text.Substring(0, $end + 4)
}

function Get-FrontmatterField {
  param(
    [Parameter(Mandatory = $true)][string]$Frontmatter,
    [Parameter(Mandatory = $true)][string]$FieldName
  )
  $m = [regex]::Match($Frontmatter, "(?m)^\s*$([regex]::Escape($FieldName))\s*:\s*(.+?)\s*$")
  if (-not $m.Success) { return $null }
  $raw = $m.Groups[1].Value.Trim()
  if ($raw.StartsWith('"') -and $raw.EndsWith('"')) { return $raw.Trim('"') }
  return $raw
}

function Get-FirstHeading {
  param(
    [Parameter(Mandatory = $true)][string]$Text
  )
  $m = [regex]::Match($Text, "(?m)^\s*#\s+(.+?)\s*$")
  if ($m.Success) { return $m.Groups[1].Value.Trim() }
  return $null
}

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

$wikiFiles =
  Get-ChildItem -Recurse -File (Join-Path $root "wiki") -Filter *.md |
  Where-Object { $_.FullName -notmatch "\\wiki\\\.obsidian\\" }

$extraFiles = @(
  (Join-Path $root "index.md"),
  (Join-Path $root "log.md")
) | Where-Object { Test-Path $_ }

$allFiles = @()
foreach ($f in $extraFiles) { $allFiles += (Get-Item $f) }
$allFiles += $wikiFiles

$pages = @()
foreach ($f in $allFiles) {
  $rel = (Resolve-Path $f.FullName).Path.Substring($root.Length).TrimStart("\")
  $rel = $rel -replace "\\", "/"

  $text = Get-Content -Raw -Encoding UTF8 $f.FullName
  $front = Get-Frontmatter -Text $text
  $title = $null
  $category = $null
  $tags = @()

  if ($front) {
    $title = Get-FrontmatterField -Frontmatter $front -FieldName "title"
    $category = Get-FrontmatterField -Frontmatter $front -FieldName "category"
    $tagsRaw = Get-FrontmatterField -Frontmatter $front -FieldName "tags"
    if ($tagsRaw -and $tagsRaw.StartsWith("[") -and $tagsRaw.EndsWith("]")) {
      $inner = $tagsRaw.TrimStart("[").TrimEnd("]")
      $tags = $inner.Split(",") | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "" }
    }
  }

  if (-not $title) {
    $title = Get-FirstHeading -Text $text
  }
  if (-not $title) {
    $title = $f.BaseName
  }

  $slug = $f.BaseName.ToLowerInvariant()

  $pages += [pscustomobject]@{
    id       = $slug
    slug     = $slug
    title    = $title
    path     = $rel
    category = $category
    tags     = $tags
    bytes    = $f.Length
  }
}

$manifest = [pscustomobject]@{
  version     = 1
  generatedAt = (Get-Date).ToUniversalTime().ToString("o")
  pages       = $pages
}

$outPath = Join-Path $root "wiki-manifest.json"
$json = $manifest | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText($outPath, $json, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ("Wrote {0} pages -> {1}" -f $pages.Count, $outPath)
