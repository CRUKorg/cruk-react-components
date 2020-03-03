import React from 'react';
import styled, { ThemeProvider, withTheme } from 'styled-components';

import { COLORS } from '../../Constants';

import IconBase, { IconBasePropsType, IconBaseStyledPropsType } from '../IconBase';
import SVGClock from '../../assets/svg/icons/clock.svg';

const SVGClockStyled = styled(SVGClock)`
  ${(props: IconBaseStyledPropsType) => IconBase(props)}
`;

export const IconClock = ({ theme = { colors: COLORS }, color, ...props }: IconBasePropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <SVGClockStyled aria-hidden="true" focusable="false" iconColor={color} {...props} />
    </ThemeProvider>
  );
};

export default withTheme(IconClock);
