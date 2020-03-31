import React, { FunctionComponent } from 'react';
import { withTheme } from 'styled-components';
import Text from '../Text';
import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type ErrorTextProps = {
  theme: ThemeType;
};

const ErrorText: FunctionComponent<ErrorTextProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return (
    <Text as="span" textColor="textError" theme={theme} role="alert">
      {props.children}
    </Text>
  );
};

export default withTheme(ErrorText);
