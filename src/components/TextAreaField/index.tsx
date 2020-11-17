import React, { FunctionComponent, ReactElement, TextareaHTMLAttributes } from 'react';
import styled, { css, withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import ErrorText from '../ErrorText';
import { WithLabel } from '../Label';

import { ThemeType } from '../../types';

type StyledTextareaProps = Omit<TextFieldProps, 'errorMessage' | 'hasError' | 'label'> & {
  hasError: boolean;
};

const StyledTextArea = styled.textarea<StyledTextareaProps>`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  background-image: none;
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  border: ${({ theme, hasError }) => `solid ${theme.utilities.inputBorderWidth}
    ${hasError ? theme.colors.textError : theme.colors.textInputBorder}`};
  color: ${({ theme }) => theme.colors.textDark};
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
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
          }
        `
      : null};
`;

type TextFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorMessage?: string;
  hasError?: boolean;
  hintText?: ReactElement | string;
  label: string;
  theme: ThemeType;
};

const TextField: FunctionComponent<TextFieldProps> = ({
  errorMessage,
  hasError,
  hintText,
  label,
  theme: propsTheme,
  ...props
}) => {
  const theme = {
    ...defaultTheme,
    ...propsTheme,
  };

  return (
    <WithLabel label={label} hintText={hintText} required={props.required || false}>
      <StyledTextArea
        hasError={hasError || !!errorMessage || false}
        aria-invalid={hasError || !!errorMessage || false}
        theme={theme}
        {...props}
      />
      {!!errorMessage && <ErrorText theme={theme}>{errorMessage}</ErrorText>}
    </WithLabel>
  );
};

export default withTheme(TextField);
