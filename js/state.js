(() => {
  "use strict";

  const namespace = window.ISTQB;

  function getQuestion(app, questionId) {
    return app.questionsById.get(questionId) || app.questions.find((question) => question.id === questionId) || null;
  }

  function getCurrentQuestion(app) {
    if (!app.state) return null;
    const questionId = app.state.questionOrder[app.state.currentIndex];
    return getQuestion(app, questionId);
  }

  function getAnsweredCount(app) {
    if (!app.state) return 0;
    return Object.values(app.state.answers).filter(Number.isInteger).length;
  }

  function startNewExam(app, durationSeconds) {
    const allowedDurations = Object.values(app.config.DURATIONS);
    if (!allowedDurations.includes(durationSeconds)) {
      durationSeconds = app.config.DURATIONS[60];
    }

    const startedAt = Date.now();
    app.state = {
      version: app.config.STATE_VERSION,
      startedAt,
      endAt: startedAt + durationSeconds * 1000,
      durationSeconds,
      completedAt: null,
      finished: false,
      finishedReason: null,
      currentIndex: 0,
      questionOrder: namespace.utils.shuffled(app.questions.map((question) => question.id)),
      optionOrder: {},
      answers: {},
      flagged: [],
    };

    app.questions.forEach((question) => {
      app.state.optionOrder[question.id] = namespace.utils.shuffled([0, 1, 2, 3]);
    });

    namespace.storage.save(app);
  }

  function setCurrentIndex(app, index) {
    if (!app.state || app.state.finished) return false;
    if (!Number.isInteger(index) || index < 0 || index >= app.config.TOTAL_QUESTIONS) {
      return false;
    }

    app.state.currentIndex = index;
    return true;
  }

  function selectAnswer(app, questionId, displayIndex) {
    if (!app.state || app.state.finished) return false;
    if (!Number.isInteger(displayIndex) || displayIndex < 0 || displayIndex > 3) {
      return false;
    }

    app.state.answers[questionId] = displayIndex;
    return true;
  }

  function toggleFlag(app) {
    const question = getCurrentQuestion(app);
    if (!app.state || app.state.finished || !question) return null;

    const questionIndex = app.state.flagged.indexOf(question.id);
    if (questionIndex >= 0) {
      app.state.flagged.splice(questionIndex, 1);
      return { isFlagged: false, message: "Oznaczenie pytania zostało usunięte." };
    }

    app.state.flagged.push(question.id);
    return { isFlagged: true, message: "Pytanie oznaczone do powtórzenia." };
  }

  function finish(app, reason) {
    if (!app.state || app.state.finished) return false;

    const now = Date.now();
    const effectiveEnd = reason === "time"
      ? app.state.endAt
      : Math.min(now, app.state.endAt);
    const elapsedMilliseconds = Math.max(1000, effectiveEnd - app.state.startedAt);

    app.state.finished = true;
    app.state.finishedReason = reason;
    app.state.completedAt = now;
    app.state.elapsedSeconds = Math.min(
      app.state.durationSeconds,
      Math.floor(elapsedMilliseconds / 1000),
    );

    namespace.storage.save(app);
    return true;
  }

  function getRemainingSeconds(app) {
    if (!app.state) return 0;
    return Math.max(0, Math.ceil((app.state.endAt - Date.now()) / 1000));
  }

  function calculateElapsed(app) {
    if (!app.state) return 0;
    const end = Math.min(Date.now(), app.state.endAt);
    return Math.max(0, Math.floor((end - app.state.startedAt) / 1000));
  }

  namespace.state = Object.freeze({
    getQuestion,
    getCurrentQuestion,
    getAnsweredCount,
    startNewExam,
    setCurrentIndex,
    selectAnswer,
    toggleFlag,
    finish,
    getRemainingSeconds,
    calculateElapsed,
  });
})();
