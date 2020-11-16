import React, { FunctionComponent, ReactElement } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';
import Text from './Text';
import defaultTheme from '../themes/cruk';
import { ThemeType } from 'src/types';

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
  hintText?: ReactElement | string;
  required?: boolean;
  theme?: ThemeType;
};

export const WithLabel: FunctionComponent<WithLabelProps> = props => {
  const { label, hintText, required, children, ...otherProps } = props;
  const theme = {
    ...defaultTheme,
    ...props.theme,
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

WithLabel.defaultProps = {
  required: false,
  theme: defaultTheme,
};

export default withTheme(Label);
