import styled from "styled-components";
import { type ThemeType } from "../../types";

export const CheckWrapper = styled.div`
  display: inline-block;
  height: var(--_radio-size, 1.5rem);
  width: var(--_radio-size, 1.5rem);
  position: absolute;
  top: calc(50% - (var(--_radio-size, 1.5rem) / 2));
  left: var(--spacing-xs, 1rem);
`;

export const Check = styled.span`
  display: block;
  position: relative;
  border: 2px solid var(--clr-selection-border, #666);
  pointer-events: none;
  border-radius: 100%;
  height: var(--_radio-size, 1.5rem);
  width: var(--_radio-size, 1.5rem);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  transition:
    border 0.25s linear,
    box-shadow 0.25s linear;

  &:before {
    display: block;
    position: absolute;
    content: "";
    border-radius: 100%;
    pointer-events: none;
    height: var(--_radio-inner-size, 0.75rem);
    width: var(--_radio-inner-size, 0.75rem);
    top: calc(50% - (var(--_radio-inner-size, 0.75rem) / 2));
    left: calc(50% - (var(--_radio-inner-size, 0.75rem) / 2));
    margin: auto;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.25s linear;
  }
`;

export const StyledLabel = styled.label<{
  $hasError: boolean;
  $disabled: boolean;
  $checked: boolean;
  theme: ThemeType;
}>`
  --_radio-size: 1.5rem;
  --_radio-inner-size: 0.75rem;
  --_button-height: 3em;

  box-sizing: border-box;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  line-height: ${({ theme }) => theme.typography.lineHeight};
  font-size: ${({ theme }) => theme.typography.fontSizeBase};
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};

  background-color: var(--clr-background-light, #fff);
  width: 100%;
  position: relative;

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  display: inline-block;

  color: ${({ $disabled }) =>
    $disabled ? "var(--clr-disabled, #e6e6e6)" : "var(--clr-text-dark, #000)"};
  padding: ${({ theme }) =>
    `calc( (var(--_button-height, 3em) - ( var(--size-border-width, 1px) * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-m, 2rem) calc( (var(--_button-height, 3em) - ( var(--size-border-width, 1px) * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-xl, 4rem)`};
  vertical-align: middle;

  min-height: 2rem;

  ${CheckWrapper} ${Check} {
    border: solid 2px
      ${({ $disabled, $hasError, $checked }) =>
        $disabled
          ? "var(--clr-disabled, #e6e6e6)"
          : $hasError
            ? "var(--clr-danger, #f00)"
            : $checked
              ? "var(--clr-check, #d5007d)"
              : "var(--clr-input-border, #2e2d2c)"};

    &:before {
      background-color: ${({ $checked }) =>
        $checked ? "var(--clr-check, #d5007d)" : `rgba(255, 255, 255, 0)`};
    }
  }

  &:hover ${CheckWrapper} ${Check} {
    border: solid 2px
      ${({ $disabled }) =>
        $disabled
          ? "var(--clr-disabled, #e6e6e6;)"
          : "var(--clr-check, #d5007d)"};
  }

  // increase font size for desktop
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
`;

export const VerticalAlign = styled.span`
  display: inline;
  vertical-align: middle;
  line-height: 100%;
  background-color: var(--clr-background-light, #fff);
  min-height: 2em;
  z-index: 1;
`;

export const SelectedBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  z-index: 0;
`;

export const StyledInput = styled.input<{
  disabled: boolean;
}>`
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  margin-right: var(--spacing-xxs, 1rem);

  position: absolute;
  left: var(--spacing-xxs, 1rem);
  opacity: 0;

  &:focus ~ ${SelectedBorder} {
    outline: none !important;
    box-shadow: inset 0 0 0 2px var(--clr-input-border, #2e2c2d);
    box-shadow: inset 0 0 0 2px -webkit-focus-ring-color;
  }

  &:checked ~ ${CheckWrapper} ${Check}::before {
    background: ${({ disabled }) =>
      disabled ? "var(--clr-disabled, #e6e6e6)" : "var(--clr-check, #d5007d)"};
  }
`;
