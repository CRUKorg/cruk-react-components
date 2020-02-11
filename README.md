# cruk-react-components

React components implementing CRUK and SU2C design tokens

## View the docs

cruk-react-component docs site: https://master.d2qmm2ybdxfdzp.amplifyapp.com/

**Username**: cruk **Password**: jvku2cgl4n

## Usage

This repository is private, so to install the library you will need SSH access or a personal access token (PAT) if SSH is not possible.


Add cruk-react-components and its peer dependencies react, react-dom and styled-components to your package.json file. Replace 

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
import { Button } from 'cruk-react-components'

const MyComponent = () => (<div>
  <Button />
</div>)
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

## Roadmap

* Sort out folder structure
* Migrate tests from OF
* Write more tests
* Replace Flow with Typescript
* CI/CD pipeline
  * Build docs to github pages until CRUK Design system takes over
  * Build components
* Look at value that [Lerna](https://lerna.js.org/) could give us
