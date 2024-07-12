import React, { type ReactNode, type HTMLAttributes } from "react";
import { useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";
import Avatar from "../Avatar";

import { StyledUserBlock, Details, Name, Extra } from "./styles";

export type UserBlockProps = HTMLAttributes<HTMLElement> & {
  /** name component or text */
  name?: ReactNode;
  /** string name used in avatar component */
  avatarName?: string | null;
  /** avatar image url */
  avatarUrl?: string | null;
  /** extra content component appears underneath name */
  extra?: ReactNode;
  /** size of avatar component */
  size?: "s" | "m" | "l" | "xl";
};

/**
 * Display an avatar with title and subtitle
 */
export function UserBlock({
  name,
  avatarName,
  avatarUrl,
  extra,
  size = "l",
}: UserBlockProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  // name is a reserved html prop so we make sure we don't pass it into the styled component
  // or it will end up in the markup
  return (
    <StyledUserBlock theme={theme}>
      <Avatar
        name={avatarName || (typeof name === "string" ? name : "Anonymous")}
        url={avatarUrl || undefined}
        size={size}
      />
      <Details>
        <Name>{name || "Anonymous"}</Name>
        {!!extra && <Extra>{extra}</Extra>}
      </Details>
    </StyledUserBlock>
  );
}

export default UserBlock;
