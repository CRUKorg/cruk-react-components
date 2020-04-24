import React, { FunctionComponent } from 'react';
import styled, { withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import { ICONS } from './iconList';
import { camelize } from '../../utils/Helper';

import { ThemeType } from '../../themes/types';

export type IconNameType = keyof typeof ICONS;

// utility to provide people with a list of icon names
export const ICON_NAMES = Object.keys(ICONS).reduce((acc: { [key: string]: IconNameType }, item: IconNameType) => {
  acc[item] = item;
  return acc;
}, {});

type IconProps = {
  name?: IconNameType;
  color?: string;
  size?: string;
  transform?: string;
  theme?: ThemeType;
};

const StyledIcon = styled.svg<IconProps>`
  display: inline-block;
  height: ${props => props.size};
  margin-top: -0.2em;
  vertical-align: middle;
  width: ${props => props.size};
  path {
    fill: ${({ theme: { colors }, color }) =>
      color && typeof colors[color] !== 'undefined' ? colors[color] : color ? color : 'transparent'};
  }
`;

const Icon: FunctionComponent<IconProps> = props => {
  const name = props.name && camelize(props.name);
  const icon = (ICONS as any)[name] || ICONS.question;
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return (
    <StyledIcon
      theme={theme}
      aria-hidden="true"
      role="presentation"
      viewBox={`0 0 ${icon.width} ${icon.height}`}
      size={props.size}
      transform={icon.transform}
      {...props}
    >
      {icon.paths.map((path: string, index: number) => (
        <path key={index} d={path} />
      ))}
    </StyledIcon>
  );
};

Icon.defaultProps = {
  color: 'currentColor',
  size: '1.1em',
};

export default withTheme(Icon);
