# cruk-react-components

React components implementing CRUK and SU2C design tokens

## View the docs

cruk-react-component docs site: https://master.d2qmm2ybdxfdzp.amplifyapp.com/

**Username**: cruk **Password**: jvku2cgl4n

## Usage

This repository is private, so to install the library you will need SSH access or a personal access token (PAT) if SSH is not possible.

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

Install dependencies.

```sh
npm i
```

Start local development environment 💥

```sh
npm start
```

## Docker

A docker-compose.yml file is provided to aid development/testing in a consistent environment.

Install dependencies.

```bash
docker-compose run npm
```

Start local development environment

```bash
docker-compose up -d server
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
