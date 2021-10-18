import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { su2cTheme, Box, Button, Icon, GlobalStyle } from "..";
import PopOver, { PopOverProps } from ".";

export default {
  title: "PopOver (experimental)",
  component: PopOver,
} as Meta<PopOverProps>;

const content = (
  <>
    <Box padding="xxs">
      <Button appearance="text" aria-label="Facebook">
        <Icon name="facebookSquare" color="#4267b2" size="1.5rem" />
      </Button>
      <Button appearance="text" aria-label="Twitter">
        <Icon name="twitterSquare" color="#1da1f2" size="1.5rem" />
      </Button>
      <Button appearance="text" aria-label="WhatsApp">
        <Icon name="whatsappSquare" color="#4dc247" size="1.5rem" />
      </Button>
      <Button appearance="text" aria-label="Facebook Messenger">
        <Icon name="messengerSquare" color="#288ef8" size="1.5rem" />
      </Button>
      <Button appearance="text" aria-label="LinkedIn">
        <Icon name="linkedin" color="#0077b5" size="1.5rem" />
      </Button>
      <Button appearance="text" aria-label="Email">
        <Icon name="envelopeSquare" color="#00b6ed" size="1.5rem" />
      </Button>
    </Box>
  </>
);

const Template: Story<PopOverProps> = (args) => {
  return (
    <>
      <Box margin="xxl">
        <PopOver
          {...args}
          modalLabel="sharing options"
          modalContent={content}
          minWidth="23em"
        >
          <Button>
            <Icon name="share" />
            Share top
          </Button>
        </PopOver>
      </Box>
    </>
  );
};

export const PopOverDefault: Story<PopOverProps> = Template.bind({});
PopOverDefault.storyName = "PopOver";
PopOverDefault.args = {};

const TemplateWithSU2C: Story<PopOverProps> = (args) => {
  return (
    <>
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
              <Icon name="share" />
              Share top
            </Button>
          </PopOver>
        </Box>
      </ThemeProvider>
    </>
  );
};

export const SU2CCheckbox: Story<PopOverProps> = TemplateWithSU2C.bind({});
SU2CCheckbox.storyName = "SU2C PopOver";
SU2CCheckbox.args = {};
