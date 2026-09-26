(() => {
  "use strict";

  const namespace = window.ISTQB;
  const app = {
    questions: Array.isArray(window.ISTQB_QUESTIONS) ? window.ISTQB_QUESTIONS : [],
    questionsById: new Map(),
    config: namespace.config,
    dom: {},
    state: null,
    timerInterval: null,
    toastTimeout: null,
    storageAvailable: true,
  };

  app.onFinish = (reason) => finishExam(reason);
  app.startNewExam = (durationSeconds) => {
    namespace.state.startNewExam(app, durationSeconds);
    namespace.views.exam.show(app);
    namespace.timer.start(app);
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  app.returnToLanding = () => {
    namespace.timer.stop(app);
    app.state = null;
    namespace.storage.clear(app);
    namespace.views.landing.show(app);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  app.finishExam = (reason) => finishExam(reason);

  function initialize() {
    namespace.dom.cache(app);

    if (!namespace.questionBank.validate(app.questions, app.config)) {
      namespace.dom.showFatalError();
      return;
    }

    app.questionsById = new Map(app.questions.map((question) => [question.id, question]));
    app.state = namespace.storage.load(app);
    bindEvents();

    if (app.state) {
      if (app.state.finished) {
        namespace.views.results.show(app);
      } else {
        namespace.views.exam.show(app);
        namespace.timer.start(app);
      }
      return;
    }

    namespace.views.landing.show(app);
  }

  function bindEvents() {
    app.dom.brandLink.addEventListener("click", handleBrandClick);
    namespace.views.landing.bind(app);
    namespace.views.exam.bind(app);
    namespace.views.results.bind(app);

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && app.state && !app.state.finished) {
        namespace.timer.update(app);
      }
    });

    window.addEventListener("storage", handleStorageEvent);
  }

  function handleBrandClick(event) {
    event.preventDefault();

    if (app.state && !app.state.finished && !app.dom.examView.hidden) {
      namespace.views.exam.openFinishDialog(app);
    } else if (app.state?.finished && !app.dom.resultsView.hidden) {
      app.returnToLanding();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleStorageEvent(event) {
    if (event.key !== app.config.STORAGE_KEY || !event.newValue || app.state?.finished) {
      return;
    }

    const incoming = namespace.storage.parse(app, event.newValue);
    if (!incoming) return;

    app.state = incoming;
    if (incoming.finished) {
      namespace.views.results.show(app);
      return;
    }

    namespace.views.exam.show(app);
    namespace.timer.start(app);
  }

  function finishExam(reason) {
    if (!namespace.state.finish(app, reason)) return;

    namespace.views.results.show(app);
    window.scrollTo({ top: 0, behavior: "auto" });

    if (reason === "time") {
      window.setTimeout(() => {
        if (typeof app.dom.timeoutDialog.showModal === "function" && !app.dom.timeoutDialog.open) {
          app.dom.timeoutDialog.showModal();
        }
      }, 250);
    }
  }

  window.ISTQB_APP_DEBUG = {
    getState: () => app.state,
    getRemainingSeconds: () => app.state ? namespace.state.getRemainingSeconds(app) : 0,
    analyzeAttempt: () => app.state ? namespace.analysis.analyze(app) : null,
    storageAvailable: () => app.storageAvailable,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
