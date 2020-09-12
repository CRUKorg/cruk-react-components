import React, { FunctionComponent, InputHTMLAttributes, ReactElement } from 'react';
import styled, { css, withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import ErrorText from '../ErrorText';
import { WithLabel } from '../Label';

import { ThemeType } from '../../themes/types';

type ExtraProps = {
  theme: ThemeType;
};

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  extraBottom?: ReactElement | string;
  extraLeft?: ReactElement | string;
  extraRight?: ReactElement | string;
  extraTop?: ReactElement | string;
  hasError?: boolean;
  hintText?: ReactElement | string;
  isValid?: boolean;
  isValidVisible?: boolean;
  isInvalidVisible?: boolean;
  label: string;
  theme: ThemeType;
};

type StyledInputProps = Omit<TextFieldProps, 'errorMessage' | 'hasError' | 'label'> & {
  hasError: boolean;
};

const CheckGlyph = styled.svg`
  height: 1rem;
  width: 1rem;
  margin-top: 0.125rem;
  margin-left: 0.25rem;

  path {
    fill: ${({ theme }) => theme.colors.textLight};
  }
`;

const CrossGlyph = styled.svg`
  height: 1rem;
  width: 1rem;
  margin-top: 0.25rem;
  margin-left: 0.25rem;

  path {
    fill: ${({ theme }) => theme.colors.textLight};
  }
`;

const Extra = styled.span<ExtraProps>`
  display: block;
  background-color: ${({ theme }) => theme.colors.textInputExtraInfo};
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.typography.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  padding: ${({ theme }) => `calc(${theme.spacing.small} / 2)`};
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

const StyledInput = styled.input<StyledInputProps>`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  background-image: none;
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  border: solid ${({ theme }) => theme.utilities.inputBorderWidth} ${({ hasError, theme }) =>
  hasError ? theme.colors.textError : theme.colors.textInputBorder};
  color: ${({ theme }) => theme.colors.textDark};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => `calc(${theme.spacing.small} / 2)`};

  /* Make sure text doesn't go behind the valid indicatior icon */
  ${({ isValidVisible, isInvalidVisible }) =>
    (isValidVisible || isInvalidVisible) &&
    css`
      padding-right: 3rem;
    `}

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
  ${({ hasError, theme }: StyledInputProps) =>
    hasError &&
    css`
      ~ ${ExtraRight} {
        border-color: ${theme.colors.textError};
      }
    `}
`;

const BackgroundValid = styled.div`
  position: absolute;
  bottom: ${({ hasExtraBottom }: { hasExtraBottom: boolean }) => (hasExtraBottom ? '3.25rem' : '0.75rem')};
  right: 0.75rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  pointer-events: none;
`;
const BackgroundInvalid = styled.div`
  position: absolute;
  bottom: ${({ hasExtraBottom }: { hasExtraBottom: boolean }) => (hasExtraBottom ? '3.25rem' : '0.75rem')};
  right: 0.75rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.danger};
  pointer-events: none;
`;

const TextField: FunctionComponent<TextFieldProps> = ({
  errorMessage,
  extraBottom,
  extraLeft,
  extraRight,
  extraTop,
  hasError,
  hintText,
  isValid,
  isValidVisible,
  isInvalidVisible,
  label,
  theme: propsTheme,
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
        hasError={hasError || !!errorMessage || false}
        aria-invalid={hasError || !!errorMessage || false}
        isValid={typeof isValid !== 'undefined' ? isValid : !hasError || !errorMessage || true}
        isValidVisible={isValidVisible || false}
        isInvalidVisible={isInvalidVisible || false}
        extraBottom={extraBottom}
        extraLeft={extraLeft}
        extraRight={extraRight}
        extraTop={extraTop}
        theme={theme}
        {...props}
      />
      {!!extraRight && <ExtraRight theme={theme}>{extraRight}</ExtraRight>}

      {/* Error messages or anything in the extra bottom area will break valid indicator postioning so don't show valid indicator if either are used */}
      {!errorMessage && !extraRight && isValid && isValidVisible ? (
        <BackgroundValid hasExtraBottom={!!extraBottom || false}>
          <CheckGlyph viewBox={`0 0 17.8 17.8`}>
            <path d="M0 11.314l1.52-1.52 4.95 4.95 9.794-9.794 1.52 1.52L6.482 17.774l-.01-.01-.01.01z" />
          </CheckGlyph>
        </BackgroundValid>
      ) : null}
      {!errorMessage && !extraRight && !isValid && isInvalidVisible ? (
        <BackgroundInvalid hasExtraBottom={!!extraBottom || false}>
          <CrossGlyph viewBox={`0 0 352 512`}>
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </CrossGlyph>
        </BackgroundInvalid>
      ) : null}
    </>
  );

  return (
    <WithLabel label={label} hintText={hintText} required={props.required || false}>
      {!!extraTop && <ExtraTop theme={theme}>{extraTop}</ExtraTop>}
      {!!extraRight || !!extraLeft ? <ExtraWrapper>{renderContent}</ExtraWrapper> : renderContent}
      {!!extraBottom && <ExtraBottom theme={theme}>{extraBottom}</ExtraBottom>}
      {!!errorMessage && <ErrorText theme={theme}>{errorMessage}</ErrorText>}
    </WithLabel>
  );
};

export default withTheme(TextField);
