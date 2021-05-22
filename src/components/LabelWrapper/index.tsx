import React, { FunctionComponent, ReactElement } from 'react';
import styled, { useTheme, ThemeProvider } from 'styled-components';
import Text from 'src/components/Text';
import defaultTheme from 'src/themes/cruk';
import { ThemeType } from 'src/types';

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
`;

type LabelTextProps = {
  hasHintText: boolean;
  theme: ThemeType;
};

const LabelText = styled.span<LabelTextProps>`
  font-weight: bold;
  display: block;
  margin-bottom: ${({ hasHintText, theme }) => (hasHintText ? theme.spacing.xxs : theme.spacing.xs)};

  & > * {
    font-weight: normal;
  }
`;

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
