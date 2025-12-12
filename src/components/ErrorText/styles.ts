import styled from "styled-components";
import Text from "../Text";
import { type ThemeType } from "../../types";

type ThemeProps = {
  theme: ThemeType;
};
export const StyledErrorText = styled(Text)<ThemeProps>`
  display: inline-block;
  color: var(--clr-text-error, #d93025);
  font-weight: ${({ theme }) => theme.typography.fontWeightHeavy};
`;

export default StyledErrorText;
