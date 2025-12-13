import { type AnchorHTMLAttributes } from "react";
import styled from "styled-components";

import Text, { type TextProps } from "../Text";

type StyledLinkProps = AnchorHTMLAttributes<HTMLElement> &
  TextProps & {
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

  text-decoration: ${({ $appearance }) =>
    $appearance === "secondary" ? "none" : "underline"};
  font-family: ${({ $appearance }) =>
    $appearance === "primary" || $appearance === "secondary"
      ? "var(--typ-font-family-links, 'Poppins', Arial, sans-serif)"
      : "var(--typ-font-family-base, 'Poppins', Arial, sans-serif)"};
  font-weight: var(--typ-font-weight-links, 700);
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
