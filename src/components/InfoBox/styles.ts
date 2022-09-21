import styled, { css } from "styled-components";

import Spacing, { SpacingProps } from "../Spacing";
import { ThemeType } from "../../types";

type InfoBoxProps = SpacingProps & {
  backgroundColor?: string;
  headingText?: string;
  headingTextColor?: string;
  descriptionText?: string;
  descriptionTextColor?: string;
  iconName?: string;
  iconColor?: string;
  iconSize?: string;
  borderColor?: string;
  borderStyle?: string;
  borderSize?: string;
  css?: string;
  theme: ThemeType;
};

export const StyledInfoBox = styled.div<InfoBoxProps>`
  background-color: ${({ backgroundColor, theme }: InfoBoxProps) =>
    backgroundColor || "#F5F5F5"};

  padding: ${({ theme, backgroundColor }: InfoBoxProps) =>
    backgroundColor || theme.colors.backgroundLight ? theme.spacing.xxs : 0};
  margin: 0 0 ${({ theme }: InfoBoxProps) => theme.spacing.m} 0;

  &:last-child {
    margin-bottom: 0;
  }

  display: flex;

  flex-shrink: 0;

  svg {
    margin-right: ${({ theme }: InfoBoxProps) => theme.spacing.xs};
    margin-top: 3px;
  }

  border: ${({ borderSize }: InfoBoxProps) => borderSize}
    ${({ borderStyle }: InfoBoxProps) => borderStyle}
    ${({ borderColor }: InfoBoxProps) => borderColor};

  ${(props: InfoBoxProps) =>
    props.css &&
    css`
      ${props.css}
    `}
  ${(props) => Spacing(props, props.theme as ThemeType)}
`;

export default StyledInfoBox;
