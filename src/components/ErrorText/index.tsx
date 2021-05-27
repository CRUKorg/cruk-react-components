import React, { FC, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

import { StyledErrorText } from './styles';

import defaultTheme from 'src/themes/cruk';

type ErrorTextProps = HTMLAttributes<HTMLElement>;

const ErrorText: FC<ErrorTextProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  return (
    <StyledErrorText as="span" theme={theme} role="alert">
      {props.children}
    </StyledErrorText>
  );
};

export default ErrorText;
