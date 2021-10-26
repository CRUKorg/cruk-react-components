import styled from 'styled-components';
import { ThemeType, ColorKeyType } from 'src/types';

type StyledIconProp = {
  theme: ThemeType;
  color?: string;
}

export const StyledIcon = styled.svg<{ color?: string; size?: string }>`
  display: inline-block;
  height: ${(props) => props.size};
  margin-top: -0.2em;
  vertical-align: middle;
  width: ${(props) => props.size};
  path {
    fill: ${({ theme: { colors }, color }: StyledIconProp) =>
      color && typeof colors[color as ColorKeyType] !== 'undefined' ? colors[color as ColorKeyType] : color || 'currentColor'};
  }
`;

export default StyledIcon;