# Sync reviewed GitHub source into the already-running Life Around Us origin.
# Never delete or replace private media, signing materials, saved settings or backend.
param(
    [string]$Repository = 'H:\PS3 Live\Life-GitHub-Publish',
    [string]$LiveWeb = 'H:\PS3 Live\Web',
    [switch]$SkipFetch
)
$ErrorActionPreference = 'Stop'
$repo = (Resolve-Path -LiteralPath $Repository).Path
$origin = (Resolve-Path -LiteralPath $LiveWeb).Path
if($repo -eq $origin) { throw 'Repository and origin must be separate directories' }
$target=Join-Path $origin 'public'
if(!(Test-Path -LiteralPath (Join-Path $repo '.git'))) { throw 'Expected a Git repository' }
if(!(Test-Path -LiteralPath (Join-Path $target 'assets'))) { throw 'Protected live media directory is missing' }
if(!(Test-Path -LiteralPath (Join-Path $origin 'server.mjs'))) { throw 'Local Node server missing' }
if(-not $SkipFetch) {
    & git -C $repo pull --ff-only origin main
    if($LASTEXITCODE -ne 0) { throw 'Git fast-forward update failed, origin files unchanged' }
}
$files=@('adaptive-input.js','android-font.css','cities.js','closeup.js','closeup_city.js',
  'cloud_work.js','config.js','effects.js','effects_world.js','icons.js','index.html','intro.js',
  'live.js','lwp_files.js','main.js','motion.js','music.js','name.js','options.js','radio.js',
  'satellite.js','styles.css','sun.js','tizen-input.js','weather.js','web-shell-bridge.js')
$backup=Join-Path $origin ('deploy-backups\github-'+(Get-Date -Format 'yyyyMMdd-HHmmss'))
$changed=New-Object System.Collections.Generic.List[string]
foreach($name in $files) {
    $source=Join-Path $repo ('web\public\'+$name)
    if(-not (Test-Path -LiteralPath $source)) { continue }
    $destination=Join-Path $target $name
    $same=(Test-Path -LiteralPath $destination) -and ((Get-FileHash -LiteralPath $source -Algorithm SHA256).Hash -eq (Get-FileHash -LiteralPath $destination -Algorithm SHA256).Hash)
    if($same) { continue }
    if(-not (Test-Path -LiteralPath $backup)) { New-Item -ItemType Directory -Path $backup -Force | Out-Null }
    if(Test-Path -LiteralPath $destination) { Copy-Item -LiteralPath $destination -Destination (Join-Path $backup $name) -Force }
    Copy-Item -LiteralPath $source -Destination $destination -Force
    $changed.Add($name)
}
# Backend and media paths are intentionally untouched: no service restart.
$health=Invoke-WebRequest -Uri 'http://127.0.0.1:18951/healthz' -TimeoutSec 10 -UseBasicParsing
if($health.StatusCode -ne 200) { throw 'Local origin health failed after deployment' }
Write-Output ('Life website updated from GitHub. Files: '+($changed -join ', ')+'. Local origin HTTP 200.')
