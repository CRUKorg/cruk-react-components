import React, { FunctionComponent, ReactNode } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';
import Text from './Text';
import defaultTheme from '../themes/cruk';
import { ThemeType } from 'src/themes/types';

const Label = styled.label`
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
  margin-bottom: ${({ hasHintText, theme }) =>
    hasHintText ? theme.spacing.extraExtraSmall : theme.spacing.extraSmall};

  & > * {
    font-weight: normal;
  }
`;

// TODO split withLabel from label into different files and place withLabel in HOC folder
// TODO write docs page for label / withLabel

type WithLabelProps = {
  label: string;
  hintText?: ReactNode;
  required?: boolean;
  theme?: ThemeType;
};

export const WithLabel: FunctionComponent<WithLabelProps> = props => {
  const { label, hintText, required, children } = props;
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  const hintTextElement = !!hintText && typeof hintText === 'string' ? <Text>{hintText}</Text> : hintText;

  return (
    <ThemeProvider theme={theme}>
      {label ? (
        <Label {...props}>
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

WithLabel.defaultProps = {
  required: false,
  theme: null,
};

export default withTheme(Label);
