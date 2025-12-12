import { type AnchorHTMLAttributes } from "react";
import styled from "styled-components";

import Text, { type TextProps } from "../Text";

import { type ThemeType } from "../../types";

type StyledLinkProps = AnchorHTMLAttributes<HTMLElement> &
  TextProps & {
    theme: ThemeType;
    $appearance?: "primary" | "secondary";
    $textHoverColor?: string;
  };

export const StyledLink = styled(Text)<StyledLinkProps>`
  transition:
    color 0.2s ease,
    background-size 0.3s ease;
  overflow-wrap: break-word;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  padding: 0;
  color: ${({ $appearance }) =>
    !$appearance
      ? "var(--clr-link,  #e60079)"
      : $appearance && $appearance === "primary"
        ? "var(--clr-link-secondary,  #e60079)"
        : "var(--clr-link,  #e60079)"};

  text-decoration: ${({
    $appearance,
    theme: {
      typography: { linkTextDecoration, LinkPrimaryTextDecoration },
    },
  }) =>
    $appearance === "primary"
      ? LinkPrimaryTextDecoration
      : $appearance === "secondary"
        ? "none"
        : linkTextDecoration};
  font-family: ${({
    $appearance,
    theme: {
      typography: { fontFamilyBase, fontFamilyLinks },
    },
  }) =>
    $appearance === "primary" || $appearance === "secondary"
      ? fontFamilyLinks
      : fontFamilyBase};
  letter-spacing: ${({
    $appearance,
    theme: {
      typography: { LinkLetterSpacing },
    },
  }) =>
    $appearance === "primary" || $appearance === "secondary"
      ? LinkLetterSpacing
      : "0px"};
  font-weight: ${({ theme }) => theme.typography.fontWeightLinks};

  &:focus-visible {
    outline: auto;
  }

  &:hover {
    cursor: pointer;
    background-size: 100% 100%;
    color: ${({ $textHoverColor, $appearance }) =>
      $textHoverColor
        ? $textHoverColor
        : !$appearance
          ? "var(--clr-link-hover, #a5005f)"
          : $appearance && $appearance === "primary"
            ? "var(--clr-link-secondary-hover, #a5005f)"
            : "var(--clr-link-secondary-hover, #a5005f)"};
  }
`;

export default StyledLink;
