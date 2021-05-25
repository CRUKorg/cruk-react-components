import styled, { css } from 'styled-components';

import { ThemeType } from 'src/types';

const BUTTON_HEIGHT = '3rem';

type StyledSelectProps = {
  hasError: boolean;
  errorMessage?: string;
  theme: ThemeType;
};

export const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  background: linear-gradient(
      45deg,
      transparent 50%,
      ${({ theme }: StyledSelectProps) => theme.colors.selectBackground} 50%
    ),
    linear-gradient(135deg, ${({ theme }: StyledSelectProps) => theme.colors.selectBackground} 50%, transparent 50%);
  background-position: calc(100% - 16px) 50%, calc(100% - 10px) 50%;
  background-size: 6px 6px;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  border: ${({ theme, hasError, errorMessage }) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      hasError || errorMessage ? theme.colors.textError : theme.colors.textInputBorder
    }`};
  color: ${({ theme }) => theme.colors.textDark};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.m};
  min-height: ${BUTTON_HEIGHT};
  padding: ${({ theme }) =>
    `calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m} calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.xs}`};
  width: 100%;
  transition: border-color 150ms linear;
  &:disabled {
    border-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabled};
  }

  ${({ theme }) =>
    !theme.utilities.useDefaultFocusRect
      ? css`
          &:focus {
            outline: 0;
            border-color: ${({ theme }) => theme.colors.tertiary};
          }
        `
      : null};
`;
