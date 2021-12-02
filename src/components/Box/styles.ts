import styled, { css } from "styled-components";

import Spacing, { SpacingProps } from "../Spacing";
import { ColorKeyType, ThemeType } from "../../types";

type StyledBoxProps = SpacingProps & {
  backgroundColor?: string;
  css?: string;
  theme: ThemeType;
};

export const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${({ theme }: StyledBoxProps) =>
    theme.colors.backgroundLight};
  padding: ${({ theme, backgroundColor }: StyledBoxProps) =>
    backgroundColor ? theme.spacing.s : 0};
  margin: 0 0 ${({ theme }: StyledBoxProps) => theme.spacing.m} 0;

  &:last-child {
    margin-bottom: 0;
  }

  background-color: ${({
    theme: { colors },
    backgroundColor,
  }: StyledBoxProps) =>
    backgroundColor &&
    typeof colors[backgroundColor as ColorKeyType] !== "undefined"
      ? colors[backgroundColor as ColorKeyType]
      : backgroundColor || "transparent"};

  ${(props: StyledBoxProps) =>
    props.css &&
    css`
      ${props.css}
    `}
  ${(props) => Spacing(props, props.theme)}
`;

export default StyledBox;
