import React, { FunctionComponent } from 'react';
import styled, { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import { ICONS } from './iconList';

// utility to provide people with a list of icon names
export const ICON_NAMES = Object.keys(ICONS).reduce((acc: { [key: string]: string }, item: string) => {
  acc[item] = item;
  return acc;
}, {});

type IconProps = {
  name: keyof typeof ICONS;
  color?: string;
  size?: string;
};

const StyledIcon = styled.svg<IconProps>`
  display: inline-block;
  height: ${props => props.size};
  margin-top: -0.2em;
  vertical-align: middle;
  width: ${props => props.size};
  path {
    fill: ${({ theme: { colors }, color }) =>
      color && typeof colors[color] !== 'undefined' ? colors[color] : color ? color : 'currentColor'};
  }
`;

const Icon: FunctionComponent<IconProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const icon = ICONS[props.name];

  return (
    <StyledIcon
      theme={theme}
      alt-text=""
      role="presentation"
      viewBox={`0 0 ${icon.width} ${icon.height}`}
      size={props.size}
      {...props}
    >
      {icon.paths.map((path: string, index: number) => (
        <path key={index} d={path} />
      ))}
    </StyledIcon>
  );
};

Icon.defaultProps = {
  size: '1.1rem',
};

export default Icon;
