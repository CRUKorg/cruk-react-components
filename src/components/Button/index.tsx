import React, { FunctionComponent, ReactNode } from 'react';
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

const VerticalAlign = styled.span`
  vertical-align: middle;
`;

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.bodyBg};
  border-radius: ${props => props.theme.button.borderRadius};
  border: 1px solid ${props => props.theme.colors.buttonBorder};
  box-sizing: border-box;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-size: ${({
    theme: {
      fontSizes: { medium },
    },
  }) => medium};
  font-family: ${({
    theme: {
      typography: { fontFamilyHeadings },
    },
  }) => fontFamilyHeadings};
  font-weight: ${({
    theme: {
      typography: { fontWeightMedium },
    },
  }) => fontWeightMedium};
  line-height: 1;
  height: 2.5em;
  padding: ${({ theme }) => `0 ${theme.spacing.medium}`};

  text-align: center;
  text-decoration: ${props => props.theme.button.textDecoration};
  text-transform: ${props => props.theme.button.textTransform};
  :focus,
  :hover {
    color: ${props => props.theme.colors.linkColorHover}
  }
  
  ${(props: ButtonProps) =>
    props.appearance === 'primary' &&
    css`
      background-color: ${props.theme.colors.secondary};
      border-color: ${props.theme.colors.secondary};
      color: ${props.theme.colors.textLight} !important;
      :focus,
      :hover {
        background-color: ${props.theme.colors.secondaryHover};
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
    props.size === 'large' &&
    css`
      height: 4em;
    `}
  
  ${(props: ButtonProps) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${props.appearance === 'primary' || props.appearance === 'secondary'
        ? props.theme.colors.disabled
        : 'transparent'};
      color: ${props.appearance === 'primary' || props.appearance === 'secondary'
        ? props.theme.colors.textLight
        : props.theme.colors.disabled};
      border-color: ${props.theme.colors.disabled};

      &:focus,
      &:hover {
        background-color: ${props.appearance === 'primary' || props.appearance === 'secondary'
          ? props.theme.colors.disabled
          : 'transparent'};
        color: ${props.appearance === 'primary' || props.appearance === 'secondary'
          ? props.theme.colors.textLight
          : props.theme.colors.disabled};
        border-color: ${props.theme.colors.disabled};
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

const Button: FunctionComponent<ButtonProps> = props => {
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
      <VerticalAlign>{!iconRight && icon}</VerticalAlign>
      {React.Children.toArray(props.children).map((child: ReactNode, index: number) => (
        <VerticalAlign key={index}>{child}</VerticalAlign>
      ))}
      <VerticalAlign>{iconRight && icon}</VerticalAlign>
    </StyledButton>
  );
};

export default withTheme(Button);
