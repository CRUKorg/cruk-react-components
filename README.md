# cruk-react-components

React implementation of the CRUK design system using only React HTML and CSS.
Contains the following themes for all components

- CRUK
- RFL
- SU2C
- Bowelbabe

## View storybook

cruk-react-component storybook site demoing all the components with their different variants and themes:
https://master.d28a8la187lo73.amplifyapp.com/

## Getting Started

Add cruk-react-components and its peer dependencies react, react-dom and styled-components to your package.json file.

```sh
"dependencies": {
  "react": "^19",
  "react-dom": "^19"
}
```

After an `npm i @cruk/cruk-react-components --save`, you can start importing components from the library:

```js
// Ideally you would import the css on the top level entry point on you app
// because you only need to import this once
import "@cruk/cruk-react-components/lib/index.css";
import { Button } from "cruk-react-components";

const MyComponent = () => (
  <div>
    <Button />
  </div>
);
```

## Extending your components with custom styles

### Using the style prop

```js
import { Button } from "cruk-react-components";

const MyComponent = () => (
  <div>
    <Button style={{ color: "#ff0000" }} />
  </div>
);
```

### Using your own css class

Lets say we want to preseve and use the API that exists on the component, we want to add our own CSS class but we don't want to overwrite the CSS class that already styles the component The solution is simple because each components CSS already exposed when you import the index css

```js
import "@cruk/cruk-react-components/lib/index.css";
```

The always follow the same naming convetion of

`.component-{componentName}`

For example

- `.component-button`
- `.component-link`
- `.component-text-field`
- `.component-textarea-field`

So we need to include the component class as well as our new CSS classes

```js
import { Button } from "cruk-react-components";

const MyComponent = () => (
  <div>
    <Button
      appearance="primary"
      className={["component-button", "my-other-class-name"].join(" ")}
    />
  </div>
);
```

### Utility classes

There are currently three utility CCS classes

- `color-props`
- `spacing-props`
- `text-props`

This utility CSS classes can be used like this

```js
const MyComponent = () => (
  <div className="color-props" data-bg-color="primary">
    <Button
      appearance="primary"
      className={["component-button", "spacing-props"].join(" ")}
      data-margin-bottom="s"
    />
  </div>
);
```

##### color-props

This CSS class will take names colours within the themes and applies them to the following data attributes

- `data-color`: the text and svg colour
- `data-bg-color`: the background colour
- `data-border-color`: the border colour

##### text-props

This CSS class will take theme values like named font weights (vlight, light, medum, normal, heavy), named font families (base, buttons, links, headings, labels) and named font sizes (xs, s, m, l, xl, xxl, xxxl ) specified in each theme, as well as word wrap, overflow wrap, text align etc following data attributes

- `data-word-break`: word-break
- `data-overflow-wrap`: overflow-wrßap
- `data-text-font-family`: sets font family using named font categories
- `data-text-weight`: sets font weight using names weight categories, matches HTML convention
- `data-text-size`: sets font size using named font sizes from themes

##### spacing-props

This CSS class will set the following named spacing values to different spacing CSS attributes.
The names spacing values are:

- `none`: 0;
- `auto`: auto;
- `xxxs`: 0.25rem; /_ 4px _/
- `xxs`: 0.5rem; /_ 8px _/
- `xs`: 1rem; /_ 16px _/
- `s`: 1.5rem; /_ 24px _/
- `m`: 2rem; /_ 32px _/
- `l`: 2.5rem; /_ 40px _/
- `xl`: 3rem; /_ 48px _/
- `xxl`: 3.5rem; /_ 56px _/
- `full`: 100%;

The attribute available are:

- `data-margin`: all margins
- `data-margin-vertical`: top and bottom margin
- `data-margin-horizontal`: left and right margin
- `data-margin-top`: top margin
- `data-margin-bottom`: bottom margin
- `data-margin-left`: left margin
- `data-margin-right`: right margin
- `data-padding`: all padding
- `data-padding-vertical`: top and bottom padding
- `data-padding-horizontal`: left and right padding
- `data-padding-top`: top padding
- `data-padding-bottom`: bottom padding
- `data-padding-left`: left padding
- `data-padding-right`: right padding

## Migration from V5 and V6 to V7

Styled Components has entered maintenance mode.

- The first phase was to uses CSS variables and data attributes on HTML elements for theming, instead of using Styled Components themes and ThemeProvider.
- The second phase was to convert components written in Styled Components into html and css modules and remove Styled Components.

### Themeing

So intstead of themeing like this

```tsx
import { Button, crukTheme } from "cruk-react-components";
import { ThemeProvider } from "styled-components";

const MyComponent = () => (
<ThemeProvider theme={crukTheme}>
  <Button/>
<ThemeProvider />
);

```

you only need an html element with `data-theme="cruk"`, the inner most element with data-theme will override outer wrapping elements.

```tsx
const MyComponent = () => (
  <span data-theme="su2c">
    <Button/>
  <span/>
);
```

### Components with theme dependent content

Because the new themeing strategy only effects CSS and not content, components which have theme specific content now have a required property of "themeName". This prop will have to be entered by the app that uses these components. The following components require the themeName prop:

- Avatar
- Header
- Footer
- UserBlock
- Modal\*

\* Modal is a special case, it needs themeName prop because the any theme provider will not work. Modals uses React Portals which places the elements in whole new html context.

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
