import React from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';
import { TOKEN_COLORS, SPACING } from '../../themes/cruk';

import Text from '../Text';

type ColorListProps = {
  theme: any;
};

const ColorListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ColorTileWrapper = styled.div`
  padding: ${({
    theme: {
      spacing: { small },
    },
  }) => small};
`;

export const ColorTile = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
  height: 100px;
  background-color: ${({ color }) => color};
  width: 170px;
`;

export const ColorLabelWrapper = styled.div`
  padding-top: ${({
    theme: {
      spacing: { extraSmall },
    },
  }) => extraSmall};
`;

const ColorList = (props: ColorListProps) => {
  // TODO: clean this all up once theme-clean-2 branch is merged
  const theme = {
    spacing: { ...SPACING },
    tokenColors: {
      ...TOKEN_COLORS,
    },
  };

  const { tokenColors } = theme;
  const colorLabelList = Object.keys(theme.tokenColors);

  return (
    <ThemeProvider theme={theme}>
      <ColorListStyled>
        {colorLabelList.map(color => (
          <ColorTileWrapper key={color}>
            <ColorTile color={tokenColors[`${color}`]}></ColorTile>
            <ColorLabelWrapper>
              <Text>{color}</Text>
              <Text>{tokenColors[`${color}`]}</Text>
            </ColorLabelWrapper>
          </ColorTileWrapper>
        ))}
      </ColorListStyled>
    </ThemeProvider>
  );
};

export default withTheme(ColorList);
