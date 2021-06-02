import React, { FunctionComponent, ReactElement } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import Text from 'src/components/Text';
import defaultTheme from 'src/themes/cruk';

import { LabelText, Label } from './styles';

type LabelWrapperProps = {
  label: string;
  hintText?: ReactElement | string;
  required?: boolean;
};

export const LabelWrapper: FunctionComponent<LabelWrapperProps> = props => {
  const { label, hintText, required, children, ...otherProps } = props;
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const hintTextElement = !!hintText && typeof hintText === 'string' ? <Text>{hintText}</Text> : hintText;

  return (
    <ThemeProvider theme={theme}>
      {label ? (
        <Label {...otherProps}>
          <LabelText hasHintText={!!hintText}>
            {label} {!required && <span>(optional)</span>}
          </LabelText>
          {hintTextElement}
          {children}
        </Label>
      ) : (
        <>{children}</>
      )}
    </ThemeProvider>
  );
};

LabelWrapper.defaultProps = {
  required: false,
};

export default LabelWrapper;
