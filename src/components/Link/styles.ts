import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";

import Text, { TextProps } from "../Text";

import { ThemeType, ColorKeyType } from "../../types";

type StyledLinkProps = AnchorHTMLAttributes<HTMLElement> &
  TextProps & {
    theme: ThemeType;
    appearance?: "primary" | "secondary";
    textHoverColor?: string;
  };

export const StyledLink = styled(Text)<StyledLinkProps>`
  transition: color 0.2s ease, background-size 0.3s ease;
  overflow-wrap: break-word;
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
          ? colors.linkColorSecondary
          : colors.linkColor)};
  text-decoration: ${({
    appearance,
    theme: {
      typography: { linkTextDecoration, LinkPrimaryTextDecoration },
    },
  }: StyledLinkProps) =>
    appearance === "primary"
      ? LinkPrimaryTextDecoration
      : appearance === "secondary"
      ? "none"
      : linkTextDecoration};
  font-family: ${({
    appearance,
    theme: {
      typography: { fontFamilyBase, fontFamilyLinks },
    },
  }: StyledLinkProps) =>
    appearance === "primary" || appearance === "secondary"
      ? fontFamilyLinks
      : fontFamilyBase};
  letter-spacing: ${({
    appearance,
    theme: {
      typography: { LinkLetterSpacing },
    },
  }: StyledLinkProps) =>
    appearance === "primary" || appearance === "secondary"
      ? LinkLetterSpacing
      : "0px"};

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
  font-weight: ${({ theme }: StyledLinkProps) =>
    theme.typography.fontWeightLinks}};

  &:focus-visible {
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
      appearance,
    }: StyledLinkProps) =>
      !textHoverColor && useBackgroundStyleLinks
        ? colors.textDark
        : textHoverColor &&
          typeof colors[textHoverColor as ColorKeyType] !== "undefined"
        ? colors[textHoverColor as ColorKeyType]
        : textHoverColor
        ? appearance && appearance === "primary"
          ? colors.linkColorHover
          : colors.linkColorSecondaryHover
        : colors.linkColorHover};
  }
`;

export default StyledLink;
