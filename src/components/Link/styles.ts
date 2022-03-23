import { AnchorHTMLAttributes } from "react";
import styled, { css } from "styled-components";

import Text, { TextProps } from "../Text";
import Icon from "../Icon";

import { ThemeType, ColorKeyType } from "../../types";

type ThemeProp = {
  theme: ThemeType;
};

export const ChevyWithLevee = styled(Icon)`
  margin-right: ${({
    theme: {
      spacing: { xxs },
    },
  }: ThemeProp) => xxs};
`;

type StyledLinkProps = AnchorHTMLAttributes<HTMLElement> &
  TextProps & {
    theme: ThemeType;
    appearance?: "primary" | "secondary";
    textHoverColor?: string;
  };

export const StyledLink = styled(Text)<StyledLinkProps>`
  transition: color 0.2s ease, background-size 0.3s ease;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  padding: 0;
  color: ${({
    theme: {
      colors,
      utilities: { useBackgroundStyleLinks },
    },
    textColor,
    appearance,
  }: StyledLinkProps) =>
    textColor && typeof colors[textColor as ColorKeyType] !== "undefined"
      ? colors[textColor as ColorKeyType]
      : textColor ||
        (!appearance && useBackgroundStyleLinks
          ? "currentColor"
          : appearance && appearance === "primary"
          ? colors.secondary
          : colors.linkColor)};
  text-decoration: ${({
    appearance,
    theme: {
      typography: { linkTextDecoration },
    },
  }: StyledLinkProps) =>
    appearance === "primary" || appearance === "secondary"
      ? "none"
      : linkTextDecoration};
  font-weight: ${({ theme }: ThemeProp) =>
    theme.utilities.useBackgroundStyleLinks
      ? theme.typography.fontWeightHeavy
      : theme.typography.fontWeightMedium};
  background: ${({
    appearance,
    theme,
    theme: {
      utilities: { useBackgroundStyleLinks },
    },
  }: StyledLinkProps) =>
    useBackgroundStyleLinks && !appearance
      ? `linear-gradient(180deg, rgba(255, 255, 255, 0) 0px, ${theme.colors.primary} -4px);`
      : undefined};
  background-repeat: no-repeat;
  background-position-y: calc(100%);
  background-size: 100% 2px;

  ${({
    appearance,
    theme: {
      typography: { fontWeightHeavy },
    },
  }: StyledLinkProps) =>
    (appearance === "primary" || appearance === "secondary") &&
    css`
      font-weight: ${fontWeightHeavy};
    `}

  &:focus {
    outline: auto;
  }

  &:hover {
    cursor: pointer;
    background-size: 100% 100%;
    color: ${({
      theme: {
        colors,
        utilities: { useBackgroundStyleLinks },
      },
      textHoverColor,
    }: StyledLinkProps) =>
      !textHoverColor && useBackgroundStyleLinks
        ? colors.textDark
        : textHoverColor &&
          typeof colors[textHoverColor as ColorKeyType] !== "undefined"
        ? colors[textHoverColor as ColorKeyType]
        : textHoverColor || colors.linkColorHover};
  }
`;
