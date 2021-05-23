import React, { FunctionComponent, HTMLAttributes, Ref, forwardRef } from 'react';
import styled, { css, useTheme } from 'styled-components';

import Spacing, { SpacingProps } from 'src/components/Spacing';
import defaultTheme from 'src/themes/cruk';

type BoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    backgroundColor?: string;
    css?: any;
    ref?: Ref<HTMLDivElement>;
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
  ${props => Spacing(props)}
`;

const Box: FunctionComponent<BoxProps> = forwardRef(({ ...props }: BoxProps, ref?: Ref<HTMLDivElement>) => {
  const { children, css, ...rest } = props;
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  return (
    <StyledBox theme={theme} {...rest} ref={ref}>
      {children}
    </StyledBox>
  );
});

export default Box;
