import React, { FunctionComponent } from 'react';
import styled, { withTheme } from 'styled-components';

import { ThemeType } from '../themes/types';
import defaultTheme from '../themes/cruk';
import Heading from './Heading';

type Props = {
  theme?: ThemeType;
};

const PreStyled = styled.pre`
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const ThemeCheatSheet: FunctionComponent<Props> = props => {
  const foundTheme = props.theme.colors ? props.theme : defaultTheme;

  return (
    <>
      <Heading h1>Theme cheatsheet</Heading>
      <PreStyled>{JSON.stringify(foundTheme, null, 2)}</PreStyled>;
    </>
  );
};

export default withTheme(ThemeCheatSheet);
