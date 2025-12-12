import styled from "styled-components";
import { type ThemeType } from "../../types";

export const CheckWrapper = styled.div<{
  theme: ThemeType;
}>`
  --_check-box-size: 1.5rem;
  --_button-height: 3em;
  --_border-width: 2px;

  display: inline-block;
  height: var(--_check-box-size, 1.5rem);
  width: var(--_check-box-size, 1.5rem);
  position: absolute;
  top: calc(50% - (var(--_check-box-size, 1.5rem) / 2));
  left: var(--spacing-xs, 0.5rem);
`;

export const Check = styled.span<{
  theme: ThemeType;
}>`
  display: block;
  position: relative;
  border: 2px solid var(--clr-selection-border, #666);
  height: var(--_check-box-size, 1.5rem);
  width: var(--_check-box-size, 1.5rem);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  transition: border 0.25s ease;
  overflow: hidden;
  // do not increase font size of check icon at this breakpoint
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }

  svg {
    vertical-align: baseline;
    path {
      transition: transform 0.25s ease;
      transform: rotateY(90deg);
      transform-origin: center;
    }
    /* we want the check box check to remain the same size */
    @media (min-width: 1200px) {
      font-size: var(--font-size-m, 1rem);
    }
  }
`;

export const StyledLabel = styled.label<{
  $checked: boolean;
  $disabled: boolean;
  $hasError: boolean;
  theme: ThemeType;
}>`
  box-sizing: border-box;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  line-height: ${({ theme }) => theme.typography.lineHeight};
  font-size: ${({ theme }) => theme.typography.fontSizeBase};
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};

  // increase font size for desktop
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }

  background-color: var(--clr-background-light, #fff);
  position: relative;

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  display: block;

  color: ${({ $disabled }) =>
    $disabled ? "var(--clr-disabled, #e6e6e6)" : "var(--clr-text-dark, #000)"};
  padding: ${({ theme }) =>
    `calc( (var(--_button-height, 3em) - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-m, 2rem) calc( (var(--_button-height, 3em) - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-xl, 3rem)`};
  &:focus ~ ${CheckWrapper} ${Check} {
    outline: 2px solid #7aacfe; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color;
  }

  svg {
    path {
      fill: ${({ $disabled }) =>
        $disabled
          ? "var(--clr-disabled, #e6e6e6)"
          : "var(--clr-check, #e60079)"};
    }
  }

  min-height: 2rem;

  ${CheckWrapper} ${Check} {
    border-style: solid;
    border-width: var(--_border-width, 2px);
    border-color: ${({ $disabled, $hasError, $checked }) =>
      $disabled
        ? "var(--clr-disabled, #e6e6e6)"
        : $hasError
          ? "var(--clr-danger, #ff0000)"
          : $checked
            ? "var(--clr-check, #e60079)"
            : "var(--clr-input-border, #2e2d2c)"};
  }
  &:hover ${CheckWrapper} ${Check} {
    border-style: solid;
    border-width: var(--_border-width, 2px);
    border-color: ${({ $disabled, $hasError, $checked }) =>
      $disabled
        ? "var(--clr-disabled, #e6e6e6)"
        : $hasError
          ? "var(--clr-danger, #ff0000)"
          : $checked
            ? "var(--clr-check, #e60079)"
            : "var(--clr-input-border, #2e2d2c)"};
  }
`;

export const SelectedBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// TODO when we get rid of bootstrap remove !important.
export const StyledInput = styled.input<{
  theme: ThemeType;
}>`
  margin-right: 5px !important;

  /* This hides the original input */
  position: absolute;
  left: var(--spacing-xxs, 0.5rem);
  opacity: 0;

  &:focus ~ ${SelectedBorder} {
    outline: none !important;
    box-shadow: inset 0 0 0 2px var(--clr-input-border, #2e2d2c);
    box-shadow: inset 0 0 0 2px -webkit-focus-ring-color;
  }

  &:checked ~ ${CheckWrapper} svg path {
    transform: rotateY(0deg);
  }
`;
