(() => {
  "use strict";

  const namespace = window.ISTQB;

  function getSelectedDuration(app) {
    const selected = document.querySelector('input[name="duration"]:checked');
    const minutes = Number(selected?.value);
    return app.config.DURATIONS[minutes] || app.config.DURATIONS[60];
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
