# Agent notes

## Project shape

- The runnable app is in `istqb-foundation-pl/`; the repository root also contains syllabus/reference files, screenshots, and a packaged `.zip` snapshot. Treat the directory, not the archive, as the editable source.
- `index.html` is the browser entrypoint. It loads `questions.js` first and `app.js` second; there is no bundler or module system.
- `app.js` owns the UI, timer, local state, scoring, and results. `questions.js` is the question data. `styles.css` owns presentation and responsive/print behavior.
- Keep components modular: extract distinct UI, state, timer, scoring, and result concerns into smaller, focused files rather than adding more logic to a single large file.
- This is a dependency-free static app: no package manifest, test runner, lint/typecheck config, or CI configuration is present.

## Run and verify

- From `istqb-foundation-pl/`, serve the app with:
  ```powershell
  python -m http.server 8080
  ```
  Then open `http://localhost:8080/`.
- `README.md` also permits opening `index.html` directly, but use a modern browser. A browser smoke test should cover starting a test, answering, flagging, navigation, refresh/resume, finishing, results/review, printing, and both duration choices.
- Quick syntax checks, when Node is available:
  ```powershell
  node --check .\app.js
  node --check .\questions.js
  ```
  There is no automated test command; do not invent one.
- To test from a clean state, remove `localStorage` key `istqb-foundation-pl-attempt-v1` and reload. Otherwise the saved attempt is restored on startup.

## Data and state contracts

- `questions.js` must keep exposing `window.ISTQB_QUESTIONS`; each entry is consumed as `{ id, chapter, k, text, options, correct, explanation, scenario? }`, with four options and `correct` in the range `0..3`.
- `app.js` rejects the whole bank unless it has exactly 40 unique questions with chapter counts `8, 6, 4, 11, 9, 2` for chapters 1–6. A mismatch causes the fatal error screen rather than a partial test.
- Answer randomization is two-level: `correct` is the original option index, while saved answers are display indices. Scoring maps through `state.optionOrder[questionId]`; preserve this mapping when editing question/randomization logic.
- Saved state includes shuffled question and option orders, timestamps, answers, and flags under `istqb-foundation-pl-attempt-v1`. Changing question IDs, bank size, or the state shape can invalidate and clear old attempts.
- The core exam values are 40 questions, a 26-point pass mark, and 60/75-minute variants (stored as `3600`/`4500` seconds). Keep duplicated labels/constants in `app.js` and `index.html` consistent if they change.
- `window.ISTQB_APP_DEBUG` exposes `getState()`, `getRemainingSeconds()`, `analyzeAttempt()`, and `storageAvailable()` for focused browser-console checks.

## Editing gotchas

- Keep the `questions.js` → `app.js` script order in `index.html`; changing it prevents the app from seeing its question bank.
- Dynamic question/result markup is assembled with template strings. Follow the existing `escapeHtml` path for question-derived text and explanations.
- The app is client-only: there is no API, authentication, or server-side persistence. The browser's `localStorage` is the only attempt storage.
