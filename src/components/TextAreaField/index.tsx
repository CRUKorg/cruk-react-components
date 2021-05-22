import React, { FunctionComponent, ReactElement, TextareaHTMLAttributes } from 'react';
import styled, { css, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ErrorText from 'src/components/ErrorText';
import LabelWrapper from 'src/components/LabelWrapper';

type StyledTextareaProps = Omit<TextFieldProps, 'errorMessage' | 'hasError' | 'label'> & {
  hasError: boolean;
  resize: 'both' | 'vertical' | 'horizontal' | 'none';
  lineCount: number;
};

const StyledTextArea = styled.textarea<StyledTextareaProps>`
  resize: ${({ resize }) => resize};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  background-image: none;
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  border: ${({ theme, hasError }) => `solid ${theme.utilities.inputBorderWidth}
    ${hasError ? theme.colors.textError : theme.colors.textInputBorder}`};
  color: ${({ theme }) => theme.colors.textDark};
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: 6px 8px;
  width: 100%;
  height: ${({ lineCount, theme }) => `calc(${theme.typography.lineHeight} * ${lineCount})`};

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
  resize?: 'both' | 'vertical' | 'horizontal' | 'none';
  lineCount?: number;
};

const TextField: FunctionComponent<TextFieldProps> = ({
  errorMessage,
  hasError,
  hintText,
  label,
  resize = 'vertical',
  lineCount = 3,
  ...props
}) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  return (
    <LabelWrapper label={label} hintText={hintText} required={props.required || false}>
      <StyledTextArea
        hasError={hasError || !!errorMessage || false}
        aria-invalid={hasError || !!errorMessage || false}
        resize={resize}
        lineCount={lineCount}
        theme={theme}
        {...props}
      />
      {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </LabelWrapper>
  );
};

export default TextField;
