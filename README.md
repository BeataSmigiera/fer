Oto README.md w całości, inspirowane stylem z readme.so:

````markdown
# PRZYSTANEK Finanse, Edukacja, Rozwój

Platforma promocyjno-informacyjna oferująca profesjonalną terapię logopedyczną i pedagogiczną, korepetycje, przygotowanie do egzaminów z języka polskiego, wsparcie w rozwoju poprzez Kompas Kariery i mentoring oraz edukację finansową.

## Struktura projektu

```plaintext
projekt/
├── css/
│   └── style.css
├── images/
│   └── bg_main.jpg
├── pages/
│   ├── components/
│   │   ├── footer.html
│   │   └── navbar.html
│   ├── offer/
│   │   ├── crown.html
│   │   └── therapy.html
│   ├── about.html
│   └── offerList.html
├── scripts/
│   ├── footer.js
│   ├── navbar.js
│   └── offerItem.js
├── svg/
│   ├── home.svg
│   ├── logo.svg
├── index.html
└── offerData/
    └── offer.json
```
````

## Instrukcja uruchomienia / osoba nietechniczna

### Windows

1. **Rozpakuj archiwum**:

   - Kliknij prawym przyciskiem myszy na plik ZIP i wybierz "Wyodrębnij tutaj".

2. **Uruchom plik startowy**:

   - Otwórz folder projektu.
   - Kliknij dwukrotnie plik `start-server.bat`.

3. **Otwórz przeglądarkę**:
   - Po uruchomieniu skryptu otwórz przeglądarkę internetową.
   - Wpisz w pasku adresu: `http://localhost:8080` lub jeśli tamten port jest zajęty: `http://localhost:8081`. (Adres portu skonfigurowany jest w pliku z start-server.bat).

### macOS/Linux

1. **Rozpakuj archiwum**:

   - Kliknij dwukrotnie na plik ZIP i wybierz "Wyodrębnij tutaj".

2. **Uruchom Terminal**:

   - Otwórz aplikację Terminal.

3. **Nawiguj do folderu projektu**:

   ```sh
   cd /ścieżka/do/rozpakowanego/projektu
   ```

4. **Ustaw uprawnienia do pliku skryptowego** (tylko raz):

   ```sh
   chmod +x start-server.sh
   ```

5. **Uruchom plik startowy**:

   ```sh
   ./start-server.sh
   ```

6. **Otwórz przeglądarkę**:
   - Po uruchomieniu skryptu otwórz przeglądarkę internetową.
   - Wpisz w pasku adresu: `http://localhost:8080` lub jeśli tamten port jest zajęty: `http://localhost:8081`. (Adres portu skonfigurowany jest w pliku z start-server.sh).

## Instrukcja zatrzymania serwera

### Windows

1. **Zatrzymaj serwer**:
   - W oknie wiersza poleceń (czarne okno), które się otworzyło podczas uruchamiania skryptu, naciśnij klawisze `Ctrl + C`.
   - Potwierdź zatrzymanie serwera, naciskając `Y` (jeśli pojawi się pytanie).
   - Zamknij okno wiersza poleceń.

### macOS/Linux

1. **Zatrzymaj serwer**:
   - W oknie Terminala, które uruchomiło serwer, naciśnij klawisze `Ctrl + C`.

---

## Uwagi

Jeśli napotkasz jakiekolwiek problemy, upewnij się, że wszystkie pliki są na właściwych ścieżkach i że masz uprawnienia do ich uruchamiania. W razie potrzeby skontaktuj się z osobą techniczną.

```

```
