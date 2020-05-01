import React, { FunctionComponent, ReactElement, SelectHTMLAttributes } from 'react';
import styled, { withTheme, css } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import ErrorText from '../ErrorText';
import { WithLabel } from '../Label';

import { ThemeType } from '../../themes/types';

type StyledSelectProps = {
  hasError: boolean;
  error: string;
  theme: ThemeType;
};

const StyledSelect = styled.select<StyledSelectProps>`
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
  border: ${({ theme, hasError, error }) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      hasError || error ? theme.colors.textError : theme.colors.textInputBorder
    }`};
  color: ${({ theme }) => theme.colors.textDark};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 6px 24px 6px 8px;
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

type SelectProps = SelectHTMLAttributes<{}> & {
  error?: string;
  hasError?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  theme: ThemeType;
  label: string;
  value: string;
  hintText?: ReactElement | string;
};

const Select: FunctionComponent<SelectProps> = ({
  error,
  hasError,
  onChange,
  required,
  theme: propsTheme,
  value,
  label,
  hintText,
  children,
  ...props
}) => {
  const theme = {
    ...defaultTheme,
    ...propsTheme,
  };

  return (
    <WithLabel label={label} hintText={hintText} required={required} {...props}>
      <StyledSelect
        error={error}
        hasError={hasError}
        onChange={onChange}
        theme={theme}
        value={value}
        aria-invalid={hasError || !!error}
        children={children}
        {...props}
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </WithLabel>
  );
};

export default withTheme(Select);
