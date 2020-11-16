import React, { FC, HTMLAttributes } from 'react';
import { withTheme } from 'styled-components';
import Text from '../Text';
import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../types';

type ErrorTextProps = HTMLAttributes<HTMLElement> & {
  theme: ThemeType;
};

const ErrorText: FC<ErrorTextProps> = props => {
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
