This is Drew Tsun's personal website coded using [Next.js](https://nextjs.org/), bootstrapped with 
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The app uses the
[Material UI](https://mui.com/) component library and is styled using [Emotion](https://emotion.sh/). Data is fetched
from [Firestore](https://firebase.google.com/docs/firestore) with assets stored in 
[Firebase Cloud Storage](https://firebase.google.com/docs/storage). In the future, I plan to migrate data to
[DynamoDB](https://aws.amazon.com/dynamodb/) and store assets in [S3](https://aws.amazon.com/s3/).

# Local Development

Dependencies should first be installed with `yarn install`.

The development server ([next dev docs](https://nextjs.org/docs/pages/api-reference/next-cli#development)) can be started with

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with a web browser to see the result.

# Production Deployment

The [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) is used to deploy this site 
([Next.js deployment documentation](https://nextjs.org/docs/deployment)).

The Vercel Platform normally creates a production build, but sometimes, a production build might need to be 
replicated locally. This can be done by building the Next.js site locally 
([next build docs](https://nextjs.org/docs/pages/api-reference/next-cli#build))

```bash
yarn build
```

and starting the build that was just created ([next start docs](https://nextjs.org/docs/pages/api-reference/next-cli#production))

```bash
yarn start
```

Ignored build steps for Vercel deployments can be configured in `vercel_ignored_build_step.sh` ([ignored build step docs](https://vercel.com/docs/projects/overview#ignored-build-step)).

# Testing

To assert the functionality of this application, [Jest](https://jestjs.io/) is used to perform unit testing, testing 
Next.js components via the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). 
Test files can be created via creating `<component-name>.test.ts(x)` files.

A test server that watches for changed tests can be started via:

```bash
yarn test
```

In the event that Jest snapshots need to be updated, run

```bash
yarn test:update-snapshots
```

To simulate the testing that happens during a deployment to Vercel, use:

```bash
yarn test:ci
```

In order to reduce the amount of unit tests required for commits, a modified command is used for commits:

```bash
yarn test:commit
```

Testing rules can be configured in `jest.config.js` and `jest.setup.js`.

# Linting

Linting rules are fairly simple, using the recommended ruleset for `eslint`, TypeScript, Next.js and Prettier.
Only [`simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort) was added to ensure that imports are sorted correctly. 

Linting can be achieved using 

```bash
yarn lint
```

To auto-fix errors while linting, run:

```bash
yarn lint:fix
```

Lint rules can be configured in `.eslintrc.js`.

# Storybook

I will support development of new components using [Storybook](https://storybook.js.org/) in the future.

# Dependency Management

[dependabot](https://github.com/dependabot) helps automatically keep dependencies updated. Dependabot can be configured
at `.github/dependabot.yml`. More information on how to configure Dependabot can be found
[here](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide). 

# Committing Files

Prior to committing files to the repo, all files must pass the following:
- Linting
- Unit Tests

[Husky](https://typicode.github.io/husky/) runs prior to every commit, and can be configured via `.husky/`

# Style Guide

## Creating Tests

Do not test:
- Constants (`src/const/`)
- Next.js pages (`app/`)
- Types (`src/types/`)
- Themes (`src/themes/`)

Ideally tests should cover all control flow paths if possible.

## Creating Styled Components

For one-off components, it is better to utilize the [`sx` property](https://mui.com/system/getting-started/the-sx-prop/) 
of each component.

Only use MUI's [`styled` function](https://mui.com/system/styled/) for the following cases:
- Styling the component depends on the MUI theme.
- Styling a component that isn't a part of MUI (e.g.
[Next.js Link](https://nextjs.org/docs/pages/api-reference/components/link), 
[Next.js Image](https://nextjs.org/docs/pages/api-reference/components/image). 

The component will need to be stored in `src/component/<type>/styled`, where `<type>` is the classification of the 
component.

## MUI Integration

When using hyperlinks, use the `MuiNextLink` component found in `src/components/text/NextLinkComposed.tsx` file. 

If any MUI components need [to be composed via the `component` prop](https://mui.com/material-ui/guides/composition/) 
that needs to integrate with [Next.js's Link component](https://nextjs.org/docs/pages/api-reference/components/link), 
use the `NextLinkComposed` component found in `src/components/text/NextLinkComposed.tsx` file.
