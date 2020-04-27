import React, { FunctionComponent } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

import defaultTheme from './../themes/cruk';
import { ThemeType } from 'src/themes/types';

const Label = styled.label`
  display: block;
  width: 100%;
`;

const Hint = styled.span`
  display: block;
  margin-bottom: ${({
    theme: {
      spacing: { extraSmall },
    },
  }) => extraSmall};
`;

type LabelTextProps = {
  theme: ThemeType;
  hasHintText: boolean;
};

const LabelText = styled.span<LabelTextProps>`
  font-weight: bold;
  display: block;
  margin-bottom: ${({
    hasHintText,
    theme: {
      spacing: { extraSmall, extraExtraSmall },
    },
  }) => (hasHintText ? extraExtraSmall : extraSmall)};

  & > * {
    font-weight: normal;
  }
`;

// TODO split withLabel from label into different files and place withLabel in HOC folder
// TODO write docs page for label / withLabel

type WithLabelProps = {
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
        <Label {...props}>
          <LabelText hasHintText={!!hintText}>
            {label} {!required && <span>(optional)</span>}
          </LabelText>
          {hintText && <Hint>{hintText}</Hint>}
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
