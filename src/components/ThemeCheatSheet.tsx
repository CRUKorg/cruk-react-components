import React, { type FunctionComponent } from "react";
import styled, { withTheme } from "styled-components";

import { type ThemeType } from "../types";
import { crukTheme as defaultTheme } from "../themes/cruk";
import { Heading } from "./Heading";

type Props = {
  theme?: ThemeType;
};

const PreStyled = styled.pre`
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const ThemeCheatSheet: FunctionComponent<Props> = ({ theme }) => {
  const foundTheme = theme?.colors ? theme : defaultTheme;

  return (
    <>
      <Heading h1>Theme cheatsheet</Heading>
      <PreStyled>{JSON.stringify(foundTheme, null, 2)}</PreStyled>;
    </>
  );
};

export default withTheme(ThemeCheatSheet);
