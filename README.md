# Base Vue Project

A Vue 3 + TypeScript starter using Vue CLI (serve/build), Vite (Cypress Component Testing), Yarn 4, ESLint (Airbnb + Vue), and Sass.

## Requirements
- Node 22+
- Yarn 4 (via Corepack)

```bash
corepack enable
node -v        # should be 22.x
yarn -v        # Yarn 4.x
```

## Quickstart
```bash
yarn install --immutable
yarn serve
```
- Dev server: http://localhost:8080

## Scripts
- `yarn serve`: start the Vue CLI dev server
- `yarn build`: production build to `dist/`
- `yarn lint`: run ESLint checks
- `yarn test`: lint then open Cypress Component Test Runner (defaults to Firefox)
- `yarn test:chrome`: lint then open Cypress in Chrome
- `yarn test:headless`: lint then run headless component tests (used in CI)

## Testing (Cypress Component)
- Bundler: Vite; Framework: Vue (`cypress.config.ts`)
- Spec pattern: `src/**/*.spec.{ts,tsx,js,jsx}`
- Example: `src/tests/Foo.spec.ts`
- Open runner:
  ```bash
  yarn test            # Firefox
  yarn test:chrome     # Chrome
  ```
- Headless (CI-equivalent):
  ```bash
  yarn test:headless
  ```

## Linting
- Config: Flat ESLint with `plugin:vue/recommended` + `airbnb-base` and TypeScript rules.
- Run:
  ```bash
  yarn lint
  # optional:
  yarn eslint . --fix
  ```
- Tip: Install the “ESLint” editor extension for inline feedback.

## CI
- GitHub Actions run on pushes/PRs to `main`, using Node 22 + Yarn 4 via Corepack and `yarn test:headless`.
- Workflow file: `.github/workflows/node.js.yml`

## Tech stack
- Vue 3, TypeScript
- Vue Router, Vuex
- Build/serve: Vue CLI
- Component tests: Cypress (+ Vite bundler)
- Styling: Sass

## Project structure

```
base-vue/
├── babel.config.js           # Babel configuration
├── vue.config.js             # Vue CLI configuration
├── vite.config.ts            # Vite configuration for Cypress
├── cypress.config.ts         # Cypress configuration
├── eslint.config.cjs         # ESLint configuration
├── public/
│   ├── index.html            # HTML template
│   └── favicon.ico           # Site favicon
├── src/
│   ├── main.ts               # Vue app entry point
│   ├── App.vue               # Root Vue component
│   ├── App.scss              # Global styles
│   ├── assets/
│   │   └── logo.png          # Static assets
│   ├── components/
│   │   ├── Foo.vue           # Example component
│   │   └── Foo.scss          # Component styles
│   └── tests/
│       └── Foo.spec.ts       # Component tests
├── cypress/
│   ├── fixtures/             # Test data
│   ├── plugins/              # Cypress plugins
│   ├── support/              # Support files
│   ├── downloads/            # Downloaded files during tests
│   └── screenshots/          # Test screenshots
├── .github/
│   └── workflows/
│       └── node.js.yml       # CI/CD workflow
```