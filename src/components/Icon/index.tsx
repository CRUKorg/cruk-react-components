import React, { FunctionComponent } from 'react';
import styled, { withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import { ICONS } from './iconList';
import { camelize } from '../../utils/Helper';

import { ThemeType, ColorsType } from '../../themes/types';

type IconProps = {
  name?: string;
  color?: string;
  size?: string;
  transform?: string;
  theme?: ThemeType;
  getColor?: string;
};

const StyledIcon = styled.svg`
  display: inline-block;
  height: ${(props: IconProps) => props.size};
  margin-top: -0.2em;
  vertical-align: middle;
  width: ${(props: IconProps) => props.size};
  path {
    fill: ${(props: IconProps) => props.getColor};
  }
`;

const Icon: FunctionComponent<IconProps> = props => {
  const name = props.name && camelize(props.name);
  const icon = (ICONS as any)[name] || ICONS.question;
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const color = (theme.colors as ColorsType)[props.color] || props.color;
  return (
    <StyledIcon
      aria-hidden="true"
      role="presentation"
      getColor={color}
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
