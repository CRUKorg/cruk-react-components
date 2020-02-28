import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import { COLORS } from '../../Constants';

type StyledIconProps = {
  color: string;
  hoverColor: string;
  size: string;
  transform: string;
};

const SVGWrapper = styled.div`
  display: inline-block;
  height: ${({ size }: StyledIconProps) => size};
  width: ${({ size }: StyledIconProps) => size};
  transform: ${({ transform }: StyledIconProps) => transform};
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

  &:hover {
    svg {
      path {
        fill: ${({ hoverColor }: StyledIconProps) => hoverColor};
      }
    }
  }
`;

type Props = {
  color?: string;
  hoverColor?: string;
  size?: string;
  transform?: string;
  theme?: { colors: {} };
};

export const IconStyled: FunctionComponent<Props> = ({
  theme = { colors: {} },
  color = 'currentColor',
  hoverColor = 'currentColor',
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
  const foundHoverColor = (mergedTheme.colors as { [key: string]: string })[hoverColor] || hoverColor;

  return (
    <ThemeProvider theme={theme}>
      <SVGWrapper color={foundColor} hoverColor={foundHoverColor} size={size} transform={transform}>
        {children}
      </SVGWrapper>
    </ThemeProvider>
  );
};

export default withTheme(IconStyled);
