import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { COLORS, TYPOGRAPHY, FONT_SIZES, UTILITIES } from '../../Constants';
import Icon from '../Icon';

type ButtonProps = {
  appearance?: string;
  children?: any;
  iconAlign?: string;
  full?: boolean;
  theme?: {
    button: {};
    colors: {
      white: string;
      gray: string;
      primary: string;
      secondary: string;
      secondaryHover: string;
      tertiary: string;
      tertiaryHover: string;
    };
  };
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
  background-color: ${props => props.theme.colors.white};
  border-radius: ${UTILITIES.borderRadius};
  border: 2px solid ${props => props.theme.colors.gray};
  box-sizing: border-box;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-size: ${FONT_SIZES.medium};
  font-weight: ${TYPOGRAPHY.fontWeightHeavy};
  line-height: 1;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  :focus,
  :hover {
    color: ${props => props.theme.colors.secondary}
  }
  
  ${(props: ButtonProps) =>
    props.appearance === 'primary' &&
    css`
    background-color: ${props.theme.colors.secondary};
    border-color: ${props.theme.colors.secondary};
    color: ${props.theme.colors.white} !important;
    :focus,
    :hover {
      background-color: ${props.theme.colors.secondaryHover}
      border-color: ${props.theme.colors.secondaryHover};
      color: ${props.theme.colors.white} !important;
    }
  `}

  ${(props: ButtonProps) =>
    props.appearance === 'secondary' &&
    css`
      background-color: ${props.theme.colors.tertiary};
      border-color: ${props.theme.colors.tertiary};
      color: ${props.theme.colors.white};
      :focus,
      :hover {
        background-color: ${props.theme.colors.tertiaryHover};
        border-color: ${props.theme.colors.tertiaryHover};
        color: ${props.theme.colors.white};
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
      font-size: ${FONT_SIZES.small};
    `}
  
  ${(props: ButtonProps) =>
    props.size === 'large' &&
    css`
      font-size: ${FONT_SIZES.extraLarge};
    `}
  
  ${(props: ButtonProps) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${props.appearance === 'primary' || props.appearance === 'secondary'
        ? props.theme.colors.gray
        : 'transparent'};
      color: ${props.appearance === 'primary' || props.appearance === 'secondary'
        ? COLORS.white
        : props.theme.colors.gray};
      border-color: ${props.theme.colors.gray};

      &:focus,
      &:hover {
        background-color: ${props.appearance === 'primary' || props.appearance === 'secondary'
          ? props.theme.colors.gray
          : 'transparent'};
        color: ${props.appearance === 'primary' || props.appearance === 'secondary'
          ? COLORS.white
          : props.theme.colors.gray};
        border-color: ${props.theme.colors.gray};
        text-decoration: none;
      }
    `}
  ${(props: ButtonProps) =>
    props.full &&
    css`
      width: 100%;
    `}
  
  ${(props: ButtonProps) => props.theme.button}
  ${(props: ButtonProps) => (css as any)([props.css])}
`;

const Button = (props: ButtonProps) => {
  // TODO create theme spread function.
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    button: () => props.theme.button || {},
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

Button.defaultProps = {
  theme: {},
};

export default withTheme(Button);
