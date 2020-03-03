import React from 'react';
import styled, { ThemeProvider, withTheme } from 'styled-components';

import { COLORS } from '../../Constants';

import IconBase, { IconBasePropsType, IconBaseStyledPropsType } from '../IconBase';
import SVGChevronRight from '../../assets/svg/icons/chevronRight.svg';

const SVGChevronRightStyled = styled(SVGChevronRight)`
  ${(props: IconBaseStyledPropsType) => IconBase(props)}
`;

export const IconChevronRight = ({ theme = { colors: COLORS }, color, ...props }: IconBasePropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <SVGChevronRightStyled aria-hidden="true" focusable="false" iconColor={color} {...props} />
    </ThemeProvider>
  );
};

export default withTheme(IconChevronRight);
