(() => {
  "use strict";

  const namespace = window.ISTQB;

  function analyzeAttempt(app) {
    if (!app.state) return null;

    const records = app.state.questionOrder.map((questionId, examIndex) => {
      const question = namespace.state.getQuestion(app, questionId);
      const selectedDisplayIndex = app.state.answers[questionId];
      const hasAnswer = Number.isInteger(selectedDisplayIndex);
      const optionOrder = app.state.optionOrder[questionId] || [0, 1, 2, 3];
      const selectedOriginalIndex = hasAnswer ? optionOrder[selectedDisplayIndex] : null;
      const isCorrect = Boolean(question && hasAnswer && selectedOriginalIndex === question.correct);

      return {
        question,
        examIndex,
        hasAnswer,
        selectedOriginalIndex,
        isCorrect,
        status: !hasAnswer ? "unanswered" : isCorrect ? "correct" : "incorrect",
      };
    });

    const domains = Object.keys(app.config.CHAPTERS).map((chapterId) => {
      const chapterRecords = records.filter(
        (record) => record.question && record.question.chapter === Number(chapterId),
      );
      const correct = chapterRecords.filter((record) => record.isCorrect).length;
      return {
        id: Number(chapterId),
        ...app.config.CHAPTERS[chapterId],
        total: chapterRecords.length,
        correct,
        percent: chapterRecords.length === 0
          ? 0
          : Math.round((correct / chapterRecords.length) * 100),
      };
    }).sort((a, b) => a.id - b.id);

    return {
      records,
      domains,
      correct: records.filter((record) => record.isCorrect).length,
      incorrect: records.filter((record) => record.status === "incorrect").length,
      unanswered: records.filter((record) => record.status === "unanswered").length,
      elapsedSeconds: app.state.elapsedSeconds || namespace.state.calculateElapsed(app),
    };
  }

  namespace.analysis = Object.freeze({
    analyze: analyzeAttempt,
  });
})();
