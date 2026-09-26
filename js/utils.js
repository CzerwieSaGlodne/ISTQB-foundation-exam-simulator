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

    formatTime(totalSeconds) {
      const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
      const hours = Math.floor(safeSeconds / 3600);
      const minutes = Math.floor((safeSeconds % 3600) / 60);
      const seconds = safeSeconds % 60;

      if (hours > 0) {
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      }

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
  });
})();
