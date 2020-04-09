import React, { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import spacing, { SpacingProps } from '../Spacing';
import { ThemeType } from '../../themes/types';

const BUTTON_HEIGHT = '2.5rem';

type ButtonProps = ButtonHTMLAttributes<{}> &
  SpacingProps & {
    appearance?: string;
    full?: boolean;
    theme?: ThemeType;
    href?: string;
    size?: string;
    css?: any;
    as?: any;
  };

const VerticalAlign = styled.span`
  line-height: ${BUTTON_HEIGHT};
  vertical-align: middle;
  margin-left: ${({
    theme: {
      spacing: { extraSmall },
    },
  }) => extraSmall};

  &:first-of-type {
    margin-left: 0;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  background-color: ${props => props.theme.colors.lightBackground};
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
  padding: ${({ theme, iconButton }: { theme: ThemeType; iconButton: boolean }) =>
    iconButton ? '0' : `0 ${theme.spacing.medium}`};
  width: ${({ iconButton }: { iconButton: boolean }) => (iconButton ? `${BUTTON_HEIGHT}` : 'auto')};
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
      }
    `}

  ${(props: ButtonProps) =>
    props.full &&
    css`
      width: 100%;
    `}

  ${(props: ButtonProps) => (css as any)([props.css])}
  ${props => spacing(props)}
`;

const Button: FunctionComponent<ButtonProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const childArray = React.Children.toArray(props.children);

  // TODO: find a better way to check if a child is a specific component
  const isIcon = (child: any) =>
    typeof child !== 'string' &&
    typeof child !== 'number' &&
    child.type !== 'undefined' &&
    child.type.displayName !== undefined &&
    child.type.displayName === 'WithTheme(Icon)';
  // button has a fixed width if there is a single icon
  const isIconButton = props.children && childArray.length === 1 && isIcon(childArray[0]);

  console.log(props);
  return (
    <StyledButton as={props.href ? 'a' : 'button'} {...props} iconButton={isIconButton} theme={theme}>
      {props.children && childArray.length
        ? childArray.map((child: ReactNode, index: number) => (
            <VerticalAlign theme={theme} key={index}>
              {child}
            </VerticalAlign>
          ))
        : null}
    </StyledButton>
  );
};

export default withTheme(Button);
