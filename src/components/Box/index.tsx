import React, { FunctionComponent, HTMLAttributes, Ref, forwardRef } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { StyledBox } from './styles';

import { SpacingProps } from 'src/components/Spacing';

type BoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    backgroundColor?: string;
    css?: any;
    ref?: Ref<HTMLDivElement>;
  };

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
