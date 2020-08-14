import React, { FunctionComponent, ReactNode, ButtonHTMLAttributes, Ref, forwardRef } from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import Icon from '../Icon';

import { ThemeType } from '../../themes/types';

const BUTTON_HEIGHT = '2.5rem';

type ButtonProps = ButtonHTMLAttributes<{}> & {
  appearance?: string;
  full?: boolean;
  theme?: ThemeType;
  href?: string;
  size?: string;
  css?: any;
  as?: any;
  ref?: Ref<HTMLElement>;
};

const VerticalAlign = styled.span`
  line-height: ${({ isIconButton }: { isIconButton: boolean }) => (isIconButton ? `auto` : `${BUTTON_HEIGHT}`)};
  vertical-align: middle;
  margin-left: ${({ theme }) => theme.spacing.extraExtraSmall};

  &:first-of-type {
    margin-left: 0;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  background-color: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.button.borderRadius};
  border: 1px solid ${props => props.theme.colors.buttonBorder};
  box-sizing: border-box;
  color: ${props => props.theme.colors.primary};
  transition: color 0.2s ease, background-color 0.2s ease, border 0.2s ease;
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
  padding: ${({ theme, isIconButton }: { theme: ThemeType; isIconButton: boolean }) =>
    isIconButton ? '0' : `0 ${theme.spacing.medium}`};
  width: ${({ isIconButton }: { isIconButton: boolean }) => (isIconButton ? `${BUTTON_HEIGHT}` : 'auto')};
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
      padding: 0;
      border: 0px;
      background-color: rgba(255, 255, 255, 0);
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
`;

const Button: FunctionComponent<ButtonProps> = forwardRef((props: ButtonProps, ref?: Ref<HTMLElement>) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const childArray = React.Children.toArray(props.children);

  // button has a fixed width if there is a single icon
  // @ts-ignore typescript doesn't seem to like child.type but it works fine
  const isIconButton = props.children && childArray.length === 1 && childArray[0] && childArray[0].type === Icon;

  return (
    <StyledButton as={props.href ? 'a' : 'button'} {...props} isIconButton={isIconButton} theme={theme} ref={ref}>
      {props.children && childArray.length
        ? React.Children.map(props.children, (child: ReactNode, index: number) => (
            <VerticalAlign theme={theme} key={index} isIconButton={isIconButton}>
              {child}
            </VerticalAlign>
          ))
        : null}
    </StyledButton>
  );
});

export default withTheme(Button);
