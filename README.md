# cruk-react-components

React components implementing CRUK and SU2C design tokens

## View the docs

cruk-react-component docs site: https://master.d2qmm2ybdxfdzp.amplifyapp.com/

**Username**: cruk **Password**: jvku2cgl4n

## Usage

As this is currently a private repository, to import it you you have two options, https+oauth or ssh. As ssh is not always possible, https+oauth option is detailed bellow.

You will need to [create an access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)



```sh
"dependencies": {
  "cruk-react-components": "git+https://[INSERT TOKEN HERE]:x-oauth-basic@github.com/CRUKorg/cruk-react-components.git"
}
```

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
