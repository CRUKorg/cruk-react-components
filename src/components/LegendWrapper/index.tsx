import React, { FC, ReactNode } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ErrorText from 'src/components/ErrorText';
import Text from 'src/components/Text';

import { StyledFieldset } from './styles';

export type LegendWrapperProps = {
  children?: ReactNode;
  /** legend text */
  legend: string;
  /** error message text  */
  errorMessage?: string;
  /** flag for error styling */
  hasError?: boolean;
  /** when required (required) appears in label */
  required?: boolean;
  /** hint text */
  hintText?: ReactNode | string;
};

export const LegendWrapper: FC<LegendWrapperProps> = ({
  children,
  legend,
  required,
  errorMessage,
  hasError,
  hintText,
}) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const hintTextElement = !!hintText && typeof hintText === 'string' ? <Text>{hintText}</Text> : hintText;
  return (
    <ThemeProvider theme={theme}>
      <StyledFieldset hasError={hasError || !!errorMessage || false} hasHintText={!!hintText}>
        {legend && (
          <legend>
            <span>
              {legend} {required && <span>(required)</span>}
            </span>
          </legend>
        )}
        {!!hintText && hintTextElement}
        {children}
        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </StyledFieldset>
    </ThemeProvider>
  );
};

export default LegendWrapper;
