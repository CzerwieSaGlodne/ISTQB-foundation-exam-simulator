(() => {
  "use strict";

  const namespace = window.ISTQB;

  function stop(app) {
    window.clearInterval(app.timerInterval);
    app.timerInterval = null;
  }

  function update(app) {
    if (!app.state || app.state.finished) return;

    const remaining = Math.max(0, namespace.state.getRemainingSeconds(app));
    const formatted = namespace.utils.formatTime(remaining);
    const { timerBox, timerValue } = app.dom;

    timerValue.textContent = formatted;
    timerBox.classList.toggle("timer--warning", remaining <= 300 && remaining > 60);
    timerBox.classList.toggle("timer--danger", remaining <= 60);
    timerBox.setAttribute("aria-label", `Pozostały czas: ${formatted}`);

    if (remaining <= 0 && typeof app.onFinish === "function") {
      app.onFinish("time");
    }
  }

  function start(app) {
    stop(app);
    if (!app.state || app.state.finished) return;

    update(app);
    if (app.state && !app.state.finished) {
      app.timerInterval = window.setInterval(() => update(app), 1000);
    }
  }

  namespace.timer = Object.freeze({
    start,
    stop,
    update,
  });
})();
