// @Flow

import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { COLORS, TYPOGRAPHY, UTILITIES } from '../Constants';
import { Icon } from '../index';

type ButtonProps = {
  ariaLabel: string,
  appearance: string,
  children: string,
  href: string,
  icon: string,
  iconAlign: string,
  full: boolean,
  name: string,
  theme: { button: {}, colors: {} },
};

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${UTILITIES.borderRadius};
  border: 2px solid ${props => props.theme.colors.gray};
  box-sizing: border-box;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-size: ${TYPOGRAPHY.fontSize};
  font-weight: ${TYPOGRAPHY.fontWeightHeavy};
  line-height: 1;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  :focus,
  :hover {
    color: ${props => props.theme.colors.secondary}
  }
  
  ${props => props.appearance === 'primary' && css`
    background-color: ${props.theme.colors.secondary};
    border-color: ${props.theme.colors.secondary};
    color: ${props.theme.colors.white} !important;
    :focus,
    :hover {
      background-color: ${props.theme.colors.secondaryHover};
      border-color: ${props.theme.colors.secondaryHover};
      color: ${props.theme.colors.white} !important;
    }
  `}

  ${props => props.appearance === 'secondary' && css`
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

  ${props => props.appearance === 'link' && css`
    border: 0px;
    background-color: none;
    color: ${props.theme.colors.primary};
    :focus,
    :hover {
      color: ${props.theme.colors.secondary};
      text-decoration: underline;
    }
  `}
  
  ${props => props.children[1] && css`
    svg {
      ${props.iconAlign === 'right' ? 'margin-left: 5px' : 'margin-right: 5px'};
    }
  `}
  
  ${props => props.size === 'small' && css`
    font-size: ${TYPOGRAPHY.fontSizeSmall};
  `}
  
  ${props => props.size === 'large' && css`
    font-size: ${TYPOGRAPHY.fontSizeLarge};
  `}
  
  ${props => props.disabled && css`
    cursor: not-allowed;    
    background-color: ${props.appearance === 'primary' || props.appearance === 'secondary' ?
    props.theme.colors.gray : 'transparent'};
    color: ${props.appearance === 'primary' || props.appearance === 'secondary' ?
    COLORS.white : props.theme.colors.gray};
    border-color: ${props.theme.colors.gray};
    
    &:focus,
    &:hover {
    background-color: ${props.appearance === 'primary' || props.appearance === 'secondary' ?
    props.theme.colors.gray : 'transparent'};
    color: ${props.appearance === 'primary' || props.appearance === 'secondary' ?
    COLORS.white : props.theme.colors.gray};
    border-color: ${props.theme.colors.gray};
    text-decoration: none;
    }
  `}
  ${props => props.full && css`
    width: 100%;
  `}
  
  ${props => props.theme.button}
  ${props => css([props.css])}
`;

const Button = (props: ButtonProps) => {
  // TODO create theme spread function.
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    button: () => (props.theme.button || {}),
  };
  const icon = (props.icon && <Icon name={props.icon} />);
  const iconRight = props.iconAlign === 'right';
  const camelToLowerCase = string => string && string.replace(/([a-z])([A-Z][a-z])/g, '$1 $2').toLowerCase();
  const ariaLabel = () => {
    if (props.ariaLabel) return props.ariaLabel;
    return (React.Children.toArray(props.children).find(child => typeof child === 'string')) || camelToLowerCase(props.icon);
  };

  return (
    <StyledButton {...props} as={props.href && 'a'} aria-label={ariaLabel()} theme={theme}>
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
