(() => {
  "use strict";

  const namespace = window.ISTQB;

  function bind(app) {
    const { dom } = app;

    dom.exitTestButton.addEventListener("click", () => openFinishDialog(app));
    dom.finishButton.addEventListener("click", () => openFinishDialog(app));
    dom.mobileFinishButton.addEventListener("click", () => openFinishDialog(app));
    dom.mapButton.addEventListener("click", () => openQuestionNav(app));
    dom.closeNavButton.addEventListener("click", () => closeQuestionNav(app));
    dom.navBackdrop.addEventListener("click", () => closeQuestionNav(app));
    dom.previousButton.addEventListener("click", () => goPrevious(app));
    dom.nextButton.addEventListener("click", () => goNext(app));
    dom.flagButton.addEventListener("click", () => toggleFlag(app));

    dom.answers.addEventListener("change", (event) => {
      handleAnswerSelection(app, event);
    });

    dom.questionGrid.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest("[data-question-index]");
      if (!button || !app.state || app.state.finished) return;

      const index = Number(button.dataset.questionIndex);
      if (!namespace.state.setCurrentIndex(app, index)) return;

      namespace.storage.save(app);
      renderQuestion(app);
      renderQuestionGrid(app);
      closeQuestionNav(app);
      scrollToQuestion(app);
    });

    dom.finishDialog.addEventListener("close", () => {
      if (dom.finishDialog.returnValue === "confirm") {
        dom.finishDialog.returnValue = "";
        app.finishExam("manual");
      }
    });
  }

  function show(app) {
    namespace.dom.setView(app, "exam");
    namespace.dom.setExamChrome(app, true);
    closeQuestionNav(app);
    renderQuestion(app);
    renderQuestionGrid(app);
    updateProgress(app);
  }

  function renderQuestion(app) {
    if (!app.state) return;
    const question = namespace.state.getCurrentQuestion(app);
    if (!question) return;

    const position = app.state.currentIndex + 1;
    const selectedOption = app.state.answers[question.id];
    const isFlagged = app.state.flagged.includes(question.id);
    const { dom } = app;

    dom.questionLabel.textContent = `PYTANIE ${String(position).padStart(2, "0")}`;
    dom.questionType.textContent = question.ref
      ? `${question.ref} · Poziom ${question.k} · jedna odpowiedź`
      : `Poziom ${question.k} · jedna odpowiedź`;
    dom.questionText.textContent = question.text;

    if (question.scenario) {
      dom.questionScenario.textContent = question.scenario;
      dom.questionScenario.hidden = false;
    } else {
      dom.questionScenario.hidden = true;
      dom.questionScenario.textContent = "";
    }

    const order = app.state.optionOrder[question.id] || [0, 1, 2, 3];
    dom.answers.innerHTML = order.map((originalIndex, displayIndex) => {
      const selected = selectedOption === displayIndex;
      return `
        <label class="answer-option${selected ? " is-selected" : ""}">
          <input class="answer-radio" type="radio" name="answer" value="${displayIndex}" ${selected ? "checked" : ""} />
          <span class="answer-option__letter" aria-hidden="true">${app.config.LETTERS[displayIndex]}</span>
          <span class="answer-option__text">${namespace.utils.escapeHtml(question.options[originalIndex])}</span>
          <span class="answer-option__check" aria-hidden="true"></span>
        </label>`;
    }).join("");

    dom.flagButton.classList.toggle("is-active", isFlagged);
    dom.flagButton.setAttribute("aria-pressed", String(isFlagged));
    dom.flagButton.querySelector("span").textContent = isFlagged ? "Oznaczono" : "Oznacz";

    dom.previousButton.disabled = position === 1;
    dom.nextButton.innerHTML = position === app.config.TOTAL_QUESTIONS
      ? `Zakończ test <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m3 10 4 4 10-10" /></svg>`
      : `Dalej <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 4 6 6-6 6" /></svg>`;

    dom.questionCounter.textContent = `${position} z ${app.config.TOTAL_QUESTIONS}`;
  }

  function handleAnswerSelection(app, event) {
    if (!(event.target instanceof Element)) return;
    const input = event.target.closest('input[name="answer"]');
    if (!input || !app.state) return;

    const question = namespace.state.getCurrentQuestion(app);
    if (!question) return;
    if (!namespace.state.selectAnswer(app, question.id, Number(input.value))) return;

    namespace.storage.save(app);
    renderSelectedAnswers(app);
    renderQuestionGrid(app);
    updateProgress(app);
  }

  function renderSelectedAnswers(app) {
    app.dom.answers.querySelectorAll(".answer-option").forEach((label) => {
      const radio = label.querySelector("input");
      label.classList.toggle("is-selected", radio.checked);
    });
  }

  function goPrevious(app) {
    if (!app.state || app.state.currentIndex === 0) return;
    if (!namespace.state.setCurrentIndex(app, app.state.currentIndex - 1)) return;

    namespace.storage.save(app);
    renderQuestion(app);
    renderQuestionGrid(app);
    scrollToQuestion(app);
  }

  function goNext(app) {
    if (!app.state) return;
    if (app.state.currentIndex >= app.config.TOTAL_QUESTIONS - 1) {
      openFinishDialog(app);
      return;
    }

    if (!namespace.state.setCurrentIndex(app, app.state.currentIndex + 1)) return;
    namespace.storage.save(app);
    renderQuestion(app);
    renderQuestionGrid(app);
    scrollToQuestion(app);
  }

  function toggleFlag(app) {
    const result = namespace.state.toggleFlag(app);
    if (!result) return;

    namespace.storage.save(app);
    renderQuestion(app);
    renderQuestionGrid(app);
    namespace.dom.showToast(app, result.message);
  }

  function renderQuestionGrid(app) {
    if (!app.state) return;

    app.dom.questionGrid.innerHTML = app.state.questionOrder.map((questionId, index) => {
      const answered = Number.isInteger(app.state.answers[questionId]);
      const flagged = app.state.flagged.includes(questionId);
      const current = index === app.state.currentIndex;
      const classes = [
        "question-number",
        answered ? "is-answered" : "",
        flagged ? "is-flagged" : "",
        current ? "is-current" : "",
      ].filter(Boolean).join(" ");
      const accessibilitySuffix = [
        answered ? "odpowiedziane" : "bez odpowiedzi",
        flagged ? "oznaczone" : "",
        current ? "bieżące" : "",
      ].filter(Boolean).join(", ");

      return `<button type="button" class="${classes}" data-question-index="${index}" aria-label="Pytanie ${index + 1}, ${accessibilitySuffix}"${current ? ' aria-current="step"' : ""}>${index + 1}</button>`;
    }).join("");
  }

  function updateProgress(app) {
    if (!app.state) return;
    const answered = namespace.state.getAnsweredCount(app);
    const percent = (answered / app.config.TOTAL_QUESTIONS) * 100;
    app.dom.answeredCounter.textContent = answered;
    app.dom.progressBar.style.width = `${percent}%`;
    app.dom.progressTrack.setAttribute("aria-valuenow", answered);
  }

  function openFinishDialog(app) {
    if (!app.state || app.state.finished) return;

    const answered = namespace.state.getAnsweredCount(app);
    const unanswered = app.config.TOTAL_QUESTIONS - answered;
    const remaining = namespace.state.getRemainingSeconds(app);

    app.dom.finishSummary.innerHTML = `
      <div><strong>${answered}</strong><span>${namespace.utils.pluralizeAnswers(answered)}</span></div>
      <div><strong>${unanswered}</strong><span>bez odpowiedzi</span></div>
      <div><strong>${namespace.utils.formatTime(remaining)}</strong><span>pozostało</span></div>`;
    app.dom.finishDialogText.textContent = unanswered > 0
      ? `Pozostało ${unanswered} ${namespace.utils.pluralizeQuestions(unanswered)} bez odpowiedzi. Po zakończeniu nie będzie można wrócić do testu.`
      : "Odpowiedziano na wszystkie pytania. Po zakończeniu nie będzie można wrócić do testu.";

    if (typeof app.dom.finishDialog.showModal === "function") {
      if (!app.dom.finishDialog.open) app.dom.finishDialog.showModal();
    } else {
      app.finishExam("manual");
    }
  }

  function openQuestionNav(app) {
    if (!app.state || app.state.finished) return;
    app.dom.questionNav.classList.add("is-open");
    app.dom.navBackdrop.hidden = false;
    app.dom.mapButton.setAttribute("aria-expanded", "true");
  }

  function closeQuestionNav(app) {
    app.dom.questionNav.classList.remove("is-open");
    app.dom.navBackdrop.hidden = true;
    app.dom.mapButton.setAttribute("aria-expanded", "false");
  }

  function scrollToQuestion(app) {
    const card = document.querySelector(".question-card");
    if (card && window.innerWidth < 901) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  namespace.views = namespace.views || {};
  namespace.views.exam = Object.freeze({
    bind,
    show,
    renderQuestion,
    renderQuestionGrid,
    updateProgress,
    openFinishDialog,
    openQuestionNav,
    closeQuestionNav,
  });
})();
