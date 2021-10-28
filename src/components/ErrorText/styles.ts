import styled from "styled-components";
import Text from "src/components/Text";
import { ThemeType } from "src/types";

type ThemeProps = {
  theme: ThemeType;
};
export const StyledErrorText = styled(Text)`
  display: inline-block;
  color: ${({ theme }: ThemeProps) => theme.colors.textError};
  font-weight: ${({ theme }: ThemeProps) => theme.typography.fontWeightHeavy};
`;

export default StyledErrorText;
