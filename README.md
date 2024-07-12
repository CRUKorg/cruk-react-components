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

Development is done through storybook

```sh
npm run storybook
```

you may need to run

```sh
npm run build-storybook
```

The docsite still works if you run

```sh
npm run dev
```

Then view the docs site at: http://127.0.0.1:8080/
However this isn't as well maintained as the storybook stories and will soon be deprecated

## Testing

Jest: Unit testing,
Cypress: Component function, accessibility
Chromatic: Image snapshot comparison service, this happens in CI, people are given access to this service via their Github login.

Run all tests Jest and Cypress

```sh
 npm run test
```

Run Cypress interactive testing suite (functional and accessibility tests)

```sh
npx cypress open --component
```

Run Cypress headlessly including image snapshots, docker desktop app will need to be running in the background for any headless activities

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

### Maintaining

## Dependencies

If you update cypress version make sure you update it in the package.json and in the in docker compose file.

It is also advices that if you make change to storybook you try and run it before merging and if you make changes to roll up and it's plug ins you try and run

```bash
npm run rollup:build-lib
```

and see if it can successfully build the library before running the release script

## Releases

Please update the version number in the package.json and follow the semver standards for version numbers.

Make sure that your current node version is Node 16.
Run `npm i` to make sure that the correct version in the lockfile.
Update the CHANGELOG.md which should list the changes for the release, instructions are at the bottom of the file.
Make sure that you have the correct permissions for the @cruk on NPM
Run the release script with `npm run release` this should make and push the tag, build the lib and release it on NPM.
