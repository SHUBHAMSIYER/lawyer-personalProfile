# Free portable Node (no admin installer). Run: .\dev.ps1
$nodeRoot = "$env:LOCALAPPDATA\node-portable\node-v22.14.0-win-x64"
$env:Path = "$nodeRoot;$env:Path"
Set-Location $PSScriptRoot
npm run dev
