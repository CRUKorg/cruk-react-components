import styled from "styled-components";
import { type ThemeType } from "../../types";

const RADIO_SIZE = "1.5rem";
const RADIO_INNER_SIZE = "0.75rem";
const BUTTON_HEIGHT = "3em";

export const CheckWrapper = styled.div<{
  theme: ThemeType;
}>`
  display: inline-block;
  height: ${RADIO_SIZE};
  width: ${RADIO_SIZE};
  position: absolute;
  top: calc(50% - (${RADIO_SIZE} / 2));
  left: var(--spacing-xs, 1rem);
`;

export const Check = styled.span<{
  theme: ThemeType;
}>`
  display: block;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.selectionBorder};
  pointer-events: none;
  border-radius: 100%;
  height: ${RADIO_SIZE};
  width: ${RADIO_SIZE};
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
    height: ${RADIO_INNER_SIZE};
    width: ${RADIO_INNER_SIZE};
    top: calc(50% - (${RADIO_INNER_SIZE} / 2));
    left: calc(50% - (${RADIO_INNER_SIZE} / 2));
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
  box-sizing: border-box;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  line-height: ${({ theme }) => theme.typography.lineHeight};
  font-size: ${({ theme }) => theme.typography.fontSizeBase};
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};

  background-color: ${({ theme }) => theme.colors.backgroundLight};
  width: 100%;
  position: relative;

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  display: inline-block;

  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.disabled : theme.colors.textDark};
  padding: ${({ theme }) =>
    `calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-m, 2rem) calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-xl, 4rem)`};
  vertical-align: middle;

  min-height: 2rem;

  ${CheckWrapper} ${Check} {
    border: solid 2px
      ${({ theme, $disabled, $hasError }) =>
        $disabled
          ? theme.colors.disabled
          : $hasError
            ? theme.colors.danger
            : theme.colors.inputBorder};

    &:before {
      background-color: ${({ $checked, theme }) =>
        $checked ? theme.colors.check : `rgba(255, 255, 255, 0)`};
    }
  }

  &:hover ${CheckWrapper} ${Check} {
    border: solid 2px
      ${({ theme, $disabled }) =>
        $disabled ? theme.colors.disabled : theme.colors.check};
  }

  // increase font size for desktop
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
`;

export const VerticalAlign = styled.span<{
  theme: ThemeType;
}>`
  display: inline;
  vertical-align: middle;
  line-height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
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
  theme: ThemeType;
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
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.inputBorder};
    box-shadow: inset 0 0 0 2px -webkit-focus-ring-color;
  }

  &:checked ~ ${CheckWrapper} ${Check}::before {
    background: ${({ disabled, theme }) =>
      disabled ? theme.colors.disabled : theme.colors.check};
  }
`;
