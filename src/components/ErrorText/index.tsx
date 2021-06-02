import React, { FC, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

import { StyledErrorText } from './styles';

import defaultTheme from 'src/themes/cruk';

export type ErrorTextProps = HTMLAttributes<HTMLElement>;

/**
 *
 * To be used in forms for inline validation. Applies styling and accessibility attribute so that it will be read by screen readers.
 *
 * Please be aware that some input components already have this component built in and can be passed an "errorMessage" prop
 */
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
