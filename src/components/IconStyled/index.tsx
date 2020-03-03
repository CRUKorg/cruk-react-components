import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import { COLORS } from '../../Constants';

type StyledIconProps = {
  color: string;
  size: string;
  transformStyle: string;
};

const SVGWrapper = styled.div`
  display: inline-block;
  height: ${({ size }: StyledIconProps) => size};
  width: ${({ size }: StyledIconProps) => size};
  transform: ${({ transformStyle }: StyledIconProps) => transformStyle};
  /* TODO: what is this magic number? if this is fixing inline block alignment it can differ on different browsers */
  margin-top: -0.2em;
  vertical-align: middle;
  svg {
    height: 100%;
    width: 100%;
    path {
      transition: fill 0.3s ease;
      fill: ${({ color }: StyledIconProps) => color};
    }
  }
`;

export type IconStyledProps = {
  color?: string;
  hoverColor?: string;
  size?: string;
  transform?: string;
};

type ThemeProps = {
  theme?: { colors: {} };
};

type Props = IconStyledProps & ThemeProps;

export const IconStyled: FunctionComponent<Props> = ({
  theme = { colors: {} },
  color = 'currentColor',
  size = '1.1em',
  transform = 'none',
  children,
}) => {
  // TODO fix this complication with duplicating type definition
  const mergedTheme = {
    colors: {
      ...COLORS,
      ...theme.colors,
    },
  };
  const foundColor = (mergedTheme.colors as { [key: string]: string })[color] || color;

  return (
    <ThemeProvider theme={theme}>
      <SVGWrapper transformStyle={transform} size={size} color={foundColor}>
        {children}
      </SVGWrapper>
    </ThemeProvider>
  );
};

export default withTheme(IconStyled);
