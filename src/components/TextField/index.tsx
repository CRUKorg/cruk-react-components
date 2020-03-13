import React from 'react';
import styled, { css, withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import ErrorText from '../ErrorText';
import { WithLabel } from '../Label';

import { ThemeType } from '../../themes/types';

const Extra = styled.div`
  background-color: ${props => props.theme.colors.textInputBorder};
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px ${props => props.theme.colors.textInputBorder};
  color: ${props => props.theme.colors.textDark};
  font-size: ${props => props.theme.typography.medium};
  font-weight: ${props => props.theme.typography.fontWeightLight};
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
  border: solid 2px ${props => props.theme.colors.inputBorder};
  border-left: 0;
  background-color: transparent;
  padding: 0;
`;

const ExtraWrapper = styled.div`
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
  background-color: ${props => props.theme.colors.bodyBg};
  background-image: none;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px ${props =>
    props.hasError || props.error ? props.theme.colors.textError : props.theme.colors.inputBorder};
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
  children: any;
};

const Wrapper = (props: WrapperProps) =>
  !props.extraTop && !props.extraBottom && !props.extraRight && !props.extraLeft ? (
    props.children
  ) : (
    <div>{props.children}</div>
  );

type TextFieldProps = {
  error: string;
  extraBottom: string;
  extraLeft: string;
  extraRight: string;
  extraTop: string;
  hasError: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  theme?: ThemeType;
  type: 'text' | 'number' | 'email' | 'password';
  value: string;
  label: string;
  hintText: string;
  required: boolean;
};

const TextField = (props: TextFieldProps) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  const renderContent = (
    <React.Fragment>
      {!!props.extraLeft && <ExtraLeft theme={theme}>{props.extraLeft}</ExtraLeft>}
      <StyledInput {...props} theme={theme} aria-invalid={props.hasError || !!props.error} />
      {!!props.extraRight && <ExtraRight theme={theme}>{props.extraRight}</ExtraRight>}
    </React.Fragment>
  );

  return (
    <WithLabel {...props}>
      <Wrapper {...props}>
        {!!props.extraTop && <ExtraTop theme={theme}>{props.extraTop}</ExtraTop>}
        {!!props.extraRight || !!props.extraLeft ? <ExtraWrapper>{renderContent}</ExtraWrapper> : renderContent}
        {!!props.extraBottom && <ExtraBottom theme={theme}>{props.extraBottom}</ExtraBottom>}
        {!!props.error && <ErrorText>{props.error}</ErrorText>}
      </Wrapper>
    </WithLabel>
  );
};

TextField.defaultProps = {
  type: 'text',
};

export default withTheme(TextField);
