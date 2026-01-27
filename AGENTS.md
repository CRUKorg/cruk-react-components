## Component Architecture

- Each component should have its own directory with:
  - Index file containing component markup and logic (.tsx)
  - A styles file (styles.css)
  - Tests where applicable importing from `@playwright/experimental-ct-react` lib (.spec.tsx)
  - A Storybook 10 file importing from `@storybook/react-vite` lib (.stories.tsx)
  - A markdown describing the component and a table of the props (README.md)

## Development Preferences

### Typescript component

- Use semantic HTML and attributes where possible
- Follow WCAG accessibility guidelines
- Prefer modern CSS over JavaScript solutions where possible
- Implement progressive enhancement patterns

### Styles

- Use nested CSS
- A single CSS wraps all the styles styles
- This single CSS class is prefixed with `component-` followed by the name of the component

### Storybook

- For story files create default exports instead of defining a Meta variable
- Import all required component styles
- Import React from 'react'

### Test files

- import React from 'react'
