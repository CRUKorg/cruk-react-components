import styled from "styled-components";
import { ThemeType } from "../../types";
import Text from "../Text";

type ThemeProps = {
  theme: ThemeType;
};
export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export const TextAsLabel = styled(Text)`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fontFamilyLabel};
`;

export const DateTextFieldWrapper = styled.div`
  display: inline-block;
  width: 60px;
  margin-right: ${({ theme }: ThemeProps) => theme.spacing.xs};
  span {
    margin-bottom: 0.25rem; // this is smaller than xxs spacing
    font-weight: ${({ theme }: ThemeProps) => theme.typography.fontWeightBase}
`;

export const LargeDateTextFieldWrapper = styled(DateTextFieldWrapper)`
  width: 80px;
`;

export const ErrorTextWrapper = styled.div`
  clear: left;
`;
