#!/bin/bash

echo "Uruchamianie lokalnego serwera..."

port=8080

while netstat -tuln | grep -q "$port"; do
    echo "Port $port jest już zajęty. Zmiana portu..."
    port=$((port+1))
done

echo "Uruchamianie lokalnego serwera na porcie $port..."
http-server -p $port

