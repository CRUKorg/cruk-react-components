import React, { FunctionComponent } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

import defaultTheme from './../themes/cruk';
import spacing, { SpacingProps } from './Spacing';
import { ThemeType } from 'src/themes/types';

const Label = styled.label<SpacingProps>`
  display: block;
  font-weight: bold;
  width: 100%;
  & > * {
    margin-top: 5px;
    font-weight: normal;
  }
  ${props => spacing(props)}
`;

const StyledSpan = styled.span`
  margin: 10px 0px;
  display: block;
`;

// TODO split withLabel from label into different files and place withLabel in HOC folder
// TODO write docs page for label / withLabel

type WithLabelProps = SpacingProps & {
  label: string;
  hintText?: string;
  required?: boolean;
  theme?: ThemeType;
};

export const WithLabel: FunctionComponent<WithLabelProps> = props => {
  const { label, hintText, required, children } = props;
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <ThemeProvider theme={theme}>
      {label ? (
        <Label>
          {label} {!required && <span>(optional)</span>}
          {hintText && <StyledSpan>{hintText}</StyledSpan>}
          {children}
        </Label>
      ) : (
        <>{children}</>
      )}
    </ThemeProvider>
  );
};

WithLabel.defaultProps = {
  hintText: '',
  required: false,
  theme: null,
};

export default withTheme(Label);
