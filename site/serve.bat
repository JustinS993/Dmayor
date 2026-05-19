@echo off
cd /d "%~dp0"
echo Iniciando servidor estático en http://localhost:8000
python -m http.server 8000 2>nul || py -3 -m http.server 8000 2>nul || (
  echo Python no encontrado. Instala Python o usa 'npm run serve' con Node.js (ver README).
  pause
)
