(() => {
  "use strict";

  const namespace = window.ISTQB;

  function bind(app) {
    const { dom } = app;

    dom.newExamButton.addEventListener("click", () => {
      app.startNewExam(namespace.views.landing.getSelectedDuration(app));
    });
    dom.printButton.addEventListener("click", () => window.print());

    document.querySelectorAll(".review-filter").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".review-filter").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        renderReview(app, button.dataset.filter);
      });
    });
  }

  function show(app) {
    namespace.timer.stop(app);
    namespace.dom.setView(app, "results");
    namespace.dom.setExamChrome(app, false);
    renderResults(app);
  }

  function renderResults(app) {
    if (!app.state) return;

    const analysis = namespace.analysis.analyze(app);
    if (!analysis) return;

    const passed = analysis.correct >= app.config.PASS_SCORE;
    const percent = Math.round((analysis.correct / app.config.TOTAL_QUESTIONS) * 100);
    const { dom } = app;

    dom.scoreNumber.textContent = analysis.correct;
    dom.scorePercent.textContent = `${percent}%`;
    dom.scoreRing.style.setProperty("--score", percent);
    dom.scoreRing.style.setProperty("--ring-color", passed ? "#21c293" : "#ee9d26");
    dom.timeSpent.textContent = namespace.utils.formatTime(analysis.elapsedSeconds);
    dom.correctCount.textContent = analysis.correct;
    dom.incorrectCount.textContent = analysis.incorrect;
    dom.unansweredCount.textContent = analysis.unanswered;

    if (passed) {
      dom.resultsTitle.textContent = analysis.correct >= app.config.EXCELLENT_SCORE
        ? "Świetny wynik — jest na co!"
        : "Test zaliczony — świetna robota!";
      dom.resultMessage.textContent = `Uzyskałeś ${analysis.correct} z ${app.config.TOTAL_QUESTIONS} punktów. Wynik spełnia próg zaliczenia. Przejrzyj analizę, aby utrwalić wiedzę.`;
    } else {
      const missing = app.config.PASS_SCORE - analysis.correct;
      dom.resultsTitle.textContent = `Jeszcze ${missing} ${namespace.utils.pluralizePoints(missing)} do zaliczenia`;
      dom.resultMessage.textContent = "Przeanalizuj błędne odpowiedzi i skup się na najsłabszych obszarach. Każde kolejne podejście będzie lepsze.";
    }

    renderDomainResults(app, analysis);
    renderInsights(app, analysis, passed);

    dom.filterAll.textContent = app.config.TOTAL_QUESTIONS;
    dom.filterCorrect.textContent = analysis.correct;
    dom.filterIncorrect.textContent = analysis.incorrect + analysis.unanswered;
    renderReview(app, "all");
  }

  function renderDomainResults(app, analysis) {
    app.dom.domainResults.innerHTML = analysis.domains.map((domain) => {
      const level = domain.percent >= 70 ? "good" : domain.percent >= 50 ? "weak" : "bad";
      return `
        <div class="domain-item domain-item--${level}">
          <div class="domain-item__label" title="${namespace.utils.escapeHtml(domain.title)}">
            <strong>${namespace.utils.escapeHtml(domain.shortTitle)}</strong>
            <small>${domain.correct} / ${domain.total} poprawnych</small>
          </div>
          <div class="domain-bar" aria-label="${namespace.utils.escapeHtml(domain.title)}: ${domain.percent}%">
            <span style="width: ${domain.percent}%"></span>
          </div>
          <div class="domain-item__score">${domain.percent}%</div>
        </div>`;
    }).join("");
  }

  function renderInsights(app, analysis, passed) {
    const sorted = [...analysis.domains].sort((a, b) => b.percent - a.percent);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];
    const passMessage = passed
      ? `Najlepiej opanowany obszar to <strong>${namespace.utils.escapeHtml(strongest.title.toLowerCase())}</strong> — ${strongest.correct}/${strongest.total} poprawnych.`
      : `Największa luka wiedzy dotyczy obszaru <strong>${namespace.utils.escapeHtml(weakest.title.toLowerCase())}</strong> — poprawnie ${weakest.correct}/${weakest.total}.`;

    app.dom.insightBox.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3ZM9 22h6" /></svg>
      <p>${passMessage} ${passed ? "Teraz warto utrwalić dobre wyniki i poprawić najsłabszy temat." : "Skoncentruj powtórkę na dwóch najsłabszych obszarach poniżej."}</p>`;

    const focusDomains = sorted.slice(-2).reverse();
    app.dom.recommendationText.textContent = passed
      ? "Nawet po zdaniu egzaminu warto przejść przez błędy — to najszybsza droga do trwałej wiedzy."
      : "Skup się na dwóch obszarach, które przyniosą Ci najwięcej dodatkowych punktów.";

    app.dom.focusList.innerHTML = focusDomains.map((domain, index) => `
      <div class="focus-item">
        <span class="focus-item__index">0${index + 1}</span>
        <div><strong>${namespace.utils.escapeHtml(domain.title)}</strong><small>${domain.correct}/${domain.total} · ${domain.percent}%</small></div>
      </div>`).join("");
  }

  function renderReview(app, filter) {
    const analysis = namespace.analysis.analyze(app);
    if (!analysis) return;

    let records = analysis.records;
    if (filter === "correct") {
      records = records.filter((record) => record.status === "correct");
    } else if (filter === "incorrect") {
      records = records.filter((record) => record.status !== "correct");
    }

    if (!records.length) {
      app.dom.reviewList.innerHTML = `<div class="review-empty">Brak pytań w tej kategorii.</div>`;
      return;
    }

    app.dom.reviewList.innerHTML = records.map((record) => renderReviewItem(app, record)).join("");
  }

  function renderReviewItem(app, record) {
    const { question, examIndex, selectedOriginalIndex, status } = record;
    if (!question) return "";

    const statusLabel = status === "correct" ? "Poprawna" : status === "incorrect" ? "Błędna" : "Bez odpowiedzi";
    const order = app.state.optionOrder[question.id] || [0, 1, 2, 3];

    const options = order.map((originalIndex, displayIndex) => {
      const isCorrect = originalIndex === question.correct;
      const isSelected = originalIndex === selectedOriginalIndex;
      const classes = [
        "review-option",
        isCorrect ? "is-correct" : "",
        isSelected && !isCorrect ? "is-selected-wrong" : "",
      ].filter(Boolean).join(" ");
      const tag = isCorrect
        ? '<span class="review-option__tag">Poprawna</span>'
        : isSelected
          ? '<span class="review-option__tag">Twoja odpowiedź</span>'
          : "";

      return `
        <div class="${classes}">
          <span class="review-option__letter">${app.config.LETTERS[displayIndex]}</span>
          <span>${namespace.utils.escapeHtml(question.options[originalIndex])}</span>
          ${tag}
        </div>`;
    }).join("");

    return `
      <details class="review-item review-item--${status}">
        <summary class="review-item__summary">
          <span class="review-item__number">${examIndex + 1}</span>
          <span class="review-item__question">${namespace.utils.escapeHtml(question.text)}</span>
          <span class="review-item__status">${statusLabel}</span>
          <svg class="review-item__chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 8 5 5 5-5" /></svg>
        </summary>
        <div class="review-item__content">
          ${question.scenario ? `<div class="scenario">${namespace.utils.escapeHtml(question.scenario)}</div>` : ""}
          <h4>${namespace.utils.escapeHtml(question.text)}</h4>
          <div class="review-options">${options}</div>
          <div class="explanation">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
            <span><strong>Wyjaśnienie:</strong> ${namespace.utils.escapeHtml(question.explanation)}</span>
          </div>
        </div>
      </details>`;
  }

  namespace.views = namespace.views || {};
  namespace.views.results = Object.freeze({
    bind,
    show,
    renderResults,
    renderReview,
  });
})();
