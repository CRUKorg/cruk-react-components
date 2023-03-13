import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {
  faShareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faFacebookSquare,
  faTwitterSquare,
  faWhatsappSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  su2cTheme,
  Box,
  Button,
  IconFa,
  GlobalStyle,
  bowelbabeTheme,
} from "..";
import PopOver, { PopOverProps } from ".";

export default {
  title: "PopOver (experimental)",
  component: PopOver,
} as Meta<PopOverProps>;

const content = (
  <Box padding="xxs">
    <Button appearance="tertiary" aria-label="Facebook">
      <IconFa faIcon={faFacebookSquare} color="#4267b2" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="Twitter">
      <IconFa faIcon={faTwitterSquare} color="#1da1f2" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="WhatsApp">
      <IconFa faIcon={faWhatsappSquare} color="#4dc247" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="Facebook Messenger">
      <IconFa faIcon={faFacebookMessenger} color="#288ef8" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="LinkedIn">
      <IconFa faIcon={faLinkedin} color="#0077b5" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="Email">
      <IconFa faIcon={faEnvelopeSquare} color="#00b6ed" size="1.5rem" />
    </Button>
  </Box>
);

const Template: Story<PopOverProps> = (args) => (
  <Box margin="xxl">
    <PopOver
      {...args}
      modalLabel="sharing options"
      modalContent={content}
      minWidth="23em"
    >
      <Button>
        <IconFa faIcon={faShareAlt} />
        Share top
      </Button>
    </PopOver>
  </Box>
);

export const PopOverDefault: Story<PopOverProps> = Template.bind({});
PopOverDefault.storyName = "PopOver";
PopOverDefault.args = {};

const TemplateWithSU2C: Story<PopOverProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Box margin="xxl">
      <PopOver
        {...args}
        modalLabel="sharing options"
        modalContent={content}
        minWidth="23em"
      >
        <Button>
          <IconFa faIcon={faShareAlt} />
          Share top
        </Button>
      </PopOver>
    </Box>
  </ThemeProvider>
);

export const SU2CPopover: Story<PopOverProps> = TemplateWithSU2C.bind({});
SU2CPopover.storyName = "SU2C PopOver";
SU2CPopover.args = {};

const TemplateWithBowelbabe: Story<PopOverProps> = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Box margin="xxl">
      <PopOver
        {...args}
        modalLabel="sharing options"
        modalContent={content}
        minWidth="23em"
      >
        <Button>
          <IconFa faIcon={faShareAlt} />
          Share top
        </Button>
      </PopOver>
    </Box>
  </ThemeProvider>
);

export const BowelbabePopover: Story<PopOverProps> = TemplateWithBowelbabe.bind(
  {}
);
BowelbabePopover.storyName = "Bowelbabe PopOver";
BowelbabePopover.args = {};
