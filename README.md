# ISTQB Lab — Foundation Level (PL)

Niezależny symulator egzaminu **ISTQB Certified Tester Foundation Level v4.0.1** przygotowany w języku polskim. Aplikacja pozwala przećwiczyć 40 pytań w warunkach zbliżonych do prawdziwego egzaminu, a następnie sprawdzić wynik, czas i poziom przygotowania w każdym obszarze tematycznym.

![Ekran startowy ISTQB Lab](/screenshots/screenshot-2.png)

## Jak powstał projekt

Projekt powstał w ramach ćwiczeń z wykorzystania AI w pracy nad oprogramowaniem. Do jego tworzenia użyłam OpenCode i agenta AI. Rezultaty pracy agenta weryfikowałam i oceniałam samodzielnie.
![Screenshot z pracy Agenta](/screenshots/screenshot-1.png)

## Funkcje

- 40 autorskich pytań z czterema wariantami odpowiedzi,
- dwa warianty czasowe: 60 i 75 minut,
- próg zaliczenia: 26/40 punktów (65%),
- losowa kolejność pytań i odpowiedzi,
- nieprzerwany licznik czasu,
- mapa pytań, oznaczanie pytań i nawigacja,
- automatyczny zapis postępu w `localStorage`,
- wznawianie testu po odświeżeniu strony,
- szczegółowy wynik w sześciu obszarach tematycznych,
- przegląd wszystkich odpowiedzi wraz z wyjaśnieniami,
- możliwość wydrukowania wyniku,
- responsywny interfejs oraz podstawowa obsługa czytników ekranu.

## Struktura egzaminu

| Obszar                                  | Liczba pytań |
| --------------------------------------- | -----------: |
| Fundamenty testowania                   |            8 |
| Testowanie w cyklu życia oprogramowania |            6 |
| Testowanie statyczne                    |            4 |
| Analiza i projektowanie testów          |           11 |
| Zarządzanie aktywnościami testowymi     |            9 |
| Narzędzia testowe                       |            2 |
| **Razem**                               |       **40** |

## Uruchomienie

Aplikacja jest statyczna i nie wymaga instalowania zależności ani budowania projektu.

### Lokalny serwer

Otwórz terminal w katalogu `istqb-foundation-pl/` i uruchom:

```powershell
python -m http.server 8080
```

Następnie odwiedź:

```text
http://localhost:8080/
```

Aplikację można również otworzyć bezpośrednio w `istqb-foundation-pl/index.html` za pomocą przeglądarki.

## Struktura projektu

```text
.
├── istqb-foundation-pl/        # uruchamialna aplikacja
│   ├── index.html               # interfejs aplikacji
│   ├── styles.css               # entrypoint cascade stylów
│   ├── styles/                  # tokeny, layout, widoki, responsywność i druk
│   ├── app.js                   # bootstrap i integracja modułów
│   ├── questions.js             # bank 40 pytań
│   ├── js/
│   │   ├── namespace.js         # przestrzeń nazw modułów
│   │   ├── config.js            # stałe egzaminu
│   │   ├── utils.js             # formatowanie, losowanie i escaping
│   │   ├── question-bank.js     # walidacja banku pytań
│   │   ├── dom.js               # cache DOM i przełączanie widoków
│   │   ├── storage.js           # localStorage i walidacja stanu
│   │   ├── state.js             # stan próby i operacje na nim
│   │   ├── timer.js             # licznik czasu
│   │   ├── analysis.js          # scoring i analiza obszarów
│   │   └── views/               # logika widoków: landing, exam, results
│   └── favicon.svg              # ikona aplikacji
└── screenshots/                 # zrzuty ekranu
```

Klasyczne pliki JavaScript są ładowane w `index.html` w jawnej kolejności. Nie używają modułów ES ani bundlera, dzięki czemu aplikacja działa także po bezpośrednim otwarciu `index.html`. Aplikacja korzysta wyłącznie z HTML, CSS i JavaScript. Nie posiada API ani zewnętrznych zależności. Aktywna próba jest przechowywana wyłącznie w bieżącej przeglądarce pod kluczem `istqb-foundation-pl-attempt-v1`.

## Sprawdzenie składni

Jeżeli Node.js jest dostępny, wszystkie pliki JavaScript można sprawdzić poleceniem:

```powershell
Get-ChildItem -Recurse -Filter *.js | ForEach-Object { node --check $_.FullName }
```

## Ważne

To niezależny materiał przygotowawczy. Pytania są autorskie i nie pochodzą z oficjalnego zestawu egzaminacyjnego ISTQB. Wynik aplikacji nie jest certyfikatem, a projekt nie jest powiązany ani akredytowany przez ISTQB. Przed prawdziwym egzaminem należy zweryfikować aktualne zasady i materiały oficjalne: [ISTQB CTFL v4.0](https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/).
