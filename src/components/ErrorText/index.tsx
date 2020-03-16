import React from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

type ErrorTextProps = {
  children: any;
  theme?: ThemeType;
};

const StyledErrorText = styled.div<ErrorTextProps>`
  color: ${({
    theme: {
      colors: { textError },
    },
  }) => textError};
  font-weight: normal;
`;

const ErrorText = (props: ErrorTextProps) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return (
    <StyledErrorText theme={theme} role="alert">
      {props.children}
    </StyledErrorText>
  );
};

export default withTheme(ErrorText);
