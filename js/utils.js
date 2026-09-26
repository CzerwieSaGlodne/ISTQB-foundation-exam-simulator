(() => {
  "use strict";

  const namespace = window.ISTQB;

  namespace.utils = Object.freeze({
    escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    },

    // Egzamin trwa maksymalnie 75 minut, wiec zawsze wystarcza format MM:SS.
    formatTime(totalSeconds) {
      const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
      const minutes = Math.floor(safeSeconds / 60);
      const seconds = safeSeconds % 60;

      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    },

    shuffled(items) {
      const result = [...items];
      for (let index = result.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
      }
      return result;
    },

    pluralizeQuestions(number) {
      if (number === 1) return "pytanie";
      const lastTwo = number % 100;
      if (lastTwo >= 12 && lastTwo <= 14) return "pytań";
      return number % 10 >= 2 && number % 10 <= 4 ? "pytania" : "pytań";
    },

    pluralizePoints(number) {
      const lastTwo = number % 100;
      if (lastTwo >= 12 && lastTwo <= 14) return "punktów";
      return number % 10 >= 2 && number % 10 <= 4 ? "punkty" : "punktów";
    },

    pluralizeAnswers(number) {
      return number === 1 ? "odpowiedź" : "odpowiedzi";
    },
  });
})();
