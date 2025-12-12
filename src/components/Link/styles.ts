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
  color: ${({
    theme: {
      utilities: { useBackgroundStyleLinks },
    },
    $appearance,
  }) =>
    !$appearance && useBackgroundStyleLinks
      ? "currentColor"
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

  background: ${({
    $appearance,
    theme: {
      utilities: { useBackgroundStyleLinks },
    },
  }) =>
    useBackgroundStyleLinks && !$appearance
      ? `linear-gradient(180deg, rgba(255, 255, 255, 0) 0px, var(--clr-primary, #e60079) -4px);`
      : undefined};
  background-repeat: no-repeat;
  background-position-y: calc(100%);
  background-size: 100% 2px;
  font-weight: ${({ theme }) => theme.typography.fontWeightLinks};

  &:focus-visible {
    outline: auto;
  }

  &:hover {
    cursor: pointer;
    background-size: 100% 100%;
    color: ${({
      theme: {
        utilities: { useBackgroundStyleLinks },
      },
      $textHoverColor,
      $appearance,
    }) =>
      $textHoverColor
        ? $textHoverColor
        : useBackgroundStyleLinks
          ? "var(--clr-text-dark, #000000)"
          : !$appearance
            ? "var(--clr-link-hover, #a5005f)"
            : $appearance && $appearance === "primary"
              ? "var(--clr-link-secondary-hover, #a5005f)"
              : "var(--clr-link-secondary-hover, #a5005f)"};
  }
`;

export default StyledLink;
