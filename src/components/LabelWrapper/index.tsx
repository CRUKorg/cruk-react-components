import React, { FunctionComponent, ReactElement } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import Text from 'src/components/Text';
import defaultTheme from 'src/themes/cruk';

import { LabelText, Label } from './styles';

type LabelWrapperProps = {
  /** label text */
  label: string;
  /** hint text or react element in it's place */
  hintText?: ReactElement | string;
  /** when required (required) appears in label */
  required?: boolean;
  /** flag to stop (required) appearing in label, useful for compound form components like DateInput */
  hideRequiredInLabel?: boolean;
};

export const LabelWrapper: FunctionComponent<LabelWrapperProps> = props => {
  const { label, hintText, required, hideRequiredInLabel = false, children, ...otherProps } = props;
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
            {label} {required && !hideRequiredInLabel && <span>(required)</span>}
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
