(() => {
  "use strict";

  const namespace = window.ISTQB;

  function validateQuestionBank(questions, config) {
    if (!Array.isArray(questions) || questions.length !== config.TOTAL_QUESTIONS) {
      return false;
    }

    const ids = new Set();
    const chapterCounts = Object.fromEntries(
      Object.keys(config.CHAPTER_COUNTS).map((chapterId) => [chapterId, 0]),
    );

    for (const question of questions) {
      if (
        !question ||
        typeof question.id !== "string" ||
        ids.has(question.id) ||
        !Array.isArray(question.options) ||
        question.options.length !== 4 ||
        !Number.isInteger(question.correct) ||
        question.correct < 0 ||
        question.correct > 3 ||
        !Object.prototype.hasOwnProperty.call(chapterCounts, question.chapter)
      ) {
        return false;
      }

      ids.add(question.id);
      chapterCounts[question.chapter] += 1;
    }

    return Object.entries(config.CHAPTER_COUNTS).every(
      ([chapterId, expectedCount]) => chapterCounts[chapterId] === expectedCount,
    );
  }

  namespace.questionBank = Object.freeze({
    validate: validateQuestionBank,
  });
})();
