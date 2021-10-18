import styled from "styled-components";
import Text from "src/components/Text";

export const StyledErrorText = styled(Text)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textError};
  font-weight: ${({ theme }) => theme.typography.fontWeightHeavy};
`;
