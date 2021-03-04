import React, { FunctionComponent, ReactNode, ButtonHTMLAttributes, Ref, forwardRef } from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import Icon from '../Icon';

import { ThemeType } from '../../types';

const BUTTON_HEIGHT = '3rem';
const BUTTON_HEIGHT_LARGE = '4rem';

type AppearanceType = 'primary' | 'secondary' | 'tertiary' | 'text';

type ButtonProps = ButtonHTMLAttributes<HTMLElement> & {
  appearance?: AppearanceType;
  full?: boolean;
  theme?: ThemeType;
  href?: string;
  size?: 'm' | 'l';
  css?: any;
  as?: any;
  ref?: Ref<HTMLElement>;
};

type StyledButtonProps = ButtonHTMLAttributes<HTMLElement> & {
  appearance?: AppearanceType;
  full?: boolean;
  theme: ThemeType;
  size?: 'm' | 'l';
  css?: any;
  as?: any;
  isIconButton: boolean;
};

const Spacer = styled.span`
  margin-left: ${({ theme }) => theme.spacing.xxs};
  &:first-of-type {
    margin-left: 0;
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  min-height: ${BUTTON_HEIGHT};
  display: inline-block;
  vertical-align: middle;
  padding: ${({ theme, isIconButton }) =>
    isIconButton
      ? '0'
      : `calc( (${BUTTON_HEIGHT} - ( ${theme.button.buttonBorderThickness} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m}`};
  width: ${({ isIconButton }) => (isIconButton ? `${BUTTON_HEIGHT}` : 'auto')};
  min-width: ${({ isIconButton }) => (isIconButton ? `${BUTTON_HEIGHT}` : 'auto')};

  border-radius: ${props => props.theme.button.borderRadius};
  border-style: solid;
  border-width:  ${({ theme }) => theme.button.buttonBorderThickness};

  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

  cursor: pointer;
  font-size: ${({
    theme: {
      fontSizes: { m },
    },
  }) => m};
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
  text-align: center;
  text-transform: ${props => props.theme.button.textTransform};
  text-decoration: ${props => props.theme.button.textDecoration};
  
  ${(props: StyledButtonProps) =>
    props.appearance === 'primary' &&
    css`
      background-color: ${props.theme.colors.buttonPrimaryBackground};
      border-color: ${props.theme.colors.buttonPrimaryBorder};
      color: ${props.theme.colors.buttonPrimaryText} !important;
      :focus,
      :hover {
        background-color: ${props.theme.colors.buttonPrimaryBackgroundHover};
        border-color: ${props.theme.colors.buttonPrimaryBorderHover};
        color: ${props.theme.colors.buttonPrimaryTextHover} !important;
      }
      :disabled {
        cursor: not-allowed;
        background-color: ${props.theme.colors.buttonPrimaryDisabledBackground};
        color: ${props.theme.colors.buttonPrimaryDisabledText} !important;
        border-color: ${props.theme.colors.buttonPrimaryDisabledBorder};
      }
    `}

  ${(props: StyledButtonProps) =>
    props.appearance === 'secondary' &&
    css`
      background-color: ${props.theme.colors.buttonSecondaryBackground};
      border-color: ${props.theme.colors.buttonSecondaryBorder};
      color: ${props.theme.colors.buttonSecondaryText} !important;
      :focus,
      :hover {
        background-color: ${props.theme.colors.buttonSecondaryBackgroundHover};
        border-color: ${props.theme.colors.buttonSecondaryBorderHover};
        color: ${props.theme.colors.buttonSecondaryTextHover} !important;
      }
      :disabled {
        cursor: not-allowed;
        background-color: ${props.theme.colors.buttonSecondaryDisabledBackground};
        color: ${props.theme.colors.buttonSecondaryDisabledText} !important;
        border-color: ${props.theme.colors.buttonSecondaryDisabledBorder};
      }
    `}

  ${(props: StyledButtonProps) =>
    props.appearance === 'tertiary' &&
    css`
      background-color: ${props.theme.colors.buttonTertiaryBackground};
      border-color: ${props.theme.colors.buttonTertiaryBorder};
      color: ${props.theme.colors.buttonTertiaryText} !important;
      :focus,
      :hover {
        background-color: ${props.theme.colors.buttonTertiaryBackgroundHover};
        border-color: ${props.theme.colors.buttonTertiaryBorderHover};
        color: ${props.theme.colors.buttonTertiaryTextHover} !important;
      }
      :disabled {
        cursor: not-allowed;
        background-color: ${props.theme.colors.buttonTertiaryDisabledBackground};
        color: ${props.theme.colors.buttonTertiaryDisabledText} !important;
        border-color: ${props.theme.colors.buttonTertiaryDisabledBorder};
      }
    `}

  ${(props: StyledButtonProps) =>
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
      :disabled {
        cursor: not-allowed;
        background-color: transparent;
        color: ${props.theme.colors.disabled} !important;
        border-color: transparent;
      }
    `}
  
  ${(props: StyledButtonProps) =>
    props.size === 'l' &&
    css`
      min-height: ${BUTTON_HEIGHT_LARGE};
      border-radius: ${({ theme }) => theme.button.borderRadiusLarge};
      padding: ${({ theme, isIconButton }) =>
        isIconButton
          ? '0'
          : `calc( (${BUTTON_HEIGHT_LARGE} - ( ${theme.button.buttonBorderThickness} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m}`};
      min-width: ${({ isIconButton }) => (isIconButton ? `${BUTTON_HEIGHT_LARGE}` : 'auto')};
      height: ${({ isIconButton }) => (isIconButton ? `${BUTTON_HEIGHT_LARGE}` : 'auto')};
    `}

  ${(props: StyledButtonProps) =>
    props.full &&
    css`
      width: 100%;
    `}

  ${(props: StyledButtonProps) => (css as any)([props.css])}
`;

const Button: FunctionComponent<ButtonProps> = forwardRef((props: ButtonProps, ref?: Ref<HTMLElement>) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const { appearance = 'primary' } = props;
  const childArray = React.Children.toArray(props.children);

  // button has a fixed width if there is a single icon
  const isIconButton =
    // @ts-ignore typescript doesn't seem to like child.type but it works fine
    props.children && childArray.length === 1 && childArray[0] && childArray[0].type === Icon ? true : false;

  return (
    <StyledButton
      as={props.href ? 'a' : 'button'}
      {...props}
      appearance={appearance}
      isIconButton={isIconButton}
      theme={theme}
      ref={ref}
    >
      {props.children && childArray.length
        ? React.Children.map(props.children, (child: ReactNode, index: number) => (
            <Spacer theme={theme} key={index}>
              {child}
            </Spacer>
          ))
        : null}
    </StyledButton>
  );
});

export default withTheme(Button);
