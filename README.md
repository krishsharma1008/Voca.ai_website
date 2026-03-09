# VOCA AI Website

Marketing website for **VOCA AI** — an AI-powered Revenue Voice OS that provides real-time call-center assist and autonomous multilingual voice agents.

Live site: https://krishsharma1008.github.io/Voca.ai_website/ *(if hosted via GitHub Pages)*

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (glassmorphism + skew-morphism design) |
| Animations | [GSAP](https://gsap.com/) (loaded via CDN) |
| Fonts | Google Fonts — Poppins |
| Form submission | [FormSubmit](https://formsubmit.co/) |
| Testing | [Playwright](https://playwright.dev/) |
| Dev server | Python 3 `http.server` |

## Local Development

**Prerequisites:** Python 3 and Node.js (for tests).

```bash
# Clone the repo
git clone https://github.com/krishsharma1008/Voca.ai_website.git
cd Voca.ai_website

# Start the dev server
python3 -m http.server 8000
# OR use the npm script
npm run serve
```

Open http://localhost:8000 in your browser.

> No build step required — the site is plain HTML/CSS/JS.

## Project Structure

```
.
├── index.html          # Single-page application markup
├── styles.css          # All styles (layout, components, animations)
├── script.js           # GSAP animations, nav scroll, audio demo logic
├── assets/
│   ├── voca-logo.svg   # Brand logo
│   ├── voca-demo.mp3   # Voice demo audio clip
│   └── demo-poster.jpg # Poster image for the demo section
├── tests/
│   ├── unit/           # Unit-level Playwright tests (DOM, nav, forms)
│   └── generated/      # Workflow Playwright tests (CTA flow, demo, nav)
├── playwright.config.js
└── package.json
```

## Testing

Install dependencies, then run Playwright tests:

```bash
npm install
npx playwright install chromium

# Run all tests (auto-starts dev server on port 8000)
npx playwright test

# Run only unit tests
npm run test:unit

# Run only generated workflow tests
npm run test:generated
```

Test results are written to `test-results.json`. Screenshots and videos for failed tests are saved under `testbot-reports/artifacts/`.

## Deployment

The site is a static bundle with no build step. Deploy by serving the repository root from any static host (GitHub Pages, Netlify, Vercel, etc.).

For GitHub Pages: enable Pages on the `main` branch root in repository Settings → Pages.

## Environment Notes

- **FormSubmit:** The contact/demo form uses [FormSubmit](https://formsubmit.co/). The first submission to a new email address triggers an activation email — click the link to enable form delivery.
- **Audio asset:** `assets/voca-demo.mp3` must be present for the voice demo section to function. The file is tracked in the repo; do not delete it.
- **GSAP CDN:** Animations require an internet connection during development (GSAP is loaded from CDN, not bundled).
