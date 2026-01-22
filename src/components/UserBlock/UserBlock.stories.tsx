import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { Text, IconFa } from "..";
import UserBlock from ".";
import "./styles.css";
import "../Text/styles.css";
import "../Box/styles.css";
import "../IconFa/styles.css";
import "../Avatar/styles.css";

export default {
  title: "UserBlock (experimental)",
  component: UserBlock,
  args: {
    name: "Sam Smith",
    size: "m",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof UserBlock>;

const Line = () => (
  <div
    style={{
      width: "100%",
      height: "1px",
      backgroundColor: "#000",
      margin: "1em 0",
    }}
  />
);

const AllThemesWrapper = ({
  ...args
}: React.ComponentProps<typeof UserBlock>) => (
  <main>
    <div tabIndex={0}>
      <h2>CRUK Theme:</h2>
      <div data-theme="cruk">
        <UserBlock {...args} themeName="cruk" />
        <Line />
      </div>
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        <UserBlock {...args} themeName="rfl" />
        <Line />
      </div>
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        <UserBlock {...args} themeName="su2c" />
        <Line />
      </div>
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        <UserBlock {...args} themeName="bowelbabe" />
        <Line />
      </div>
    </div>
  </main>
);

export const UserBlockDefault: Story = {
  name: "UserBlock",
  args: {},
  render: (args) => <AllThemesWrapper {...args} />,
};

export const UserBlockCustomAvatar: Story = {
  name: "UserBlock Custom Avatar",
  args: {
    avatarUrl: "https://via.placeholder.com/300/2e008b/d9318a?text=avatar",
  },
  render: (args) => <AllThemesWrapper {...args} />,
};

export const UserBlockWithExtra: Story = {
  name: "UserBlock Custom Avatar",
  args: {
    extra: (
      <Text>
        <IconFa faIcon={faClock} /> Just now
      </Text>
    ),
  },
  render: (args) => <AllThemesWrapper {...args} />,
};
