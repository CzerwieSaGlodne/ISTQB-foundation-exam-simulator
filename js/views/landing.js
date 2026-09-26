(() => {
  "use strict";

  const namespace = window.ISTQB;

  function getSelectedDuration(app) {
    return app.config.DURATIONS[app.config.BASE_DURATION_MINUTES];
  }

  function bind(app) {
    app.dom.startButton.addEventListener("click", () => {
      app.startNewExam(getSelectedDuration(app));
    });
  }

  function show(app) {
    namespace.timer.stop(app);
    namespace.dom.setView(app, "landing");
    namespace.dom.setExamChrome(app, false);
  }

  namespace.views = namespace.views || {};
  namespace.views.landing = Object.freeze({
    bind,
    getSelectedDuration,
    show,
  });
})();
