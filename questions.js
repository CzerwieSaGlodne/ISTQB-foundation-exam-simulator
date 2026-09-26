window.ISTQB_QUESTIONS = [
  // ---------------------------------------------------------------------------
  // Rozdział 1 — Fundamenty testowania
  // ---------------------------------------------------------------------------
  {
    id: "q01",
    chapter: 1,
    k: "K1",
    ref: "FL-1.1.1",
    text: "Przed odbiorem aplikacji trzeba sprawdzić jej zgodność z obowiązującymi wymaganiami regulacyjnymi. Który rezultat jest typowym celem testowania?",
    options: [
      "Weryfikacja zgodności z wymaganiami regulacyjnymi.",
      "Udowodnienie, że aplikacja nie zawiera żadnych defektów.",
      "Gwarancja, że każda funkcja zadziała w każdym środowisku.",
      "Zastąpienie przeglądu wymagań testowaniem po wdrożeniu."
    ],
    correct: 0,
    explanation: "Testowanie może weryfikować zgodność z wymaganiami regulacyjnymi, ale nie dowodzi braku defektów ani gwarantuje działania w każdym środowisku."
  },
  {
    id: "q02",
    chapter: 1,
    k: "K2",
    ref: "FL-1.1.2",
    text: "Podczas przeglądu specyfikacji tester znalazł sprzeczne kryteria. Autor poprawił dokument, lecz aplikacji nie uruchamiano. Która ocena poprawnie rozróżnia testowanie i debugowanie?",
    options: [
      "Testowanie uruchomiło aplikację i wywołało awarię, a debugowanie tylko zarejestrowało wynik.",
      "Debugowanie wykryło defekt podczas wykonania, a testowanie jedynie naprawiło dokument.",
      "Testowanie i debugowanie wykonały te same czynności, ponieważ każdy defekt wymaga uruchomienia programu.",
      "Testowanie statyczne wykryło defekt, a debugowanie usunęło go bez odtwarzania awarii i diagnozy."
    ],
    correct: 3,
    explanation: "Testowanie statyczne może wykryć defekt bez wywołania awarii. W takim przypadku debugowanie polega na usunięciu defektu, bez konieczności reprodukcji i diagnozy."
  },
  {
    id: "q03",
    chapter: 1,
    k: "K1",
    ref: "FL-1.2.2",
    text: "Która relacja między zapewnieniem jakości (QA) a testowaniem jest prawidłowa?",
    options: [
      "QA jest podejściem procesowym, a testowanie dostarcza informacji o jakości produktu.",
      "QA i testowanie oznaczają to samo, lecz stosuje się je w różnych etapach.",
      "QA ocenia wyłącznie dokumenty, a testowanie wyłącznie wykonywanie programu.",
      "Testowanie przejmuje odpowiedzialność za wszystkie decyzje o jakości procesu."
    ],
    correct: 0,
    explanation: "QA koncentruje się na procesach i ich poprawie, natomiast testowanie jest formą kontroli jakości, która dostarcza informacji o produkcie."
  },
  {
    id: "q04",
    chapter: 1,
    k: "K2",
    ref: "FL-1.2.3",
    text: "Twórca błędnie zinterpretował niejasne kryterium obsługi pustego pliku i wprowadził wadliwą obsługę. Podczas eksportu aplikacja przerwała pracę. Które przypisanie pojęć jest poprawne?",
    options: [
      "Niejasne kryterium — przyczyna źródłowa; błędna interpretacja — błąd; wadliwa obsługa — defekt; przerwanie eksportu — błąd.",
      "Niejasne kryterium — przyczyna źródłowa; błędna interpretacja — defekt; wadliwa obsługa — błąd; przerwanie eksportu — awaria.",
      "Niejasne kryterium — przyczyna źródłowa; błędna interpretacja — błąd; wadliwa obsługa — defekt; przerwanie eksportu — awaria.",
      "Niejasne kryterium — przyczyna źródłowa; błędna interpretacja — błąd; wadliwa obsługa — defekt; przerwanie eksportu — przyczyna źródłowa."
    ],
    correct: 2,
    explanation: "Przyczyna źródłowa może doprowadzić do błędu, który utrwala się jako defekt. Wykonanie wadliwej obsługi pliku spowodowało awarię."
  },
  {
    id: "q05",
    chapter: 1,
    k: "K2",
    ref: "FL-1.3.1",
    text: "Ten sam zestaw testów jest uruchamiany od wielu wydań, a mimo zmian w aplikacji ujawnia coraz mniej nowych problemów. Która decyzja wyjaśnia ten wynik zgodnie z zasadami testowania?",
    options: [
      "Zwiększyć częstotliwość starego zestawu bez zmiany danych, ponieważ każde powtórzenie zwiększa skuteczność.",
      "Zmienić testy lub dane zgodnie ze zmianami i ryzykami, zamiast powtarzać wyłącznie stary zestaw.",
      "Zakończyć testowanie, ponieważ stare testy z czasem stają się mniej użyteczne.",
      "Uznać brak nowych awarii za dowód, że aplikacja nie zawiera już żadnych defektów."
    ],
    correct: 1,
    explanation: "Zasada zużywania się testów mówi, że powtarzanie tych samych testów staje się coraz mniej skuteczne. Zestaw warto zmieniać wraz ze zmianami i ryzykami."
  },
  {
    id: "q06",
    chapter: 1,
    k: "K2",
    ref: "FL-1.4.1",
    // dodatkowo: FL-1.4.3
    text: "Zespół ma już priorytetyzowane warunki testowe, ale brakuje mu przypadków, danych i środowiska. Który opis poprawnie przyporządkowuje te czynności i produkty testowe (testware)?",
    options: [
      "Analiza: warunki testowe; projektowanie: przypadki oraz wymagania dotyczące danych i środowiska; implementacja: procedury, skrypty, dane i gotowe elementy środowiska; wykonanie: uruchomienie i wyniki.",
      "Analiza: przypadki i dane; projektowanie: warunki testowe; implementacja: wyniki testów; wykonanie: wymagania środowiska.",
      "Projektowanie: warunki testowe; analiza: środowisko i skrypty; implementacja: wymagania danych; wykonanie: raport postępu.",
      "Wykonanie: warunki i przypadki; analiza: dane i środowisko; implementacja: kryteria wejścia; projektowanie: logi testowe."
    ],
    correct: 0,
    explanation: "Analiza określa, co testować, projektowanie — jak testować, a implementacja przygotowuje produkty testowe. Wykonanie uruchamia testy i rejestruje ich wyniki."
  },
  {
    id: "q07",
    chapter: 1,
    k: "K2",
    ref: "FL-1.4.4",
    // dodatkowo: FL-1.4.5
    scenario: "Na koniec iteracji menedżer testów prosi o raport. Wymaganie R-7 ma dwa przypadki: jeden zakończył się awarią i zgłoszonym defektem, drugi nie został wykonany.",
    text: "Która decyzja wykorzystuje śledzenie pochodzenia i rolę zarządzania testami?",
    options: [
      "Zespół zachowuje tylko powiązanie przypadku z wynikiem, a menedżer ocenia pokrycie na podstawie liczby testów.",
      "Menedżer łączy wymagania z raportami defektów, ale nie z testami, aby zachować prosty format raportu.",
      "Zespół utrzymuje powiązania wymaganie–przypadek–wynik–defekt, a menedżer wykorzystuje je do oceny pokrycia i sterowania.",
      "Zespół usuwa powiązania po każdej awarii, ponieważ wyniki testów mogą być archiwizowane niezależnie od wymagań."
    ],
    correct: 2,
    explanation: "Traceability łączy podstawę testów z warunkami, przypadkami, wynikami i defektami. Daje to podstawę do oceny pokrycia i podejmowania decyzji przez rolę zarządzania testami."
  },
  {
    id: "q08",
    chapter: 1,
    k: "K2",
    ref: "FL-1.5.3",
    text: "Przy rozwijaniu systemu bezpieczeństwa autorzy znają kontekst, a niezależny tester zgłasza problemy bez stałej współpracy. Jak połączyć niezależność testera z podejściem całego zespołu?",
    options: [
      "Skoncentrować wszystkie testy przy testerze zewnętrznym, uznając, że tylko pełna separacja zapewnia obiektywność.",
      "Pozostawić testowanie wyłącznie autorom, uznając, że znajomość kontekstu rekompensuje brak niezależności.",
      "Utrzymać najwyższą możliwą niezależność w każdym zadaniu, mimo ryzyka opóźnień i pogorszenia współpracy.",
      "Łączyć różne poziomy niezależności z komunikacją, aktywnym słuchaniem i dzieleniem wiedzy w całym zespole."
    ],
    correct: 3,
    explanation: "Niezależność ujawnia inne perspektywy i błędy poznawcze, lecz nadmierny dystans może pogorszyć współpracę. Podejście całego zespołu łączy wyspecjalizowaną wiedzę z odpowiedzialnością za jakość."
  },

  // ---------------------------------------------------------------------------
  // Rozdział 2 — Testowanie w cyklu życia oprogramowania
  // ---------------------------------------------------------------------------
  {
    id: "q09",
    chapter: 2,
    k: "K1",
    ref: "FL-2.1.2",
    text: "Która zasada jest dobrą praktyką testowania niezależnie od modelu SDLC?",
    options: [
      "Dla każdej aktywności rozwojowej przewidzieć odpowiednią aktywność testową.",
      "Odraczać przeglądy i testowanie do czasu ukończenia wszystkich prac programistycznych.",
      "Stosować identyczne cele i zakres na wszystkich poziomach testów.",
      "Przekazać całą odpowiedzialność za jakość testerom dopiero po implementacji."
    ],
    correct: 0,
    explanation: "Dla każdej pracy rozwojowej powinna istnieć odpowiednia kontrola jakości. Poziomy testów mają różne cele, a analiza i projektowanie powinny rozpoczynać się wcześnie."
  },
  {
    id: "q10",
    chapter: 2,
    k: "K1",
    ref: "FL-2.1.3",
    text: "Które podejścia należą do test-first, czyli definiują test przed kodem?",
    options: [
      "Poziomy komponentowy, integracyjny i systemowy, które opisują obiekt testowania.",
      "TDD, ATDD i BDD, w których test lub kryterium zachowania wyznacza implementację.",
      "Typy funkcjonalny i niefunkcjonalny, które opisują charakterystykę jakości.",
      "Testy potwierdzające i regresyjne, które opisują reakcję na wprowadzoną zmianę."
    ],
    correct: 1,
    explanation: "TDD, ATDD i BDD są podejściami test-first. Testy lub kryteria zachowania są w nich definiowane przed kodem i mogą sterować jego powstawaniem."
  },
  {
    id: "q11",
    chapter: 2,
    k: "K2",
    ref: "FL-2.1.1",
    // dodatkowo: FL-2.1.6
    text: "W projekcie dostarczanym w krótkich iteracjach retrospektywa wykazała, że regresje wykrywano zbyt późno. Który wniosek opisuje wpływ modelu SDLC na testowanie oraz wykorzystanie retrospektywy?",
    options: [
      "Testy dynamiczne należy odroczyć do końca projektu, a uwagi z retrospektywy można zapisać po zakończeniu prac.",
      "Retrospektywa powinna oceniać wyłącznie indywidualną pracę testerów, a wczesne testy całkowicie zastąpią regresję.",
      "Iteracyjny SDLC wymaga szybkiej informacji zwrotnej i regresji, a wnioski retrospektywy należy wdrożyć i monitorować.",
      "Wszystkie modele mają identyczny przebieg testowania, a usprawnienia można odkładać do następnego projektu."
    ],
    correct: 2,
    explanation: "Model SDLC wpływa na termin i zakres testowania. W iteracjach potrzebne są szybka informacja zwrotna i regresja, a wnioski retrospektywy powinny zostać zapisane, wdrożone i monitorowane."
  },
  {
    id: "q12",
    chapter: 2,
    k: "K2",
    ref: "FL-2.1.4",
    // dodatkowo: FL-2.1.5
    text: "Każdy commit uruchamia w CI analizę statyczną, testy komponentów i zestaw regresyjny; raz w tygodniu testerzy wykonują też scenariusze manualne w środowisku podobnym do produkcyjnego. Który wniosek opisuje wpływ DevOps i shift left?",
    options: [
      "CI/CD eliminuje potrzebę testów manualnych, a shift left oznacza przeniesienie wszystkich testów na koniec potoku.",
      "Analiza statyczna zastępuje testy komponentów, natomiast testy regresyjne powinny działać wyłącznie w środowisku produkcyjnym.",
      "Shift left polega na ograniczeniu testowania do wymagań, aby uniknąć kosztów związanych z późniejszym środowiskiem testowym.",
      "DevOps i CI/CD przyspieszają informację zwrotną oraz wspierają wcześniejsze testowanie, ale nie eliminują potrzeby testów manualnych."
    ],
    correct: 3,
    explanation: "DevOps promuje szybką informację zwrotną, zintegrowane narzędzia, CI/CD i automatyzację. Shift left oznacza wcześniejsze testowanie, a nie rezygnację z testów późniejszych ani z perspektywy użytkownika."
  },
  {
    id: "q13",
    chapter: 2,
    k: "K2",
    ref: "FL-2.2.1",
    // dodatkowo: FL-2.2.2
    text: "Zespół planuje test całego systemu, który sprawdza przepływ użytkownika, oraz test wydajnościowy pod obciążeniem. Które przypisanie poziomu i typu testu jest poprawne?",
    options: [
      "Test całego systemu należy do poziomu komponentowego, a test wydajnościowy jest typem czysto funkcjonalnym.",
      "Oba testy są poziomami, ponieważ każdy obejmuje inny obiekt, a każdy typ można wykonać wyłącznie na jednym poziomie.",
      "Test całego systemu należy do poziomu systemowego, a test wydajnościowy jest niefunkcjonalnym typem związanym z wydajnością.",
      "Test całego systemu jest testem białego pudełka, a test wydajnościowy — testem opartym na strukturze kodu, ponieważ oba wymagają znajomości implementacji."
    ],
    correct: 2,
    explanation: "Poziom testów określa obiekt i fazę rozwoju, natomiast typ odnosi się do jakości lub podejścia. Test wydajnościowy jest niefunkcjonalnym typem związanym z wydajnością."
  },
  {
    id: "q14",
    chapter: 2,
    k: "K2",
    ref: "FL-2.2.3",
    // dodatkowo: FL-2.3.1
    scenario: "Na utrzymywanym systemie rezerwacji naprawiono błąd, przez który potwierdzenie e-mail miało błędny adres. Po poprawce wykonano test odtwarzający zgłoszony problem oraz testy innych funkcji powiadamiania, których nie zmieniano.",
    text: "Która ocena poprawnie opisuje te działania i zakres testowania konserwacyjnego?",
    options: [
      "Test odtwarzający sprawdza wyłącznie brak regresji, a pozostałe testy potwierdzają naprawę.",
      "Test odtwarzający potwierdza naprawę, a testy innych funkcji są regresyjne; ich zakres warto oprzeć na analizie wpływu i ryzyku.",
      "Oba rodzaje testów dotyczą wyłącznie zmienionego kodu, ponieważ testowanie konserwacyjne nie obejmuje środowiska.",
      "Regresję należy wykonać przed poprawką, a test potwierdzający dopiero po zakończeniu utrzymania systemu."
    ],
    correct: 1,
    explanation: "Test potwierdzający sprawdza naprawę zgłoszonego problemu, a regresyjny — czy zmiana nie wywołała niekorzystnych skutków. Przy utrzymaniu zakres wynika m.in. z ryzyka i analizy wpływu."
  },

  // ---------------------------------------------------------------------------
  // Rozdział 3 — Testowanie statyczne
  // ---------------------------------------------------------------------------
  {
    id: "q15",
    chapter: 3,
    k: "K2",
    ref: "FL-3.1.2",
    // dodatkowo: FL-3.1.3
    text: "Zespół przegląda dokumentację wymagań oraz kod, nie uruchamiając aplikacji. Które porównanie poprawnie opisuje zakres i wartość obie podejść testowych?",
    options: [
      "Statyczne obejmuje te produkty pracy i może wykryć nieosiągalny kod bez wykonania aplikacji, zwykle ograniczając koszt późniejszych napraw.",
      "Statyczne wymaga uruchomienia aplikacji i wykrywa wyłącznie awarie, natomiast dynamiczne nie pozwala badać dokumentów ani kodu.",
      "Dynamiczne obejmuje dokumenty oraz kod, ale nie pozwala wykryć nieosiągalnego kodu przed uruchomieniem produktu.",
      "Oba podejścia wymagają wykonania produktu, a jedyną różnicę stanowi rodzaj użytego środowiska testowego."
    ],
    correct: 0,
    explanation: "Testowanie statyczne bada produkty pracy bez ich wykonywania i może ujawnić m.in. defekty dokumentów oraz nieosiągalny kod. Testowanie dynamiczne wymaga uruchomienia produktu."
  },
  {
    id: "q16",
    chapter: 3,
    k: "K2",
    ref: "FL-3.2.2",
    // dodatkowo: FL-3.2.4
    text: "Krytyczny model danych wymaga przeglądu o wysokiej formalności, z możliwością śledzenia decyzji i napraw. Który wariant spełnia wymagania formalności przeglądu i jego procesu?",
    options: [
      "Przeprowadzić przegląd spacerowy prowadzony przez autora, aby zbudować zaufanie bez analizy jakości modelu.",
      "Przeprowadzić inspekcję po zaplanowaniu kryteriów wyjścia i czasu na przygotowanie, wykonaniu indywidualnych przeglądów, analizie anomalii oraz udokumentowaniu napraw.",
      "Przeprowadzić przegląd techniczny wyłącznie w celu podjęcia decyzji projektowej, pomijając raportowanie wyników.",
      "Przeprowadzić nieformalną wymianę uwag bez ustalonego procesu, wykorzystując wyłącznie wiedzę uczestników o modelu."
    ],
    correct: 1,
    explanation: "Inspekcja jest najbardziej formalnym typem przeglądu i obejmuje planowanie, indywidualny przegląd, analizę oraz naprawę i raportowanie. Odpowiedni typ przeglądu służy realizacji celu."
  },
  {
    id: "q17",
    chapter: 3,
    k: "K1",
    ref: "FL-3.2.3",
    text: "Która osoba odpowiada za zaproszenie uczestników oraz ustalenie terminu i miejsca przeglądu?",
    options: [
      "Autor produktu, który przygotowuje go do przeglądu i następnie usuwa zgłoszone defekty.",
      "Protokolant, który porządkuje anomalie oraz zapisuje decyzje podczas spotkania.",
      "Lider przeglądu, który dobiera uczestników i organizuje termin oraz miejsce spotkania.",
      "Moderator, który prowadzi spotkanie, mediuje spory i dba o bezpieczną atmosferę."
    ],
    correct: 2,
    explanation: "Lider przeglądu odpowiada za organizację przeglądu i dobór jego uczestników. Moderator, protokolant i autor pełnią inne, wyspecjalizowane obowiązki."
  },
  {
    id: "q18",
    chapter: 3,
    k: "K1",
    ref: "FL-3.2.1",
    text: "Zespół odkłada zbieranie wymagań i opinii interesariuszy do końca projektu. Która konsekwencja takiego podejścia jest najbardziej prawdopodobna?",
    options: [
      "Zespół może uniknąć kosztownego nadrobienia prac, jeśli uwagi interesariuszy trafią do planu po ich zebraniu.",
      "Interesariusze szybciej potwierdzą wartość funkcji, co pozwoli wyeliminować zbędne elementy zaplanowanej wersji.",
      "Priorytety staną się bardziej spójne, ponieważ wymagania zostaną zebrane przed końcowym planowaniem wdrożenia.",
      "Nieporozumienia zostaną wykryte późno, co może spowodować kosztowne nadrobienie prac i opóźnienia."
    ],
    correct: 3,
    explanation: "Wczesna i częsta informacja zwrotna ujawnia problemy, zanim powstanie kosztowne nadrobienie prac. Pomaga też nadać priorytet pracom o największej wartości dla interesariuszy."
  },

  // ---------------------------------------------------------------------------
  // Rozdział 4 — Analiza i projektowanie testów
  // ---------------------------------------------------------------------------
  {
    id: "q19",
    chapter: 4,
    k: "K2",
    ref: "FL-4.1.1",
    text: "Który zestaw poprawnie przyporządkowuje przykłady do technik czarnych, białych i opartych na doświadczeniu?",
    options: [
      "Partycjonowanie równoważności i BVA; testowanie gałęzi; testowanie eksploracyjne.",
      "Testowanie gałęzi; EP i BVA; testowanie eksploracyjne.",
      "EP i BVA; testowanie eksploracyjne; testowanie gałęzi.",
      "Testowanie eksploracyjne; testowanie gałęzi; EP i BVA."
    ],
    correct: 0,
    explanation: "Techniki czarne wynikają ze specyfikowanego zachowania, białe ze struktury kodu, a oparte na doświadczeniu wykorzystują wiedzę testera."
  },
  {
    id: "q20",
    chapter: 4,
    k: "K2",
    ref: "FL-4.3.1",
    // dodatkowo: FL-4.3.2
    text: "Kod zawiera warunek: jeśli wiek wynosi co najmniej 18 lat, ustawia status na „pełnoletni”, a po nim ustawia go bezwarunkowo na „obsłużony”. Testy wykonały obie instrukcje dla osoby w wieku 20 lat. Osiągnięto 100% pokrycia instrukcji. Która ocena jest poprawna?",
    options: [
      "Wszystkie wyniki warunku zostały sprawdzone, ponieważ wykonano oba przypisania.",
      "Wszystkie instrukcje wykonywalne zostały wykonane, ale gałąź dla wieku poniżej 18 lat może być niepokryta.",
      "Wszystkie możliwe ścieżki kodu zostały sprawdzone, ponieważ każda z nich zawiera wykonane instrukcje.",
      "Pokrycie gałęzi jest słabsze od pokrycia instrukcji, ponieważ obejmuje tylko instrukcje warunkowe."
    ],
    correct: 1,
    explanation: "Pokrycie instrukcji gwarantuje wykonanie każdej instrukcji wykonywalnej, lecz nie obu kierunków decyzji. Pokrycie gałęzi jest silniejsze, ale nie oznacza wszystkich ścieżek."
  },
  {
    id: "q21",
    chapter: 4,
    k: "K2",
    ref: "FL-4.3.3",
    text: "Specyfikacja nie opisuje sposobu naliczania rabatu, ale tester ma dostęp do kodu i grafu przepływu sterowania. Które stwierdzenie opisuje wartość i ograniczenie testowania białego?",
    options: [
      "Umożliwia ocenę zaimplementowanej struktury i pokrycia kodu, ale może nie wykryć brakującego wymagania.",
      "Pozwala wykryć każde brakujące wymaganie, nawet jeśli nie ma go w strukturze kodu.",
      "Zapewnia pełną niezależność przypadków od projektu oraz automatyczne pokrycie wszystkich gałęzi.",
      "Mierzy głównie zgodność interfejsu, ale nie uwzględnia danych ani przepływu sterowania."
    ],
    correct: 0,
    explanation: "Technika biała analizuje to, co zaimplementowano; może wykryć defekt w kodzie, ale nie brak wymagania, którego nie zaimplementowano."
  },
  {
    id: "q22",
    chapter: 4,
    k: "K2",
    ref: "FL-4.4.1",
    text: "Na podstawie historii awarii podobnej usługi tester tworzy listę możliwych przyczyn: brak walidacji pustego pola, pomylony operator porównania i niezgodne typy danych. Następnie projektuje testy mające ujawnić te problemy. Która technika jest stosowana?",
    options: [
      "Testowanie eksploracyjne, ponieważ przypadki powstają dopiero podczas wykonywania testów.",
      "Testowanie oparte na liście kontrolnej, ponieważ tester korzysta z wcześniejszych doświadczeń.",
      "Zgadywanie błędów, ponieważ przewiduje defekty na podstawie wiedzy i danych o awariach.",
      "Białe testowanie instrukcji, ponieważ sprawdza każdą instrukcję kodu źródłowego."
    ],
    correct: 2,
    explanation: "Zgadywanie błędów wykorzystuje doświadczenie, dane o defektach i wiedzę o podobnych aplikacjach do przewidywania oraz ujawniania potencjalnych problemów."
  },
  {
    id: "q23",
    chapter: 4,
    k: "K2",
    ref: "FL-4.4.2",
    // dodatkowo: FL-4.4.3
    text: "Zespół prowadzi 45-minutową sesję na podstawie charteru, a tester jednocześnie projektuje, wykonuje i ocenia testy. Po sesji osobna checklista zawiera konkretne, niezależnie sprawdzalne pytania, które zespół aktualizuje po analizie nowych defektów. Który opis obie technik jest poprawny?",
    options: [
      "Eksploracja wymaga wcześniejszego zapisu każdego kroku, a checklisty powinny zawierać wyłącznie kryteria wejścia.",
      "Eksploracja pozwala uczyć się produktu podczas testowania, a checklista wspiera powtarzalne sprawdzanie konkretnych warunków.",
      "Eksploracja służy tylko do dokumentowania znanych wyników, a checklista powinna zawierać ogólne polecenia.",
      "Eksploracja zastępuje kryteria akceptacji, a checklista powinna rosnąć bez ograniczeń i regularnej analizy."
    ],
    correct: 1,
    explanation: "Testowanie eksploracyjne jest kierowane celami i uczeniem się, a checklisty powinny być konkretne, niezależnie sprawdzalne i regularnie aktualizowane."
  },
  {
    id: "q24",
    chapter: 4,
    k: "K2",
    ref: "FL-4.5.1",
    // dodatkowo: FL-4.5.2
    text: "Podczas wspólnego doprecyzowania historyjka użytkownika opisuje rolę, cel i wartość biznesową. Zespół omawia sposób użycia oraz przyjmuje kryterium w formacie Given/When/Then obejmujące zachowanie pozytywne i ujemne. Która ocena odpowiada modelowi 3C i formatom kryteriów akceptacji?",
    options: [
      "Karta opisuje historyjkę, rozmowa — sposób użycia, a potwierdzenie — kryteria akceptacji; Given/When/Then ma format scenariuszowy.",
      "Karta opisuje sposób użycia, rozmowa — kryteria, a potwierdzenie — wartość biznesową; Given/When/Then jest listą kontrolną.",
      "Karta opisuje kryteria, rozmowa — wartość biznesową, a potwierdzenie — sposób użycia; dozwolony jest wyłącznie format regułowy.",
      "Karta opisuje sposób użycia, rozmowa — kryteria, a potwierdzenie — wartość biznesową; scenariusze ujemne są zabronione."
    ],
    correct: 0,
    explanation: "3C oznacza Card, Conversation i Confirmation; kryteria mogą mieć format scenariuszowy lub regułowy i powinny być jednoznaczne."
  },
  {
    id: "q25",
    chapter: 4,
    k: "K3",
    ref: "FL-4.2.1",
    scenario: "Specyfikacja importu zamówienia wymaga kraju należącego do zbioru {PL, CZ, DE} oraz liczby sztuk od 1 do 10. Zamówienie jest przyjmowane tylko wtedy, gdy oba warunki są poprawne; nieprawidłowy kraj lub liczba powodają odrzucenie.",
    text: "Przy kryterium pokrycia każda partycja musi zostać wykonana co najmniej raz. Który minimalny zestaw danych testowych pokrywa wszystkie partycje?",
    options: [
      "Kraj=PL, liczba=5 — przyjęte; kraj=CZ, liczba=10 — przyjęte.",
      "Kraj=XX, liczba=0 — odrzucone; kraj=YY, liczba=20 — odrzucone.",
      "Kraj=PL, liczba=5 — przyjęte; kraj=XX, liczba=0 — odrzucone.",
      "Kraj=PL, liczba=5 — przyjęte; kraj=PL, liczba=0 — odrzucone; kraj=XX, liczba=5 — odrzucone; kraj=XX, liczba=0 — odrzucone."
    ],
    correct: 2,
    explanation: "Każde pole ma partycję poprawną i niepoprawną. Przypadek poprawny-poprawny oraz niepoprawny-niepoprawny pokrywają wszystkie cztery partycje przy minimalnej liczbie przypadków."
  },
  {
    id: "q26",
    chapter: 4,
    k: "K3",
    ref: "FL-4.2.2",
    text: "Przesyłka o masie od 1 kg do 15 kg włącznie jest bezpłatna; masy poniżej 1 kg lub powyżej 15 kg są odrzucane. Który zestaw danych zapewnia 100% pokrycie wersji trójwartościowej BVA dla obie granic?",
    options: [
      "0, 1, 15, 16",
      "1, 2, 14, 15",
      "0, 1, 2, 14, 15, 16",
      "1, 2, 14, 15, 16"
    ],
    correct: 2,
    explanation: "Granice to 1 i 15. Wersja trójwartościowa wymaga również sąsiadów każdej granicy, czyli wartości 0, 1, 2 oraz 14, 15, 16."
  },
  {
    id: "q27",
    chapter: 4,
    k: "K3",
    ref: "FL-4.2.3",
    scenario: "Tablica decyzyjna zawiera warunki P — subskrypcja jest aktywna oraz R — umowa trwa co najmniej 12 miesięcy. Pełna tabela przypisuje rabaty odpowiednio 20%, 10%, 5% i 0% dla kombinacji TT, TF, FT i FF; wszystkie kombinacje są wykonalne.",
    text: "Który zestaw danych testowych wykonuje każdą wykonalną kolumnę decyzji dokładnie raz?",
    options: [
      "Aktywna/12 → 20%; aktywna/3 → 10%; aktywna/3 → 10%; nieaktywna/24 → 5%.",
      "Aktywna/12 → 20%; aktywna/3 → 10%; nieaktywna/24 → 5%; nieaktywna/3 → 0%.",
      "Aktywna/12 → 20%; nieaktywna/24 → 5%; nieaktywna/24 → 5%; nieaktywna/3 → 0%.",
      "Aktywna/12 → 20%; aktywna/3 → 10%; nieaktywna/3 → 0%; nieaktywna/3 → 0%."
    ],
    correct: 1,
    explanation: "Pełne pokrycie decyzji wymaga wykonania wszystkich czterech wykonalnych kolumn: TT, TF, FT i FF."
  },
  {
    id: "q28",
    chapter: 4,
    k: "K3",
    ref: "FL-4.2.4",
    text: "Model obsługi zamówienia zawiera stany Nowe, Opłacone, Zwrócone i Anulowane. Poprawne przejścia to: Nowe — opłać → Opłacone; Nowe — anuluj → Anulowane; Opłacone — zwróć → Zwrócone. Niedozwolone są: Nowe — zwróć → Nowe oraz Opłacone — anuluj → Opłacone. Który zestaw sesji pokrywa wszystkie przejścia, jeśli każde przejście niedozwolone ma zostać podjęte w osobnej sesji?",
    options: [
      "T1: Nowe — zwróć → Nowe — opłać → Opłacone — anuluj → Opłacone — zwróć → Zwrócone; T2: Nowe — anuluj → Anulowane.",
      "T1: Nowe — opłać → Opłacone — zwróć → Zwrócone; T2: Nowe — anuluj → Anulowane; T3: Nowe — opłać → Opłacone — anuluj → Opłacone.",
      "T1: Nowe — opłać → Opłacone — anuluj → Opłacone; T2: Nowe — zwróć → Nowe — anuluj → Anulowane; T3: Nowe — opłać → Opłacone.",
      "T1: Nowe — opłać → Opłacone — zwróć → Zwrócone; T2: Nowe — anuluj → Anulowane; T3: Nowe — zwróć → Nowe; T4: Nowe — opłać → Opłacone — anuluj → Opłacone."
    ],
    correct: 3,
    explanation: "Zestaw obejmuje trzy poprawne i dwa niedozwolone przejścia, a każde niedozwolone jest testowane w innej sesji, aby ograniczyć maskowanie defektów."
  },
  {
    id: "q29",
    chapter: 4,
    k: "K3",
    ref: "FL-4.5.3",
    text: "Na warsztacie przyjęto historyjkę dotyczącą anulowania wizyty co najmniej 2 godziny przed jej rozpoczęciem. Kryteria wymagają: własna wizyta Zaplanowana → anulowana z potwierdzeniem; zbyt późne odwołanie własnej wizyty oraz odwołanie cudzej wizyty → odrzucenie bez zmiany statusu. Który przebieg realizuje ATDD, jeśli funkcja nie została jeszcze zaimplementowana?",
    options: [
      "Po implementacji opracować i wykonać test pozytywny oraz oba przypadki ujemne.",
      "Przed implementacją opracować oba przypadki ujemne, bez testu pozytywnego.",
      "Przed implementacją opracować test pozytywny, ale odłożyć oba przypadki ujemne.",
      "Przed implementacją opracować test pozytywny, a następnie oba przypadki ujemne z kryteriów akceptacji."
    ],
    correct: 3,
    explanation: "ATDD tworzy testy z kryteriów akceptacji przed implementacją. Typowo zespół zaczyna od przypadków pozytywnych, a następnie uwzględnia przypadki ujemne."
  },

  // ---------------------------------------------------------------------------
  // Rozdział 5 — Zarządzanie aktywnościami testowymi
  // ---------------------------------------------------------------------------
  {
    id: "q30",
    chapter: 5,
    k: "K1",
    ref: "FL-5.1.6",
    text: "Który zestaw testów powinien znajdować się w podstawie klasycznej piramidy testów?",
    options: [
      "Małe, izolowane i szybkie testy obejmujące niewielkie fragmenty funkcji.",
      "Rozległe testy całego systemu, wykonywane często mimo dużego kosztu i zależności.",
      "Wolne i silnie zależne testy całych przepływów wymagające kompletnego środowiska.",
      "Manualne testy eksploracyjne oceniające użyteczność produktu dla użytkownika."
    ],
    correct: 0,
    explanation: "Warstwa u dołu zawiera wiele małych, izolowanych i szybkich testów o niskim ziarnistości. Wyższe warstwy obejmują zwykle mniej testów, ale są wolniejsze i bardziej zależne."
  },
  {
    id: "q31",
    chapter: 5,
    k: "K2",
    ref: "FL-5.1.1",
    // dodatkowo: FL-5.1.2
    text: "Podczas planowania iteracji zespół doprecyzowuje historyjkę, analizuje ryzyka i szacuje zadania testowe. Które działanie testera wpływa na jakość planu testów?",
    options: [
      "Rozpocząć testy dopiero po rozwinięciu, uznając wszystkie wcześniejsze decyzje za testowe.",
      "Przekazać historyjkę testerom po akceptacji i pominąć szacowanie oraz planowanie testów.",
      "Oceńić testowalność, zidentyfikować ryzyka, a następnie ująć zadania, zasoby, kryteria i komunikację w planie.",
      "Ograniczyć plan do ogólnych celów, pomijając ograniczenia, ryzyka, zasoby i kryteria."
    ],
    correct: 2,
    explanation: "Tester uczestniczy w planowaniu, oceniając testowalność, ryzyka, zadania i nakład. Plan testów dokumentuje przyjęte podejście, zasoby, kryteria, ryzyka oraz sposoby komunikacji."
  },
  {
    id: "q32",
    chapter: 5,
    k: "K2",
    ref: "FL-5.1.3",
    text: "Przed rozpoczęciem testów integracyjnych brakuje wersjonowanych przypadków i danych, a środowisko będzie gotowe dopiero za dwa dni. Która decyzja jest zgodna z definicją kryteriów wejścia i wyjścia?",
    options: [
      "Rozpocząć testy mimo braków, ponieważ kryteria wejścia opisują oczekiwany wynik testów.",
      "Odroczyć testy do spełnienia kryteriów wejścia, a kryteria wyjścia oceniać po ich wykonaniu.",
      "Rozpocząć testy po spełnieniu kryteriów wyjścia, ponieważ określają dostępność środowiska.",
      "Wstrzymać testy bezterminowo, ponieważ kryteria wejścia i wyjścia muszą zawsze być identyczne."
    ],
    correct: 1,
    explanation: "Kryteria wejścia opisują warunki rozpoczęcia aktywności, a kryteria wyjścia — co musi zostać osiągnięte lub wykazane, aby uznać ją za zakończoną."
  },
  {
    id: "q33",
    chapter: 5,
    k: "K2",
    ref: "FL-5.2.2",
    // dodatkowo: FL-5.2.4
    text: "Analiza wykazała dwa ryzyka: dostawca opóźni emulator, a w emulatorze błędnie wyliczany jest podatek. Które postępowanie właściwie je rozróżnia i kontroluje?",
    options: [
      "Zaklasyfikować oba ryzyka jako produktowe, ponieważ tester bada jakość emulatora i dostawcę.",
      "Utrzymać oba ryzyka jako projektowe, ponieważ opóźnienie dostawcy zawsze uszkadza produkt.",
      "Zaakceptować ryzyko podatku i sprawdzić emulator dopiero po przekazaniu produkcji użytkownikom.",
      "Skorygować harmonogram wobec opóźnienia, a ryzyko podatku ograniczyć testami i monitorowaniem."
    ],
    correct: 3,
    explanation: "Opóźnienie dostawcy jest ryzykiem projektowym, ponieważ może wpływać na termin, budżet lub zakres. Błędne obliczenia podatku są ryzykiem produktowym, dlatego wymagają działań mitygujących i monitorowania."
  },
  {
    id: "q34",
    chapter: 5,
    k: "K2",
    ref: "FL-5.3.2",
    // dodatkowo: FL-5.3.3
    text: "W trzecim tygodniu opóźnienie środowiska zwiększyło ryzyko, a do ukończenia testów potrzebna jest dodatkowa osoba. Które działanie realizuje monitorowanie, sterowanie i komunikowanie?",
    options: [
      "Opublikować dla zespołu codzienny plan bez metryk, przeszkód i zmian ryzyka.",
      "Poczekać do końca testów i przekazać zarządowi wyłącznie odsetek zaliczonych przypadków.",
      "Podać w raporcie metryki, przeszkody i ryzyka, po czym zmienić zasoby oraz plan.",
      "Przesłać wyłącznie wykres wykonania, bez oceny jakości, ryzyka i podjętych działań."
    ],
    correct: 2,
    explanation: "Raport postępu przedstawia metryki, odchylenia, przeszkody, zmiany ryzyk i plan na następny okres. Na tej podstawie sterowanie może dodać zasoby lub zmienić plan, a informacje należy dostosować do odbiorców."
  },
  {
    id: "q35",
    chapter: 5,
    k: "K2",
    ref: "FL-5.4.1",
    text: "Zatwierdzona linia bazowa środowiska obejmuje aplikację 4.2, schemat bazy 17, dane R3 i skrypt S7. Która praktyka umożliwi odtworzenie poprzedniego wyniku?",
    options: [
      "Umożliwić dowolne nadpisanie plików, ponieważ środowisko testowe ma charakter tymczasowy.",
      "Przechowywać wyłącznie końcowe wyniki, ponieważ wersje elementów nie wpływają na odtworzenie.",
      "Wersjonować elementy i powiązania, a zmiany linii bazowej wprowadzać przez formalną kontrolę.",
      "Przechowywać wszystkie wersje w jednym folderze bez oznaczenia zatwierdzonej konfiguracji."
    ],
    correct: 2,
    explanation: "Zarządzanie konfiguracją zapewnia identyfikowalność, wersjonowanie i powiązania elementów środowiska. Formalna kontrola zmian pozwala odtworzyć zatwierdzoną konfigurację i poprzednie wyniki."
  },
  {
    id: "q36",
    chapter: 5,
    k: "K3",
    ref: "FL-5.1.4",
    text: "Dla zadania testowego przyjęto estymaty w osobogodzinach: a=8, m=14, b=26. Jakie są wartości E i SD według trzypunktowej estymacji?",
    options: [
      "E = 11 godzin, SD = 2 godziny",
      "E = 16 godzin, SD = 2 godziny",
      "E = 15 godzin, SD = 9 godzin",
      "E = 15 godzin, SD = 3 godziny"
    ],
    correct: 3,
    explanation: "Obliczenia: E = (8 + 4×14 + 26) / 6 = 90 / 6 = 15 osobogodzin. Odchylenie standardowe wynosi SD = (26−8) / 6 = 3 osobogodziny, czyli 15 ± 3 osobogodziny."
  },
  {
    id: "q37",
    chapter: 5,
    k: "K3",
    ref: "FL-5.1.5",
    scenario: "Jeden tester wykonuje przypadki testowe pojedynczo, na jednej stacji roboczej. Testy rozpoczynają się o 13:00. TC-C o niskim priorytecie trwa 30 minut i przygotowuje dane dla TC-A o priorytecie krytycznym oraz TC-B o priorytecie wysokim. TC-B trwa 20 minut i musi zakończyć się przed 14:00. TC-D o priorytecie wysokim można wykonać wyłącznie w oknie 14:00–14:20. TC-A trwa 40 minut.",
    text: "Który harmonogram spełnia wszystkie warunki?",
    options: [
      "A 13:00 → C 13:30 → B 13:30 → D 14:00 → A 14:20",
      "C 13:00 → A 13:30 → B 14:10 → D 14:30",
      "B 13:00 → C 13:20 → A 13:50 → D 14:30",
      "C 13:00 → B 13:30 → D 14:00 → A 14:20"
    ],
    correct: 3,
    explanation: "TC-C musi rozpocząć się pierwsze, ponieważ przygotowuje wymagane dane. Następnie TC-B kończy się przed 14:00, TC-D wykorzystuje jedyne dostępne okno środowiskowe, a po nim wykonywany jest TC-A. Priorytet nie oznacza automatycznie pierwszego terminu — najpierw decydują zależności i twarde terminy."
  },
  {
    id: "q38",
    chapter: 5,
    k: "K3",
    ref: "FL-5.5.1",
    text: "Podczas wykonania przypadku TC-218 na aplikacji Rezerwacje 3.4 w środowisku testowym wysłano dwie nakładające się rezerwacje tego samego zasobu. Druga została zapisana. Który zestaw danych powinien znaleźć się w raporcie defektu?",
    options: [
      "Identyfikator, tytuł, autor, data, wersja 3.4, środowisko, TC-218, dane, kroki, oczekiwany kod HTTP 409, rzeczywisty kod 201, log, zrzut, krytyczność (severity), priorytet naprawy i status.",
      "Tytuł, autor, data, wersja, środowisko i ogólny opis; kody 409/201, ale bez kroków, danych, załączników i referencji.",
      "Kroki, dane TC-218, log i zrzut, ale bez identyfikatora, środowiska, wersji, wyników oraz klasyfikacji defektu.",
      "Autor, data, priorytet naprawy i wniosek o poprawę wydajności API, ale bez środowiska, kroków, danych oraz wyników scenariusza."
    ],
    correct: 0,
    explanation: "Raport powinien umożliwiać odtworzenie i rozwiązanie problemu oraz śledzenie jakości. Zawiera więc identyfikację obiektu i środowiska, kontekst, dane, kroki, wyniki, materiał dowodowy i klasyfikację."
  },

  // ---------------------------------------------------------------------------
  // Rozdział 6 — Narzędzia testowe
  // ---------------------------------------------------------------------------
  {
    id: "q39",
    chapter: 6,
    k: "K1",
    ref: "FL-6.2.1",
    text: "Zespół automatyzuje regresję, ale nie uwzględnił kosztów utrzymania skryptów. Który wniosek wskazuje zagrożenie wynikające z pominięcia tych kosztów?",
    options: [
      "Niedoszacowanie utrzymania może ograniczyć osiągane korzyści.",
      "Automatyzacja automatycznie usuwa potrzebę testowania manualnego.",
      "Im więcej skryptów, tym mniejsza potrzeba szkolenia zespołu.",
      "Dostawca narzędzia przejmuje odpowiedzialność za jakość produktu."
    ],
    correct: 0,
    explanation: "Nierealistyczne oczekiwania oraz zbyt niskie oszacowanie czasu, kosztów i nakładu na wdrożenie, szkolenie i utrzymanie skryptów mogą ograniczyć korzyści z automatyzacji."
  },
  {
    id: "q40",
    chapter: 6,
    k: "K2",
    ref: "FL-6.1.1",
    text: "Narzędzie uruchamia testy po każdej kompilacji, rejestruje ich wyniki i oblicza pokrycie kodu. Do której kategorii narzędzi testowych należy?",
    options: [
      "Narzędzia do zarządzania testami.",
      "Narzędzia uruchamiające testy oraz mierzące pokrycie.",
      "Narzędzia do testowania statycznego.",
      "Narzędzia do współpracy."
    ],
    correct: 1,
    explanation: "Automatyczne uruchamianie testów i pomiar pokrycia są zadaniami narzędzi wykonujących testy oraz mierzących pokrycie. Pozostałe kategorie wspierają inne etapy procesu."
  }
];
