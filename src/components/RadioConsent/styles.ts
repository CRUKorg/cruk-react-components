import styled from "styled-components";

import RadioInput from "../Radio";

import { type ThemeType } from "../../types";

const LEGEND_WIDTH = "20%";
const MAX_WIDTH = "5em";

type ThemeProp = {
  theme: ThemeType;
};

type StyleRadioWidthProp = { numberOfAttributes: number } & ThemeProp;

export const StyledRadio = styled(RadioInput)`
  display: block;
  float: left;
  text-align: left;
  margin-left: ${({ theme }: ThemeProp) => theme.spacing.s};
  max-width: ${MAX_WIDTH};
  width: ${({ numberOfAttributes, theme }: StyleRadioWidthProp) =>
    `calc(((100% - ${LEGEND_WIDTH}) / ${numberOfAttributes}) - ${theme.spacing.s})`};
`;

export const StyledLegend = styled.legend`
  width: ${LEGEND_WIDTH};
  display: block;
  float: left;
  font-family: ${({ theme }: ThemeProp) => theme.typography.fontFamilyBase};
`;

export const StyledFieldSet = styled.fieldset`
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
  margin: 0 0 ${({ theme }: ThemeProp) => theme.spacing.s} 0;
  width: 100%;
`;
