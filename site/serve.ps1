#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
# Posiciónate en la carpeta del script
Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Definition)

Write-Host "Iniciando servidor estático en http://localhost:8000"
if (Get-Command python -ErrorAction SilentlyContinue) {
  python -m http.server 8000
} elseif (Get-Command py -ErrorAction SilentlyContinue) {
  py -3 -m http.server 8000
} else {
  Write-Host "Python no encontrado. Instala Python o usa 'npm run serve' con Node.js (ver README)."
}
