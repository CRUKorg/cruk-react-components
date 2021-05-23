import React, { FunctionComponent } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { StyledBadge } from './styles';

import { SpaceType } from 'src/types';

type BadgeProps = {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  text?: boolean;
  size?: SpaceType;
  children?: any;
};

const Badge: FunctionComponent<BadgeProps> = props => {
  const { text, children, ...rest } = props;
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  return (
    <StyledBadge theme={theme} text={typeof children === 'string'} size="xs" {...rest}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
