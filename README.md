# ARCHIWUM 01 — moduł startowy

Pierwszy działający moduł mobilnej gry terenowej.

## Co już działa

- animowany ekran uruchamiania,
- wprowadzenie fabularne od postaci „M”,
- wpisanie imienia pana młodego,
- briefing i zasady bezpieczeństwa,
- rozpoczęcie operacji,
- zapis postępu w pamięci telefonu,
- wznowienie gry po zamknięciu strony,
- reset wersji testowej,
- krótkie dźwięki i wibracje,
- tryb PWA oraz działanie offline po pierwszym uruchomieniu.

## Najprostszy test na komputerze

Nie otwieraj pliku `index.html` bezpośrednio, ponieważ tryb offline PWA wymaga lokalnego serwera.

### Windows / macOS / Linux z Pythonem

1. Otwórz terminal w tym folderze.
2. Uruchom:

   python -m http.server 8080

3. Wejdź w przeglądarce na:

   http://localhost:8080

## Test na telefonie

Telefon i komputer muszą być w tej samej sieci Wi‑Fi.

1. Uruchom serwer jak wyżej.
2. Sprawdź adres IP komputera w sieci lokalnej.
3. Na telefonie otwórz:

   http://ADRES-IP-KOMPUTERA:8080

Na iPhonie opcja instalacji znajduje się w Safari: **Udostępnij → Dodaj do ekranu początkowego**.

Uwaga: pełna instalacja PWA i Service Worker mogą wymagać HTTPS. Na `localhost` działają bez HTTPS.

## Łatwa zmiana tekstów

Najważniejsze ustawienia są na początku pliku `app.js` w obiekcie `CONFIG`.
Pozostałe teksty fabularne można edytować bezpośrednio w funkcjach `renderWelcome`, `renderBriefing` i `renderRules`.

## Następny moduł

- pierwsza transmisja,
- zagadka lokalizacyjna,
- wpisywanie odpowiedzi,
- konsekwencja dobrej i słabszej decyzji,
- odblokowanie kolejnego etapu.
