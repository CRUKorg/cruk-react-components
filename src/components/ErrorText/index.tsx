import React from 'react';
import styled, { withTheme } from 'styled-components';
import { COLORS } from '../../themes/cruk';

type ErrorTextProps = {
  theme: { colors: {} };
  children: any;
};

const StyledErrorText = styled.div`
  color: ${props => props.theme.colors.textError};
  font-weight: normal;
`;

const ErrorText = (props: ErrorTextProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
  };
  return (
    <StyledErrorText theme={theme} role="alert">
      {props.children}
    </StyledErrorText>
  );
};

ErrorText.defaultProps = {
  theme: {},
};

export default withTheme(ErrorText);
