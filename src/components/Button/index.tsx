import React, { FunctionComponent, ReactNode } from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';
import Icon from '../Icon';
import { ThemeType } from '../../themes/types';

const BUTTON_HEIGHT = '2.5rem';

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
  line-height: ${BUTTON_HEIGHT};
  vertical-align: middle;
`;

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  background-color: ${props => props.theme.colors.bodyBg};
  border-radius: ${props => props.theme.button.borderRadius};
  border: 1px solid ${props => props.theme.colors.buttonBorder};
  box-sizing: border-box;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
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
  height: ${BUTTON_HEIGHT};
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
    props.appearance === 'text' &&
    css`
      display: inline-block;
      border: 0px;
      background-color: none;
      transition: color 0.2s ease;
      color: ${props.theme.colors.primary};
      font-family: ${({
        theme: {
          typography: { fontFamilyBase },
        },
      }) => fontFamilyBase};
      :focus,
      :hover {
        color: ${props.theme.colors.linkColorHover};
      }
    `}
  
  ${(props: ButtonProps) =>
    // only add margin on icons if there is more than one child
    props.children[1] &&
    props.children.length > 1 &&
    css`
      svg {
        ${({
          theme: {
            spacing: { extraExtraSmall },
          },
        }) => (props.iconAlign === 'right' ? `margin-left: ${extraExtraSmall}` : `margin-right: ${extraExtraSmall}`)};
      }
    `}

  ${(props: ButtonProps) => {
    // If we only have an icon and no text make it a square/round button
    return (
      props.children[1] === null &&
      props.children[0].type !== 'undefined' &&
      props.children[0].type.displayName === 'WithTheme(Icon)' &&
      css`
        padding: 0;
        width: ${BUTTON_HEIGHT};
      `
    );
  }};
  
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
    <StyledButton as={props.href ? 'a' : 'button'} {...props} aria-label={ariaLabel()} theme={theme}>
      {!iconRight && !!icon && icon}
      {props.children && props.children.length
        ? React.Children.toArray(props.children).map((child: ReactNode, index: number) => (
            <VerticalAlign key={index}>{child}</VerticalAlign>
          ))
        : null}
      {iconRight && !!icon && icon}
    </StyledButton>
  );
};

export default withTheme(Button);
