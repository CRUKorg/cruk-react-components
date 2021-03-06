# cruk-react-components

React implementation of the CRUK design system.

## View the docs

cruk-react-component docs site: https://master.d2qmm2ybdxfdzp.amplifyapp.com/

## Usage

---

Add cruk-react-components and its peer dependencies react, react-dom and styled-components to your package.json file.

```sh
"dependencies": {
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "styled-components": "^5.0.0"
}
```

After an `npm i @cruk/cruk-react-components --save`, you can start importing components from the library:

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

Then view the docs site at: http://127.0.0.1:8080/

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
