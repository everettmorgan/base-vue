# Base Vue Project

A Vue 3 + TypeScript starter using Vite, Vitest, Yarn 4, ESLint, and Sass.

## Requirements

- Node 22+
- Yarn 4 via Corepack

```bash
corepack enable
node -v
yarn -v
```

## Quickstart

```bash
yarn install --immutable
yarn dev
```

The dev server runs at the URL printed by Vite, usually http://localhost:5173.

## Scripts

- `yarn dev`: start the Vite dev server
- `yarn serve`: alias for `yarn dev`
- `yarn build`: type-check and create a production build in `dist/`
- `yarn preview`: preview the production build locally
- `yarn lint`: run ESLint checks
- `yarn typecheck`: run Vue-aware TypeScript checks
- `yarn test`: run Vitest once
- `yarn test:watch`: run Vitest in watch mode

## Testing

Vitest runs component tests in a jsdom environment. Component tests use Vue Test Utils.

```bash
yarn test
```

The example component test lives at `src/tests/Foo.spec.ts`.

## Linting And Type Checking

The project uses ESLint flat config with Vue and TypeScript parsing.

```bash
yarn lint
yarn typecheck
```

## CI

GitHub Actions run on pushes and pull requests to `main` using Node 22 and Yarn 4:

```bash
yarn install --immutable
yarn lint
yarn typecheck
yarn test
yarn build
```

Workflow file: `.github/workflows/node.js.yml`.

## Tech Stack

- Vue 3, TypeScript
- Vite
- Vitest, Vue Test Utils, jsdom
- Vue Router and Vuex are installed as starter dependencies
- Sass

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
│   ├── App.vue
│   ├── App.scss
│   ├── vite-env.d.ts
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Foo.vue
│   │   └── Foo.scss
│   └── tests/
│       └── Foo.spec.ts
└── .github/
    └── workflows/
        └── node.js.yml
```
