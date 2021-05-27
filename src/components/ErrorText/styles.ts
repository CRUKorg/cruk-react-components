import styled from 'styled-components';
import Text from 'src/components/Text';

export const StyledErrorText = styled(Text)`
  color: ${({ theme }) => theme.colors.textError};
`;
