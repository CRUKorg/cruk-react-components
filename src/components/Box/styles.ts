import styled from "styled-components";

import { spacing, type SpacingPropsInternal } from "../Spacing";
import { type ColorKeyType, type ThemeType } from "../../types";

type StyledBoxProps = SpacingPropsInternal & {
  $backgroundColor?: ColorKeyType;
  $css?: string;
  theme: ThemeType;
};

export const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  // if we set a background color, add padding
  padding: ${({ $backgroundColor }) =>
    $backgroundColor ? "var(--spacing-s, 1.5rem)" : 0};
  margin: 0 0 var(--spacing-m, 2rem) 0;

  &:last-child {
    margin-bottom: 0;
  }

  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor && typeof theme.colors[$backgroundColor] !== "undefined"
      ? theme.colors[$backgroundColor]
      : $backgroundColor || "transparent"};

  ${(props) => spacing(props)}
`;

export default StyledBox;
