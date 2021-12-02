import styled from "styled-components";
import Text from "../Text";
import { ThemeType } from "../../types";

type ThemeProps = {
  theme: ThemeType;
};
export const StyledErrorText = styled(Text)`
  display: inline-block;
  color: ${({ theme }: ThemeProps) => theme.colors.textError};
  font-weight: ${({ theme }: ThemeProps) => theme.typography.fontWeightHeavy};
`;

export default StyledErrorText;
