import React, { FunctionComponent } from 'react';
import styled, { css, withTheme } from 'styled-components';

import spacing, { SpacingProps } from '../Spacing';
import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../types';

type BoxProps = SpacingProps & {
  backgroundColor?: string;
  css?: any;
  theme: ThemeType;
};

const StyledBox = styled.div<BoxProps>`
  background-color: ${props => props.theme.colors.backgroundLight};
  padding: ${({ theme, backgroundColor }) => (backgroundColor ? theme.spacing.s : 0)};
  margin: 0 0 ${props => props.theme.spacing.m} 0;

  &:last-child {
    margin-bottom: 0;
  }

  background-color: ${({ theme: { colors }, backgroundColor }) =>
    backgroundColor && typeof colors[backgroundColor] !== 'undefined'
      ? colors[backgroundColor]
      : backgroundColor
      ? backgroundColor
      : 'transparent'};

  ${(props: BoxProps) => (css as any)([props.css])}
  ${props => spacing(props)}
`;

const Box: FunctionComponent<BoxProps> = props => {
  const { children, css, theme, ...rest } = props;
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
  };

  return (
    <StyledBox theme={mergedTheme} {...rest}>
      {children}
    </StyledBox>
  );
};

export default withTheme(Box);
