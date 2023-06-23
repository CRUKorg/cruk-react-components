import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";

import { su2cTheme, bowelbabeTheme, crukTheme } from "../src/components";
import { GlobalStyle, Text } from "../src/components";

import {
  Title,
  Heading,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Controls,
  PRIMARY_STORY,
  Source,
} from "@storybook/addon-docs";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
          <Heading>Theming</Heading>
          <Text>
            Our component library is built on styled components, the different
            themes can be imported from the component library and implemented
            using ThemeProvider, GlobalStyle is a bit like a css reset
          </Text>
          <Source
            code={`
            import { ThemeProvider } from 'styled-components';
            import {
              Button,
              crukTheme,
              su2cTheme,
              GlobalStyle
            } from '@cruk/cruk-react-components';

            const component = () => {
              return (
                <ThemeProvider theme={crukTheme}>
                  <GlobalStyle/>
                  <Button>A button</Button>
                <ThemeProvider>
              )
            }`}
          />
        </>
      ),
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      cruk: crukTheme,
      su2c: su2cTheme,
      bowelbabe: bowelbabeTheme,
    },
    defaultTheme: "cruk",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

// import { ThemeProvider } from "styled-components";
// // import Select from "../src/components/Select";
// // import Box from "../src/components/Box";

// import { addons } from "@storybook/addons";
// import { UPDATE_GLOBALS } from "@storybook/core-events";

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   backgrounds: {
//     default: "light",
//     values: [
//       {
//         name: "light",
//         value: "#ffffff",
//       },
//       {
//         name: "mid",
//         value: "#ededed",
//       },
//       {
//         name: "dark",
//         value: "#2e2d2c",
//       },
//     ],
//   },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//     expanded: true,
//   },
//   docs: {
//     page: () => (
//       <>
//         <Title />
//         <Subtitle />
//         <Description />
//         <Primary />
//         <ArgsTable story={PRIMARY_STORY} />
//         <Stories />
// <Heading>Theming</Heading>
// <Text>
//   Our component library is built on styled components, the different
//   themes can be imported from the component library and implemented
//   using ThemeProvider, GlobalStyle is a bit like a css reset
//   <pre>
//     {`
//     import { ThemeProvider } from 'styled-components';
//     import {
//       Button,
//       crukTheme,
//       su2cTheme,
//       GlobalStyle
//     } from '@cruk/cruk-react-components';

//     const component = () => {
//       return (
//         <ThemeProvider theme={crukTheme}>
//           <GlobalStyle/>
//           <Button>A button</Button>
//         <ThemeProvider>
//       )
//     }`}
//   </pre>
// </Text>
//       </>
//     ),
//   },
// };
