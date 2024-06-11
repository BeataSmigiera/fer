@echo off

setlocal enabledelayedexpansion

set "port=8080"

:check_port
echo Sprawdzanie dostępności portu %port%...

for /f "tokens=5" %%a in ('netstat -aon ^| findstr %port%') do (
    set "pid=%%a"
)

if defined pid (
    echo Port %port% jest już zajęty przez proces o identyfikatorze %pid%.
    set /a port+=1
    goto check_port
) else (
    echo Uruchamianie lokalnego serwera na porcie %port%...
    http-server -p %port%
)

pause
