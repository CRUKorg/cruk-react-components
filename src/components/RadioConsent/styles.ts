import styled from "styled-components";

import RadioInput from "../Radio";

import { type ThemeType } from "../../types";

const LEGEND_WIDTH = "20%";
const MAX_WIDTH = "5em";

type ThemeProp = {
  theme: ThemeType;
};

type StyleRadioWidthProp = { numberOfAttributes: number } & ThemeProp;

export const StyledRadio = styled(RadioInput)<StyleRadioWidthProp>`
  display: block;
  float: left;
  text-align: left;
  margin-left: ${({ theme }) => theme.spacing.s};
  max-width: ${MAX_WIDTH};
  width: ${({ numberOfAttributes, theme }) =>
    `calc(((100% - ${LEGEND_WIDTH}) / ${numberOfAttributes}) - ${theme.spacing.s})`};
`;

export const StyledLegend = styled.legend<ThemeProp>`
  width: ${LEGEND_WIDTH};
  display: block;
  float: left;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

export const StyledFieldSet = styled.fieldset<ThemeProp>`
  box-sizing: border-box;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  display: block;
  position: relative;
  border: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
  width: 100%;
`;
