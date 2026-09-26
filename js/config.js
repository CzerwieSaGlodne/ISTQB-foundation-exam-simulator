(() => {
  "use strict";

  const namespace = window.ISTQB;

  namespace.config = Object.freeze({
    STORAGE_KEY: "istqb-foundation-pl-attempt-v1",
    STATE_VERSION: 2,
    PASS_SCORE: 26,
    EXCELLENT_SCORE: 34,
    TOTAL_QUESTIONS: 40,
    PASS_PERCENT: 65,
    LETTERS: Object.freeze(["A", "B", "C", "D"]),
    BASE_DURATION_MINUTES: 60,
    DURATIONS: Object.freeze({
      60: 3600,
    }),
    CHAPTER_COUNTS: Object.freeze({
      1: 8,
      2: 6,
      3: 4,
      4: 11,
      5: 9,
      6: 2,
    }),
    CHAPTERS: Object.freeze({
      1: Object.freeze({
        title: "Fundamenty testowania",
        shortTitle: "Fundamenty",
        description: "Cele, zasady i rola testowania",
      }),
      2: Object.freeze({
        title: "Testowanie w cyklu życia oprogramowania",
        shortTitle: "Cykl życia",
        description: "Poziomy, typy i testowanie utrzymaniowe",
      }),
      3: Object.freeze({
        title: "Testowanie statyczne",
        shortTitle: "Statyczne",
        description: "Przeglądy i wykrywanie defektów bez uruchamiania",
      }),
      4: Object.freeze({
        title: "Analiza i projektowanie testów",
        shortTitle: "Projektowanie testów",
        description: "Black-box, white-box, eksperckie i oparte na współpracy",
      }),
      5: Object.freeze({
        title: "Zarządzanie aktywnościami testowymi",
        shortTitle: "Zarządzanie",
        description: "Planowanie, ryzyko, monitorowanie i raportowanie",
      }),
      6: Object.freeze({
        title: "Narzędzia testowe",
        shortTitle: "Narzędzia",
        description: "Wsparcie i automatyzacja testów",
      }),
    }),
  });
})();
