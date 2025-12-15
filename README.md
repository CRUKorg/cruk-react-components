# cruk-react-components

React implementation of the CRUK design system.

## View the docs

cruk-react-component docs site: https://master.d28a8la187lo73.amplifyapp.com/

## Usage

---

Add cruk-react-components and its peer dependencies react, react-dom and styled-components to your package.json file.

```sh
"dependencies": {
  "react": "^19",
  "react-dom": "^19",
  "styled-components": "^6"
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

## Migration from V5 and V6 to V7

Styled Components has entered maintenance mode.

- The first phase is to uses CSS variables and data attributes on HTML elements for theming, instead of using Styled Components themes and ThemeProvider.
- The second phase is to convert components written in Styled Components into html and css modules and remove Styled Components.

### Themeing

So intstead of themeing like this

```tsx
<ThemeProvider theme={crukTheme}>
<Button/>
<ThemeProvider />
```

you only need an html element with `data-theme="cruk"`, there inner most element with data-theme will override the previous ones.

```tsx
<span data-theme="su2c">
<Button/>
<span/>
```

### Components with theme dependent content

The following components have content that changes depending on the theme name.

- Avatar
- Header
- Footer
- UserBlock

Because the new themeing strategy only effects styling not content, these components now have a required property of "themeName" this will have to be entered by the app that uses these components

### Theme variable naming conventions

Because the theme names now come from CSS variable instead of theme objects, the theme names that were camel cased, are now snake cased so `textDark` now becomes `text-dark`

## Migration from V4 to V5

Because Styped Components now manages its own types on stead of relying on the community efforts on the DefinitelyTyped project, you may need to use generics instead of inline prop type definition inside styledComponents componets.

### Before:

```tsx
export const StyledButton = styled(Button)`
  border-radius: ${({ theme }: StyledButtonProps) => theme.button.borderRadius};
`;
```

### Now:

```tsx
export const StyledButton = styled(Button)<StyledButtonProps>`
  border-radius: ${({ theme }) => theme.button.borderRadius};
`;
```

Styled components 6 also no longer filters out custom props, so to stop a prop bleeding into child components or the underlying html element, prefix the prop name with a $ see size prop in example below:

### Before:

```tsx
<StyledAvatar
  {...rest}
  size={theme.avatar[size || "m"]}
  src={avatarUrl()}
  alt={alt}
/>
```

### Now:

```tsx
<StyledAvatar
  {...rest}
  $size={theme.avatar[size || "m"]}
  src={avatarUrl()}
  alt={alt}
/>
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

## Testing

Node: Unit testing,
Playwright: Component function, accessibility
Chromatic: Image snapshot comparison service, this happens in CI, people are given access to this service via their Github login.

Run all tests Unit and Playwright

```sh
 npm run test
```

Run Playright interactive testing suite (functional and accessibility tests) you might need to run `npx playwright install` the first time you use Playwright

```sh
test-ct:ui
```

## Maintaining

### Dependencies

If you make change to storybook please try and run it locally before merging and if you make changes to roll up and it's plug ins you try and run

```bash
npm run rollup:build-lib
```

and see if it can successfully build the library before running the release script

### Releases

#### Pre-release

Please update the version number in the package.json and follow the semver standards for version numbers.
Run `nvm use` to make sure that you are on the correct version of node.
Run `npm i` to make sure that the correct version in the lockfile.
Update the CHANGELOG.md which should list the changes for the release, instructions are at the bottom of the file.
These changes need to be merged into master.

#### Releasing

Make sure that you have the correct permissions for the @cruk org on NPM.
Run the release script with `npm run release` this should use `release-it` to allow you to select the same version number as stated in the package JSON and it should take care of the rest:

- it runs npm ci
- it does the build
- it makes and pushes the tag
- it releases the build lib to NPM
- it requestions if you want to document the release on github and autogenerates the release notes.

Agree to all these steps release-it walks through and when Github opens up with the release click on the `Publish` button. If anything goes wrong release-it should roll back.
