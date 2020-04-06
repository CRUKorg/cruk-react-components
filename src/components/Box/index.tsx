import React, { FunctionComponent } from 'react';
import styled, { css, withTheme } from 'styled-components';

import spacing, { SpacingProps } from '../Spacing';
import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type BoxProps = SpacingProps & {
  backgroundColor?: string;
  getBackgroundColor: string;
  css?: any;
  theme: ThemeType;
};

const StyledBox = styled.div<BoxProps>`
  background-color: ${props => props.theme.colors.lightBackground};
  padding: ${props => props.theme.utilities.spacingUnit * 4}px;
  margin: 0 0 ${props => props.theme.utilities.spacingUnit * 4}px 0;
  margin-bottom: ${props => props.theme.utilities.spacingUnit * 4}px;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props: BoxProps) =>
    props.getBackgroundColor &&
    css`
      background-color: ${props.getBackgroundColor};
      color: ${props.theme.colors.textLight};
    `}

  ${(props: BoxProps) => (css as any)([props.css])}
  ${props => spacing(props)}
`;
const Box: FunctionComponent<BoxProps> = props => {
  const { backgroundColor, getBackgroundColor, children, css, theme, ...rest } = props;
  const mergedTheme = {
    ...defaultTheme,
    ...props.theme,
  };
  const checkBackgroundColor = (mergedTheme.colors as any)[backgroundColor] || backgroundColor;

  return (
    <StyledBox theme={mergedTheme} getBackgroundColor={backgroundColor && checkBackgroundColor} {...rest}>
      {children}
    </StyledBox>
  );
};

export default withTheme(Box);
