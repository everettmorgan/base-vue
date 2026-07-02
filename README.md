# Base Vue Project

[![CI](https://github.com/everettmorgan/base-vue/actions/workflows/node.js.yml/badge.svg)](https://github.com/everettmorgan/base-vue/actions/workflows/node.js.yml)
[![CodeQL](https://github.com/everettmorgan/base-vue/actions/workflows/codeql.yml/badge.svg)](https://github.com/everettmorgan/base-vue/actions/workflows/codeql.yml)
[![Standard Readme](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)

> A Vue 3 and TypeScript starter using Vite, Vitest, Pinia, Vue Router, Yarn 4, ESLint, Sass, and GitHub security scanning.

This repository is a small, modern Vue application baseline. It is set up for fast local development, Vue-aware type checking, colocated component tests, and CI coverage across current Node LTS/runtime targets.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [CI and Security](#ci-and-security)
- [Project Structure](#project-structure)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

The app is intentionally minimal but wired for real-world patterns. It uses [Pinia](https://pinia.vuejs.org/) for state management and [Vue Router](https://router.vuejs.org/) for navigation, demonstrated by a shared counter store and two routes (a home view and a lazy-loaded about view).

The source tree follows a Vite-oriented Vue layout:

- `src/app/` contains the app shell (`App.vue`), which renders navigation and the active route via `<RouterView>`.
- `src/router/` contains the Vue Router configuration.
- `src/stores/` contains Pinia stores.
- `src/views/` contains route-level views.
- `src/components/` contains feature/component folders.
- Component styles and tests are colocated with the component they exercise.
- `public/` contains static assets served by Vite.

## Install

Requirements:

- Node 22 or newer
- Yarn 4 via Corepack

```bash
corepack enable
yarn install --immutable
```

## Usage

Start the Vite dev server:

```bash
yarn dev
```

Vite prints the local URL when the server starts, usually `http://localhost:5173`.

Preview a production build:

```bash
yarn build
yarn preview
```

## Development

Available scripts:

- `yarn dev`: start the Vite dev server.
- `yarn serve`: alias for `yarn dev`.
- `yarn build`: run Vue type checking and create a production build in `dist/`.
- `yarn preview`: preview the production build locally.
- `yarn lint`: run ESLint.
- `yarn typecheck`: run Vue-aware TypeScript checks.
- `yarn test`: run Vitest once.
- `yarn test:watch`: run Vitest in watch mode.

## Testing

Run the local verification set before pushing:

```bash
yarn lint
yarn typecheck
yarn test
yarn build
```

Vitest runs component tests in a jsdom environment with Vue Test Utils. The example component test is colocated at `src/components/DemoCounter/DemoCounter.spec.ts`; it installs a fresh Pinia instance per case and asserts the shared counter store increments on click.

## CI and Security

GitHub Actions workflows:

- `.github/workflows/node.js.yml`: CI matrix for Node 22 and Node 24. Runs install, lint, type check, tests, and build.
- `.github/workflows/codeql.yml`: CodeQL scanning for JavaScript/TypeScript and GitHub Actions workflows on push, pull request, weekly schedule, and manual dispatch.
- `.github/workflows/dependency-review.yml`: dependency review on pull requests, failing high and critical vulnerability findings.

Dependabot checks GitHub Actions and package updates weekly via `.github/dependabot.yml`.

## Project Structure

```text
base-vue/
├── index.html
├── vite.config.ts
├── eslint.config.cjs
├── tsconfig.json
├── public/
│   └── favicon.ico
├── src/
│   ├── main.ts
│   ├── vite-env.d.ts
│   ├── app/
│   │   └── App.vue
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   └── DemoCounter/
│   │       ├── DemoCounter.vue
│   │       ├── DemoCounter.scss
│   │       └── DemoCounter.spec.ts
│   ├── router/
│   │   └── index.ts
│   ├── stores/
│   │   └── counter.ts
│   └── views/
│       ├── HomeView.vue
│       └── AboutView.vue
└── .github/
    ├── dependabot.yml
    └── workflows/
        ├── codeql.yml
        ├── dependency-review.yml
        └── node.js.yml
```

## Maintainers

[@everettmorgan](https://github.com/everettmorgan)

## Contributing

Use pull requests into `main`. Keep changes focused, update tests or docs when behavior changes, and run the local verification set before requesting review:

```bash
yarn lint
yarn typecheck
yarn test
yarn build
```

## License

MIT (c) Everett Morgan. See [LICENSE](LICENSE).
