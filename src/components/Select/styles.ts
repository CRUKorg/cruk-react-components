import styled, { css } from "styled-components";

import { ThemeType } from "../../types";

const BUTTON_HEIGHT = "3rem";

type StyledSelectProps = {
  hasError: boolean;
  errorMessage?: string;
  theme: ThemeType;
};

const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  background: linear-gradient(
      45deg,
      ${({ theme }: StyledSelectProps) => theme.colors.backgroundLight} 50%,
      ${({ theme }: StyledSelectProps) => theme.colors.selectBackground} 50%
    ),
    linear-gradient(
      135deg,
      ${({ theme }: StyledSelectProps) => theme.colors.selectBackground} 50%,
      ${({ theme }: StyledSelectProps) => theme.colors.backgroundLight} 50%
    );
  background-color: ${({ theme }: StyledSelectProps) =>
    theme.colors.backgroundLight};
  background-position:
    calc(100% - 16px) 50%,
    calc(100% - 10px) 50%;
  background-size: 6px 6px;
  background-repeat: no-repeat;
  border: ${({ theme, hasError, errorMessage }: StyledSelectProps) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      hasError || errorMessage
        ? theme.colors.textError
        : theme.colors.textInputBorder
    }`};
  color: ${({ theme }: StyledSelectProps) => theme.colors.textDark};
  display: block;
  font-size: ${({ theme }: StyledSelectProps) => theme.fontSizes.m};
  min-height: ${BUTTON_HEIGHT};
  padding: ${({ theme }: StyledSelectProps) =>
    `calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m} calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.xs}`};
  width: 100%;
  transition: border-color 150ms linear;
  &:hover {
    border-color: ${({ theme }: StyledSelectProps) => theme.colors.secondary};
  }
  &:disabled {
    border-color: ${({ theme }: StyledSelectProps) => theme.colors.disabled};
    color: ${({ theme }: StyledSelectProps) => theme.colors.disabled};
  }

  ${({ theme }: StyledSelectProps) =>
    !theme.utilities.useDefaultFocusRect
      ? css`
          &:focus {
            outline: 0;
            border-color: ${theme.colors.tertiary};
          }
        `
      : null};
`;

export default StyledSelect;
export { StyledSelect };
