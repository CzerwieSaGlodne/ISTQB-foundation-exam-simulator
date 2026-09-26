(() => {
  "use strict";

  const namespace = window.ISTQB;
  const DOM_IDS = [
    "topbar", "brandLink", "headerActions", "exitTestButton", "landingView", "examView",
    "resultsView", "startButton", "questionCounter", "answeredCounter", "progressTrack",
    "progressBar", "mapButton", "timerBox", "timerValue", "questionNav", "questionGrid", "finishButton",
    "closeNavButton", "navBackdrop", "questionLabel", "flagButton", "questionType",
    "questionText", "questionScenario", "answers", "previousButton", "nextButton",
    "mobileFinishButton", "resultHero", "resultsTitle", "resultMessage", "newExamButton",
    "printButton", "scoreRing", "scoreNumber", "scorePercent", "timeSpentLabel", "timeSpent",
    "correctCount", "incorrectCount", "unansweredCount", "domainResults", "insightBox",
    "recommendationText", "focusList", "filterAll", "filterIncorrect", "filterCorrect",
    "reviewList", "finishDialog", "finishDialogText", "finishSummary", "timeoutDialog", "toast",
    "siteFooter",
  ];

  function cacheDom(app) {
    DOM_IDS.forEach((id) => {
      app.dom[id] = document.getElementById(id);
    });
  }

  function showFatalError() {
    document.body.innerHTML = `
      <main style="min-height:100vh;display:grid;padding:30px;place-items:center;font-family:system-ui,sans-serif;background:#080f1c;color:#e7eef9">
        <section style="max-width:540px;padding:36px;border:1px solid #2a3a51;border-radius:20px;background:#111c2c;box-shadow:0 20px 50px rgba(0,0,0,.28);text-align:center">
          <h1 style="margin:0 0 12px">Nie udało się uruchomić testu</h1>
          <p style="margin:0;color:#9cabc0">Bank pytań jest niekompletny lub uszkodzony. Uruchom aplikację ponownie i sprawdź plik <code>questions.js</code>.</p>
        </section>
      </main>`;
  }

  function setView(app, viewName) {
    app.dom.landingView.hidden = viewName !== "landing";
    app.dom.examView.hidden = viewName !== "exam";
    app.dom.resultsView.hidden = viewName !== "results";
    app.dom.siteFooter.classList.toggle("site-footer--exam", viewName === "exam");
  }

  function setExamChrome(app, isExam) {
    app.dom.topbar.classList.toggle("topbar--exam", isExam);
    app.dom.exitTestButton.hidden = !isExam;
    const chip = app.dom.headerActions.querySelector(".exam-chip");
    if (chip) chip.hidden = !isExam;
  }

  function showToast(app, message) {
    window.clearTimeout(app.toastTimeout);
    app.dom.toast.textContent = message;
    app.dom.toast.classList.add("is-visible");
    app.toastTimeout = window.setTimeout(() => {
      app.dom.toast.classList.remove("is-visible");
    }, 2200);
  }

  namespace.dom = Object.freeze({
    cache: cacheDom,
    showFatalError,
    setView,
    setExamChrome,
    showToast,
  });
})();
