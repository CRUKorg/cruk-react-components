import styled from 'styled-components';

import RadioInput from 'src/components/Radio';

import { ThemeType } from 'src/types';

const LEGEND_WIDTH = '20%';

export const StyledRadio = styled(RadioInput)`
  display: block;
  float: left;
  text-align: center;
  margin-left: ${({ theme }) => theme.spacing.s};
  width: ${({ numberOfAttributes, theme }: { numberOfAttributes: number; theme: ThemeType }) =>
    `calc(((100% - ${LEGEND_WIDTH}) / ${numberOfAttributes}) - ${theme.spacing.s})`};
`;

export const StyledLegend = styled.legend`
  width: ${LEGEND_WIDTH};
  display: block;
  float: left;
`;

export const StyledFieldSet = styled.fieldset`
  display: block;
  position: relative;
  border: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
  width: 100%;
`;
