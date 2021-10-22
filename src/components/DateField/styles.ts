import styled from 'styled-components';
import { ThemeType } from 'src/types';

type ThemeProps = {
  theme: ThemeType
}
export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
`;

export const DateTextFieldWrapper = styled.div`
  display: inline-block;
  width: 60px;
  margin-right: ${({ theme }: ThemeProps) => theme.spacing.xs};
  span {
    margin-bottom: 0.25rem; // this is smaller than xxs spacing
    font-weight: ${({ theme }: ThemeProps) => theme.typography.fontWeightMedium};
  }
`;

export const LargeDateTextFieldWrapper = styled(DateTextFieldWrapper)`
  width: 80px;
`;

export const ErrorTextWrapper = styled.div`
  clear: left;
`;
