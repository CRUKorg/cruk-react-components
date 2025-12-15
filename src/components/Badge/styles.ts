import styled from "styled-components";

import { type SpaceType } from "../../types";

export const StyledBadge = styled.span<{
  $backgroundColor: string;
  $borderColor: string;
  $textColor: string;
  $isSquare: boolean;
  $size: SpaceType;
}>`
  --_border-width: 1px;

  display: inline-block;
  border-width: var(--_border-width, 1px);
  border-style: solid;
  text-align: center;
  font-size: var(--font-size-m, 1rem);
  font-family: var(--typ-font-family-base, "Poppins", Arial, sans-serif);
  padding: ${({ $isSquare }) => ($isSquare ? 0 : `var(--spacing-xxs, 0.5rem)`)};
  border-radius: ${({ $isSquare }) => ($isSquare ? "50%" : ` 1.5rem`)};
  height: ${({ $isSquare, $size }) =>
    $isSquare
      ? `calc(var(--spacing-${$size}) + var(--spacing-xs, 1rem) + var(--_border-width, 1px) * 2)`
      : `auto`};
  width: ${({ $isSquare, $size }) =>
    $isSquare
      ? `calc(var(--spacing-${$size}) + var(--spacing-xs, 1rem) + var(--_border-width, 1px) * 2)`
      : `auto`};
  line-height: ${({ $isSquare, $size }) =>
    $isSquare
      ? `calc(var(--spacing-${$size}) + var(--spacing-xs, 1rem))`
      : ` 1rem`};
  min-width: ${({ $size }) =>
    `calc(var(--spacing-${$size}) + var(--spacing-xs, 1rem))`};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-color: ${({ $borderColor }) => $borderColor};
  color: ${({ $textColor }) => $textColor};
`;

export default StyledBadge;
