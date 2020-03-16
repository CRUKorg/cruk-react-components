import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';
import Icon from '../Icon';
import { ThemeType } from '../../themes/types';

type ButtonProps = {
  appearance?: string;
  children?: any;
  iconAlign?: string;
  full?: boolean;
  theme?: ThemeType;
  ariaLabel?: string;
  href?: string;
  icon?: string;
  name?: string;
  css?: any;
  size?: string;
  disabled?: boolean;
  as?: any;
};

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.bodyBg};
  border-radius: ${props => props.theme.button.borderRadius};
  border: 2px solid ${props => props.theme.colors.buttonBorder};
  box-sizing: border-box;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-size: ${({
    theme: {
      fontSizes: { medium },
    },
  }) => medium};
  font-weight: ${({
    theme: {
      typography: { fontWeightHeavy },
    },
  }) => fontWeightHeavy};
  line-height: 1;
  padding: 10px;
  text-align: center;
  text-decoration: ${props => props.theme.button.textDecoration};
  text-transform: ${props => props.theme.button.textTransform};
  :focus,
  :hover {
    color: ${props => props.theme.colors.secondary}
  }
  
  ${(props: ButtonProps) =>
    props.appearance === 'primary' &&
    css`
    background-color: ${props.theme.colors.secondary};
    border-color: ${props.theme.colors.secondary};
    color: ${props.theme.colors.textLight} !important;
    :focus,
    :hover {
      background-color: ${props.theme.colors.secondaryHover}
      border-color: ${props.theme.colors.secondaryHover};
      color: ${props.theme.colors.textLight} !important;
    }
  `}

  ${(props: ButtonProps) =>
    props.appearance === 'secondary' &&
    css`
      background-color: ${props.theme.colors.tertiary};
      border-color: ${props.theme.colors.tertiary};
      color: ${props.theme.colors.textLight};
      :focus,
      :hover {
        background-color: ${props.theme.colors.tertiaryHover};
        border-color: ${props.theme.colors.tertiaryHover};
        color: ${props.theme.colors.textLight};
      }
    `}

  ${(props: ButtonProps) =>
    props.appearance === 'link' &&
    css`
      border: 0px;
      background-color: none;
      color: ${props.theme.colors.primary};
      :focus,
      :hover {
        color: ${props.theme.colors.secondary};
        text-decoration: underline;
      }
    `}
  
  ${(props: ButtonProps) =>
    props.children[1] &&
    css`
      svg {
        ${props.iconAlign === 'right' ? 'margin-left: 5px' : 'margin-right: 5px'};
      }
    `}
  
  ${(props: ButtonProps) =>
    props.size === 'small' &&
    css`
      font-size: ${({
        theme: {
          fontSizes: { small },
        },
      }) => small};
    `}
  
  ${(props: ButtonProps) =>
    props.size === 'large' &&
    css`
      font-size: ${({
        theme: {
          fontSizes: { extraLarge },
        },
      }) => extraLarge};
    `}
  
  ${(props: ButtonProps) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${props.appearance === 'primary' || props.appearance === 'secondary'
        ? props.theme.colors.buttonDisabled
        : 'transparent'};
      color: ${props.appearance === 'primary' || props.appearance === 'secondary'
        ? props.theme.colors.textLight
        : props.theme.colors.buttonDisabled};
      border-color: ${props.theme.colors.buttonDisabled};

      &:focus,
      &:hover {
        background-color: ${props.appearance === 'primary' || props.appearance === 'secondary'
          ? props.theme.colors.buttonDisabled
          : 'transparent'};
        color: ${props.appearance === 'primary' || props.appearance === 'secondary'
          ? props.theme.colors.textLight
          : props.theme.colors.buttonDisabled};
        border-color: ${props.theme.colors.buttonDisabled};
        text-decoration: none;
      }
    `}
  ${(props: ButtonProps) =>
    props.full &&
    css`
      width: 100%;
    `}
  ${(props: ButtonProps) => (css as any)([props.css])}
`;

const Button = (props: ButtonProps) => {
  // TODO create theme spread function.
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const icon = props.icon && <Icon name={props.icon} />;
  const iconRight = props.iconAlign === 'right';
  const camelToLowerCase = (string: string) => string && string.replace(/([a-z])([A-Z][a-z])/g, '$1 $2').toLowerCase();
  const ariaLabel = () => {
    if (props.ariaLabel) return props.ariaLabel;
    return (
      React.Children.toArray(props.children).find(child => typeof child === 'string') || camelToLowerCase(props.icon)
    );
  };

  return (
    <StyledButton {...props} aria-label={ariaLabel()} theme={theme}>
      {!iconRight && icon}
      {props.children}
      {iconRight && icon}
    </StyledButton>
  );
};

export default withTheme(Button);
