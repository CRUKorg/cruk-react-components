import React, { Fragment, FunctionComponent } from 'react';
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
  border: solid 2px ${({ theme }) => theme.colors.textInputBorder};
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
};

const StyledInput = styled.input<StyledInputProps>`
  background-color: ${props => props.theme.colors.lightBackground};
  background-image: none;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px ${props =>
    props.hasError || props.error ? props.theme.colors.textError : props.theme.colors.textInputBorder};
  color: ${props => props.theme.colors.textDark};
  display: block;
  font-size: ${props => props.theme.fontSizes.medium};
  padding: 6px 8px;
  width: 100%;
  transition: border-color 150ms linear;
  &:focus {
    border-color: ${props => props.theme.colors.tertiary};
    outline: 0;
    ~ ${ExtraRight} {
      border-color: ${props => props.theme.colors.tertiary};
    }
  }
  ${props =>
    !!props.extraTop &&
    css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}
  ${props =>
    !!props.extraBottom &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${props =>
    !!props.extraLeft &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
  ${props =>
    !!props.extraRight &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${props =>
    (props.hasError || props.error) &&
    css`
      ~ ${ExtraRight} {
        border-color: ${props.theme.colors.textError};
      }
    `}
`;

type WrapperProps = {
  extraTop?: string;
  extraBottom?: string;
  extraLeft?: string;
  extraRight?: string;
};

const Wrapper: FunctionComponent<WrapperProps> = props =>
  !props.extraTop && !props.extraBottom && !props.extraRight && !props.extraLeft ? (
    <Fragment>{props.children}</Fragment>
  ) : (
    <span>{props.children}</span>
  );

type TextFieldProps = {
  disabled?: boolean;
  error?: string;
  extraBottom?: string;
  extraLeft?: string;
  extraRight?: string;
  extraTop?: string;
  hasError?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  theme: ThemeType;
  type: 'text' | 'number' | 'email' | 'password';
  value: string;
  label: string;
  hintText?: string;
  required?: boolean;
};

const TextField: FunctionComponent<TextFieldProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  const renderContent = (
    <>
      {!!props.extraLeft && <ExtraLeft theme={theme}>{props.extraLeft}</ExtraLeft>}
      <StyledInput
        disabled={props.disabled}
        error={props.error}
        extraBottom={props.extraBottom}
        extraLeft={props.extraLeft}
        extraRight={props.extraRight}
        extraTop={props.extraTop}
        hasError={props.hasError}
        onChange={props.onChange}
        placeholder={props.placeholder}
        theme={theme}
        type={props.type}
        value={props.value}
        aria-invalid={props.hasError || !!props.error}
      />
      {!!props.extraRight && <ExtraRight theme={theme}>{props.extraRight}</ExtraRight>}
    </>
  );

  return (
    <WithLabel label={props.label} hintText={props.hintText} required={props.required}>
      <Wrapper
        extraBottom={props.extraBottom}
        extraLeft={props.extraLeft}
        extraRight={props.extraRight}
        extraTop={props.extraTop}
      >
        {!!props.extraTop && <ExtraTop theme={theme}>{props.extraTop}</ExtraTop>}
        {!!props.extraRight || !!props.extraLeft ? <ExtraWrapper>{renderContent}</ExtraWrapper> : renderContent}
        {!!props.extraBottom && <ExtraBottom theme={theme}>{props.extraBottom}</ExtraBottom>}
        {!!props.error && <ErrorText theme={theme}>{props.error}</ErrorText>}
      </Wrapper>
    </WithLabel>
  );
};

export default withTheme(TextField);
