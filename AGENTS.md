# Agent notes

## Project shape

- The runnable app is in `istqb-foundation-pl/`; the repository root also contains syllabus/reference files, screenshots, and a packaged `.zip` snapshot. Treat the directory, not the archive, as the editable source.
- `index.html` is the browser entrypoint. It loads `questions.js` first, then `js/*`, then `app.js`; there is no bundler or module system.
- `app.js` is only the bootstrap: it builds the `app` object, wires events, restores saved state, and finishes an attempt. Logic lives in focused modules under `js/`:
  - `js/config.js` — exam constants (40 questions, pass mark 26, 60-minute duration, chapter titles)
  - `js/utils.js` — escaping, time formatting, shuffling, Polish pluralization
  - `js/question-bank.js` — validation of the question bank contract
  - `js/dom.js` — DOM cache, view switching, toasts, fatal error screen
  - `js/storage.js` — `localStorage` read/write plus state validation
  - `js/state.js` — attempt state and operations on it
  - `js/timer.js` — countdown
  - `js/analysis.js` — scoring and per-chapter breakdown
  - `js/views/landing.js`, `js/views/exam.js`, `js/views/results.js` — one module per view
- `questions.js` is the question data. `styles.css` is the cascade entrypoint; `styles/` holds tokens, layout, views, responsive, dark mode, and print rules.
- Keep components modular: add new concerns as new small files under `js/`, not as more logic in `app.js` or in a view.
- This is a dependency-free static app: no package manifest, test runner, lint/typecheck config, or CI configuration is present.

## Run and verify

- From `istqb-foundation-pl/`, serve the app with:
  ```powershell
  python -m http.server 8080
  ```
  Then open `http://localhost:8080/`.
- `README.md` also permits opening `index.html` directly, but use a modern browser. A browser smoke test should cover starting a test, answering, flagging, navigation, refresh/resume, finishing (manually and on timeout), results/review filters, and printing.
- Quick syntax checks, when Node is available:
  ```powershell
  Get-ChildItem -Recurse -Filter *.js | ForEach-Object { node --check $_.FullName }
  ```
  There is no automated test command; do not invent one.
- To test from a clean state, remove `localStorage` key `istqb-foundation-pl-attempt-v1` and reload. Otherwise the saved attempt is restored on startup.

## Data and state contracts

- `questions.js` must keep exposing `window.ISTQB_QUESTIONS`; each entry is consumed as `{ id, chapter, k, ref, text, options, correct, explanation, scenario? }`, with four options and `correct` in the range `0..3`.
- `app.js` rejects the whole bank unless it has exactly 40 unique questions with chapter counts `8, 6, 4, 11, 9, 2` for chapters 1–6. A mismatch causes the fatal error screen rather than a partial test.
- `k` is the cognitive level (`K1`, `K2`, `K3`) and `ref` is the syllabus objective (`FL-x.y.z`). Both are shown in the exam view and in the review, so keep them accurate and derive them from the official CTFL v4.0.1 syllabus structure.
- `scenario` is optional background shown above the question text; use it to move a situation out of `text` without changing what is being asked.
- Answer randomization is two-level: `correct` is the original option index, while saved answers are display indices. Scoring maps through `state.optionOrder[questionId]`; preserve this mapping when editing question/randomization logic.
- Saved state includes shuffled question and option orders, timestamps, answers, and flags under `istqb-foundation-pl-attempt-v1`. Changing question IDs, bank size, or the state shape can invalidate and clear old attempts.
- The core exam values are 40 questions, a 26-point pass mark, and a 60-minute duration (`3600` seconds, `BASE_DURATION_MINUTES: 60`). The app has no duration choice in the UI. Keep duplicated labels/constants in `app.js`, `config.js`, and `index.html` consistent if they change.
- `window.ISTQB_APP_DEBUG` exposes `getState()`, `getRemainingSeconds()`, `analyzeAttempt()`, and `storageAvailable()` for focused browser-console checks.

## Content and wording

- All user-facing text is Polish. Keep it factual: the app simulates the exam, so never imply that a result is or leads to a certificate. The landing notice, footer, and `README.md` all carry that disclaimer; keep them consistent when editing any of them.
- Use one term per concept: `test` for the app's own flow (start, finish, results), `egzamin` only when describing the real CTFL exam. Prefer `obszary tematyczne` over mixing `obszary` and `tematy`.
- Version wording: the certification is `CTFL v4.0`, the syllabus document is `v4.0.1`. Do not mix the two in one label.

## Editing gotchas

- Keep the `questions.js` → `js/*` → `app.js` script order in `index.html`; changing it prevents the app from seeing its question bank or modules.
- Dynamic question/result markup is assembled with template strings. Follow the existing `escapeHtml` path for question-derived text and explanations.
- The app is client-only: there is no API, authentication, or server-side persistence. The browser's `localStorage` is the only attempt storage.
