import React, { FC, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import Text from 'src/components/Text';
import defaultTheme from 'src/themes/cruk';

type ErrorTextProps = HTMLAttributes<HTMLElement>;

const ErrorText: FC<ErrorTextProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  return (
    <Text as="span" textColor="textError" theme={theme} role="alert">
      {props.children}
    </Text>
  );
};

export default ErrorText;
