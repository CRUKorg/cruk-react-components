// @Flow

import React from 'react';
import styled, { css, withTheme } from 'styled-components';

import { COLORS, TYPOGRAPHY, UTILITIES } from '../Constants';
import { ErrorText } from '../';
import { WithLabel } from '../Label';

const Extra = styled.div`
  background-color: ${props => props.theme.colors.grayLight};
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px ${props => props.theme.colors.grayLight};
  color: ${props => props.theme.colors.grayDarker};
  font-size: ${props => props.theme.typography.fontSize};
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
  border: solid 2px ${props => props.theme.colors.gray};
  border-left: 0;
  background-color: transparent;
  padding: 0;
`;

const ExtraWrapper = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  background-color: ${props => props.theme.colors.white};
  background-image: none;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px ${props =>
    props.hasError || props.error ? props.theme.colors.textError : props.theme.colors.gray};
  color: ${props => props.theme.colors.grayDarker};
  display: block;
  font-size: ${props => props.theme.typography.fontSize};
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

const Wrapper = props => (
  (!props.extraTop && !props.extraBottom && !props.extraRight && !props.extraLeft)
    ? props.children
    : <div>{props.children}</div>
);

type TextFieldProps = {
  error: String,
  extraBottom: String,
  extraLeft: String,
  extraRight: String,
  extraTop: String,
  hasError: Boolean,
  onChange: Function,
  placeholder: String,
  theme?: { colors: {}, typography: {}, utilities: {} },
  type: 'text' | 'number' | 'email' | 'password',
  value: String,
};

const TextField = (props: TextFieldProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    typography: {
      ...TYPOGRAPHY,
      ...props.theme.typography,
    },
    utilities: {
      ...UTILITIES,
      ...props.theme.utilities,
    },
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
  theme: {},
  type: 'text',
};

export default withTheme(TextField);
