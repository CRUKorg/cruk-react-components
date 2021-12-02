import { ThemeProvider } from "styled-components";
// import Select from "../src/components/Select";
// import Box from "../src/components/Box";

import { addons } from "@storybook/addons";
import { UPDATE_GLOBALS } from "@storybook/core-events";

import {
  Title,
  Heading,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";

import crukTheme from "../src/themes/cruk";
import su2cTheme from "../src/themes/su2c";
import Text from "../src/components/Text";
import GlobalStyle from "../src/components/GlobalStyle";

const withTheme = (Story, { globals }) => {
  const channel = addons.getChannel();

  const themeFile = (theme) => {
    switch (theme) {
      case "su2c":
        return su2cTheme;
      default:
        return crukTheme;
    }
  };

  // const setTheme = (theme) => {
  //   channel.emit(UPDATE_GLOBALS, {
  //     globals: { theme },
  //   });
  // };

  return (
    <ThemeProvider theme={themeFile(globals.theme)}>
      {/* <Box marginBottom="m">
        <Select
          value={globals.theme}
          label="Theme"
          name="themeSelector"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
        >
          <option value="cruk">CRUK theme</option>
          <option value="su2c">SU2C theme</option>
        </Select>
      </Box> */}
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

export const globalTypes = {
  theme: "cruk",

  theme: {
    name: "Theme",
    description: "Theme Selection",
    defaultValue: "cruk",
    toolbar: {
      icon: "contrast",
      items: [
        { value: "cruk", right: "🧬", title: "CRUK Theme" },
        { value: "su2c", right: "🟧", title: "SU2C Theme" },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#ffffff",
      },
      {
        name: "mid",
        value: "#ededed",
      },
      {
        name: "dark",
        value: "#2e2d2c",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
        <Heading>Theming</Heading>
        <Text>
          Our component library is built on styled components, the different
          themes can be imported from the component library and implemented
          using ThemeProvider, GlobalStyle is a bit like a css reset
          <pre>
            {`
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
          </pre>
        </Text>
      </>
    ),
  },
};
