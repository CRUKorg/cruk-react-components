import React, { FunctionComponent, InputHTMLAttributes, ReactElement } from 'react';
import styled, { css, withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import ErrorText from '../ErrorText';
import { WithLabel } from '../Label';

import { ThemeType } from '../../themes/types';

type ExtraProps = {
  theme: ThemeType;
};

const Extra = styled.span<ExtraProps>`
  display: block;
  background-color: ${({ theme }) => theme.colors.textInputExtraInfo};
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.typography.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  padding: 7px 6px 5px;
  line-height: 1rem;
  width: 100%;
`;

const ExtraTop = styled(Extra)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const ExtraBottom = styled(Extra)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const ExtraLeft = styled(Extra)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: initial;
`;

const ExtraRight = styled(Extra)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: initial;
  border: solid ${({ theme }) => theme.utilities.inputBorderWidth} ${({ theme }) => theme.colors.textInputBorder};
  transition: border-color 150ms linear;
  border-left: 0;
  background-color: transparent;
  padding: 0;
`;

const ExtraWrapper = styled.span`
  display: flex;
`;

type StyledInputProps = {
  hasError: boolean;
  error: string;
  extraTop?: string;
  extraBottom?: string;
  extraLeft?: string;
  extraRight?: string;
  theme: ThemeType;
};

const StyledInput = styled.input<StyledInputProps>`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  background-image: none;
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  border: solid ${({ theme }) => theme.utilities.inputBorderWidth} ${({ error, hasError, theme }) =>
  hasError || error ? theme.colors.textError : theme.colors.textInputBorder};
  color: ${({ theme }) => theme.colors.textDark};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 6px 8px;
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
            ~ ${ExtraRight} {
              border-color: ${({ theme }) => theme.colors.tertiary};
            }
          }
        `
      : null};
  
  ${({ extraTop }) =>
    !!extraTop &&
    css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}
  ${({ extraBottom }) =>
    !!extraBottom &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${({ extraLeft }) =>
    !!extraLeft &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
  ${({ extraRight }) =>
    !!extraRight &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${({ error, hasError, theme }: StyledInputProps) =>
    (error || hasError) &&
    css`
      ~ ${ExtraRight} {
        border-color: ${theme.colors.textError};
      }
    `}
`;

type TextFieldProps = InputHTMLAttributes<{}> & {
  error?: string;
  extraBottom?: string;
  extraLeft?: string;
  extraRight?: string;
  extraTop?: string;
  hasError?: boolean;
  hintText?: ReactElement | string;
  id?: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  theme: ThemeType;
  value?: string;
};

const TextField: FunctionComponent<TextFieldProps> = ({
  error,
  extraBottom,
  extraLeft,
  extraRight,
  extraTop,
  hasError,
  hintText,
  id,
  label,
  onChange,
  required,
  theme: propsTheme,
  value,
  ...props
}) => {
  const theme = {
    ...defaultTheme,
    ...propsTheme,
  };

  const renderContent = (
    <>
      {!!extraLeft && <ExtraLeft theme={theme}>{extraLeft}</ExtraLeft>}
      <StyledInput
        aria-invalid={hasError || !!error}
        error={error}
        extraBottom={extraBottom}
        extraLeft={extraLeft}
        extraRight={extraRight}
        extraTop={extraTop}
        hasError={hasError}
        id={id}
        onChange={onChange}
        theme={theme}
        value={value}
        {...props}
      />
      {!!extraRight && <ExtraRight theme={theme}>{extraRight}</ExtraRight>}
    </>
  );

  return (
    <WithLabel label={label} hintText={hintText} required={required} {...props}>
      {!!extraTop && <ExtraTop theme={theme}>{extraTop}</ExtraTop>}
      {!!extraRight || !!extraLeft ? <ExtraWrapper>{renderContent}</ExtraWrapper> : renderContent}
      {!!extraBottom && <ExtraBottom theme={theme}>{extraBottom}</ExtraBottom>}
      {!!error && <ErrorText theme={theme}>{error}</ErrorText>}
    </WithLabel>
  );
};

export default withTheme(TextField);
