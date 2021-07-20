import React, { FC, ReactNode } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ErrorText from 'src/components/ErrorText';
import Text from 'src/components/Text';

import { StyledFieldset, LegendSpan } from './styles';

export type LegendWrapperProps = {
  children?: ReactNode;
  /** legend text */
  legendText: string;
  /** error message text  */
  errorMessage?: string;
  /** flag for error styling */
  hasError?: boolean;
  /** when required (required) appears in legend */
  required?: boolean;
  /** hint text */
  hintText?: ReactNode | string;
};
/**
 * LegendWrapper allows the user to add an outer label for a checkbox / group of checkboxes / radio buttons or a group of radio buttons.
 *
 * hasError and errorMessage props are just props that can be passed into the component.
 * There is no functionality checking if the children are valid/required etc this functionality will be needed to ne added outside of this component.
 */
export const LegendWrapper: FC<LegendWrapperProps> = ({
  children,
  legendText,
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
  const hintTextElement =
    !!hintText && (typeof hintText === 'string' || typeof hintText === 'number') ? (
      <Text as="span">{hintText}</Text>
    ) : (
      hintText
    );
  return (
    <ThemeProvider theme={theme}>
      <StyledFieldset hasError={hasError || !!errorMessage || false} hasHintText={!!hintText}>
        {legendText && (
          <legend>
            <LegendSpan hasHintText={!!hintText}>
              {legendText} {required && <span>(required)</span>}
            </LegendSpan>
            {hintTextElement}
          </legend>
        )}
        {children}
        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </StyledFieldset>
    </ThemeProvider>
  );
};

export default LegendWrapper;
