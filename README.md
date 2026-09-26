# ISTQB Lab — symulator egzaminu CTFL

Niezależny, nieoficjalny symulator egzaminu **ISTQB Certified Tester Foundation Level (CTFL) v4.0** (sylabus v4.0.1), przygotowany w języku polskim. Aplikacja pozwala przećwiczyć 40 pytań w warunkach zbliżonych do prawdziwego egzaminu, a następnie sprawdzić wynik, czas i poziom przygotowania w każdym obszarze tematycznym. Wynik symulacji nie jest certyfikatem.

![Ekran startowy ISTQB Lab](/screenshots/screenshot-2.png)

## Jak powstał projekt

Projekt powstał w ramach ćwiczeń z wykorzystania AI w pracy nad oprogramowaniem. Do jego tworzenia użyłam OpenCode i agenta AI. Rezultaty pracy agenta weryfikowałam i oceniałam samodzielnie.

![Screenshot z pracy Agenta](/screenshots/screenshot-1.png)

## Funkcje

- 40 autorskich pytań z czterema wariantami odpowiedzi, oznaczonych poziomami K1–K3 i numerami rozdziałów sylabusu (FL-x.y.z),
- limit czasu: 60 minut, zgodnie z CTFL v4.0,
- próg zaliczenia: 26/40 punktów (65%),
- losowa kolejność pytań i odpowiedzi,
- nieprzerwany licznik czasu,
- mapa pytań, oznaczanie pytań i nawigacja,
- automatyczny zapis postępu w `localStorage`,
- wznawianie testu po odświeżeniu strony,
- szczegółowy wynik w sześciu obszarach tematycznych,
- przegląd wszystkich odpowiedzi wraz z wyjaśnieniami i filtrem błędów,
- możliwość wydrukowania wyniku,
- responsywny interfejs oraz podstawowa obsługa czytników ekranu.

## Struktura egzaminu

Nazwy obszarów odpowiadają rozdziałom sylabusu CTFL v4.0.1. Aplikacja użyje tych samych nazw w analizie wyniku.

| Obszar                                  | Liczba pytań | K1 | K2 | K3 |
| --------------------------------------- | -----------: | -: | -: | -: |
| Fundamenty testowania                   |            8 |  2 |  6 |  0 |
| Testowanie w cyklu życia oprogramowania |            6 |  2 |  4 |  0 |
| Testowanie statyczne                    |            4 |  2 |  2 |  0 |
| Analiza i projektowanie testów          |           11 |  0 |  6 |  5 |
| Zarządzanie aktywnościami testowymi     |            9 |  1 |  5 |  3 |
| Narzędzia testowe                       |            2 |  1 |  1 |  0 |
| **Razem**                               |       **40** |  **8** | **24** | **8** |

Próg zaliczenia to 26/40 punktów (65%), zgodnie z zasadami CTFL.

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
│   ├── styles/                  # tokeny, layout, widoki, responsywność, tryb ciemny i druk
│   ├── app.js                   # bootstrap: budowa `app`, zdarzenia, wczytanie stanu
│   ├── questions.js             # bank 40 pytań
│   ├── js/
│   │   ├── namespace.js         # przestrzeń nazw modułów
│   │   ├── config.js            # stałe egzaminu i nazwy obszarów
│   │   ├── utils.js             # formatowanie czasu, losowanie, odmiana i escaping
│   │   ├── question-bank.js     # walidacja banku pytań
│   │   ├── dom.js               # cache DOM, przełączanie widoków i toasty
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

## Struktura pytań

Każde pytanie w `questions.js` ma:

- `id`, `chapter` (1–6) i `k` — poziom wymagań wiedzy (`K1` zapamiętanie, `K2` zrozumienie, `K3` zastosowanie),
- `ref` — numer celu sylabusu, np. `FL-4.2.2`; widoczny w widoku egzaminu i w przeglądzie odpowiedzi,
- `text` — treść pytania, a opcjonalne `scenario` — wstęp sytuacyjny wyświetlany przed pytaniem,
- `options` (cztery), `correct` (indeks 0–3) oraz `explanation`.

Kolejność pytań i wariantów odpowiedzi losuje aplikacja, dlatego `correct` zawsze wskazuje indeks w `options`, a nigdy literę na ekranie.

Rozkład jest zgodny z certyfikacją: 40 pytań, 26 punktów na zaliczenie, 60 minut.

## Ważne

To niezależny materiał przygotowawczy. Pytania są autorskie i nie pochodzą z oficjalnego zestawu egzaminacyjnego ISTQB. Wynik symulacji nie jest certyfikatem, a projekt nie jest powiązany ani akredytowany przez ISTQB. Przed prawdziwym egzaminem należy zweryfikować aktualne zasady i materiały oficjalne: [ISTQB CTFL v4.0](https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/).
