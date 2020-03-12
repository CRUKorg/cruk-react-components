import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/cruk';

type ErrorTextProps = {
  children: any;
};

const StyledErrorText = styled.div<ErrorTextProps>`
  color: ${({ theme: { colors } }) => (colors ? colors.textError : defaultTheme.colors.textError)};
  font-weight: normal;
`;

const ErrorText = (props: ErrorTextProps) => {
  return <StyledErrorText role="alert">{props.children}</StyledErrorText>;
};

export default ErrorText;
