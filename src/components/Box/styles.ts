import styled, { css } from "styled-components";

import { spacing, type SpacingPropsInternal } from "../Spacing";
import { type ColorKeyType, type ThemeType } from "../../types";

type StyledBoxProps = SpacingPropsInternal & {
  $backgroundColor?: string;
  $css?: string;
  theme: ThemeType;
};

export const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.spacing.s : 0};
  margin: 0 0 ${({ theme }) => theme.spacing.m} 0;

  &:last-child {
    margin-bottom: 0;
  }

  background-color: ${({ theme: { colors }, $backgroundColor }) =>
    $backgroundColor &&
    typeof colors[$backgroundColor as ColorKeyType] !== "undefined"
      ? colors[$backgroundColor as ColorKeyType]
      : $backgroundColor || "transparent"};

  ${(props: StyledBoxProps) =>
    props.$css &&
    css`
      ${props.$css}
    `}
  ${(props) => spacing(props, props.theme as ThemeType)}
`;

export default StyledBox;
