# cruk-react-components

React implementation of the CRUK design system.

## View the docs

cruk-react-component docs site: https://master.d2qmm2ybdxfdzp.amplifyapp.com/

**Username**: cruk **Password**: jvku2cgl4n

## Usage

This repository is private, so to install the library you will need SSH access or a personal access token (PAT) if SSH is not possible.

Here's how to log in and configure your npm to download private packages from [CRUKorg GitHub Packages](https://github.com/orgs/CRUKorg/packages)

1. Go to your GitHub _Account settings > Developer settings > Personal access tokens_ and [create a token with the repo and read:packages scopes](https://github.com/settings/tokens/new?scopes=repo,read:packages&description=npm). Remember to **copy the token to your clipboard!**

2. At the terminal, run `npm login --registry=https://npm.pkg.github.com`. When prompted, enter your GitHub username, paste the token from your clipboard instead of entering your GitHub password (it'll be invisible), then enter your email address.

3. In the root directory of your project you will need to add a .npmrc file with the following contents
   `registry=https://npm.pkg.github.com/CRUKorg`

4. Now go ahead with `npm install` in this directory. npm will download the private package from our registry and others from the original npm registry.

- [Creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
- [Authenticating to GitHub packages](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

---

Add cruk-react-components and its peer dependencies react, react-dom and styled-components to your package.json file.

```sh
"dependencies": {
  "cruk-react-components": "git+https://github.com/CRUKorg/cruk-react-components.git",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "styled-components": "^5.0.0"
}
```

To use a personal access token, follow this link to [create a new personal access token](https://github.com/settings/tokens/new?scopes=repo&description=cruk-react-components) with the `repo` scope and add your token to the package URL. Replace `[INSERT TOKEN HERE]` with the token, including the `[]` brackets.

```sh
"dependencies": {
  "cruk-react-components": "git+https://[INSERT TOKEN HERE]:x-oauth-basic@github.com/CRUKorg/cruk-react-components.git"
}
```

GitHub help: [Creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

After an `npm install`, you can start importing components from the library:

```js
import { Button } from 'cruk-react-components';

const MyComponent = () => (
  <div>
    <Button />
  </div>
);
```

## Development

Clone this repository

```sh
git clone git@github.com:CRUKorg/cruk-react-components.git
```

Start local development environment 💥

```sh
npm run dev
```

## Development

Clone this repository

```sh
git clone git@github.com:CRUKorg/cruk-react-components.git
```

Start local development environment 💥

```sh
npm run dev
```

## Testing

Jest: Unit testing,
Cypress: Component function, accessibility and image snapshot tests (Image snapshot test are run in headless mode only they will be skipped in interactive mode).

Run all tests Jest and Cypress including image snapshots

```sh
npm run test
```

Update Cypress image snapshots

```sh
npm run test:update
```

Run Cypress interactive testing suite (functional and accessibility tests)

```sh
npm run cypress
```

Run Cypress headlessly including image snapshots

```sh
npm run cypress-headless
```

To run a specific test Cypress headlessly

```sh
ARGS="--spec src/components/Modal/test.cypress.tsx" npm run cypress-headless
```

To run and update a specific snapshot headlessly

```sh
ARGS="--spec src/components/Modal/test.cypress.tsx" npm run cypress-headless:update
```

## Docker

A docker-compose.yml file is provided to aid development/testing in a consistent environment.

Install dependencies.

```bash
docker-compose run npm
```

Start local development environment

```bash
docker-compose up server
```

This should start the server and you should be able to see it running here: http://127.0.0.1:8080/
Tests will not work locally unless this is running in a terminal

Run Cypress tests

```bash
docker-compose run cypress
```

Roadmap

## Roadmap

- Sort out folder structure
- Migrate tests from OF
- Write more tests
- CI/CD pipeline
  - Build docs to github pages until CRUK Design system takes over
  - Build components
- Look at value that [Lerna](https://lerna.js.org/) could give us
