(() => {
  "use strict";

  const namespace = window.ISTQB;

  function saveState(app) {
    if (!app.state) return;

    try {
      window.localStorage.setItem(app.config.STORAGE_KEY, JSON.stringify(app.state));
    } catch (error) {
      app.storageAvailable = false;
      namespace.dom.showToast(app, "Postęp nie może być zapisywany w tej przeglądarce.");
    }
  }

  function loadState(app) {
    let raw = null;

    try {
      raw = window.localStorage.getItem(app.config.STORAGE_KEY);
    } catch (error) {
      app.storageAvailable = false;
      return null;
    }

    if (!raw) return null;

    const parsed = parseState(app, raw);
    if (!parsed) {
      clearState(app);
    }

    return parsed;
  }

  function clearState(app) {
    try {
      window.localStorage.removeItem(app.config.STORAGE_KEY);
    } catch (error) {
      app.storageAvailable = false;
    }
  }

  function parseState(app, raw) {
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return null;

      const questionIds = new Set(app.questions.map((question) => question.id));
      const hasValidOrder =
        Array.isArray(parsed.questionOrder) &&
        parsed.questionOrder.length === app.config.TOTAL_QUESTIONS &&
        new Set(parsed.questionOrder).size === app.config.TOTAL_QUESTIONS &&
        parsed.questionOrder.every((id) => questionIds.has(id));
      const hasValidOptions =
        parsed.optionOrder &&
        questionIds.size === app.questions.length &&
        [...questionIds].every((id) => {
          const order = parsed.optionOrder[id];
          return (
            Array.isArray(order) &&
            order.length === 4 &&
            new Set(order).size === 4 &&
            order.every((index) => Number.isInteger(index) && index >= 0 && index <= 3)
          );
        });

      if (
        parsed.version !== app.config.STATE_VERSION ||
        !hasValidOrder ||
        !hasValidOptions ||
        !parsed.answers ||
        typeof parsed.answers !== "object" ||
        !Array.isArray(parsed.flagged) ||
        !Number.isInteger(parsed.currentIndex) ||
        parsed.currentIndex < 0 ||
        parsed.currentIndex >= app.config.TOTAL_QUESTIONS ||
        !Number.isFinite(parsed.endAt) ||
        !Number.isFinite(parsed.startedAt) ||
        !Object.values(app.config.DURATIONS).includes(parsed.durationSeconds)
      ) {
        return null;
      }

      if (parsed.finished && !Number.isFinite(parsed.completedAt)) return null;
      return parsed;
    } catch (error) {
      return null;
    }
  }

  namespace.storage = Object.freeze({
    save: saveState,
    load: loadState,
    clear: clearState,
    parse: parseState,
  });
})();
