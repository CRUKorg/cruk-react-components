# cruk-react-components

React implementation of the CRUK design system.

## View the docs

cruk-react-component docs site: https://master.d28a8la187lo73.amplifyapp.com/

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
import { Button } from "cruk-react-components";

const MyComponent = () => (
  <div>
    <Button />
  </div>
);
```

## Migration from V0 to V1

1.  Find all instances of RadioGroup and change it to the new component name of RadioConsent
2.  The old Button appearance="tertiary" has been removed and replaced with what was Button the old variant of appearance="text"

The suggested solution is to find all instance of appearance="tertiary" and replace it with appearance="secondary" and find all instances of appearance="text" and replace them with appearance="tertiary"

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

## Run Percy Test

To run percy test locally , create an [.env](.env.example) file with PERCY_TOKEN:

```bash
npm run percy
```

To test specific component , go to .percy.yml and add the regex to match story to the include attribute. Example

```
#.percy.yml

storybook:
include: [UserBlock]
```

### Maintaining

## Releases

Please update the version number in the package.json and follow the semver standards for version numbers.

Make sure that your current node version is Node 16.
Run `npm i` to make sure that the correct version in the lockfile.
Update the CHANGELOG.md which should list the changes for the release, instructions are at the bottom of the file.
Make sure that you have the correct permissions for the @cruk on NPM
Run the release script with `npm run release` this should make and push the tag, build the lib and release it on NPM.

## Dependencies

If you update cypress version make sure you update it in the package.json and in the in docker compose file.

It is also advices that if you make change to storybook you try and run it before merging and if you make changes to roll up and it's plug ins you try and run

```bash
npm run rollup:build-lib
```

and see if it can successfully build the library before running the release script
