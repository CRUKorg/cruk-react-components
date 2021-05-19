import React, { FunctionComponent, ReactNode, ButtonHTMLAttributes, Ref, forwardRef } from 'react';
import { withTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import Icon from 'src/components/Icon';

import { Spacer, StyledButton } from './styles';

import { ThemeType, ButtonAppearanceType } from 'src/types';

export type Props = ButtonHTMLAttributes<HTMLElement> & {
  appearance?: ButtonAppearanceType;
  full?: boolean;
  theme?: ThemeType;
  href?: string;
  size?: 'm' | 'l';
  css?: any;
  as?: any;
  ref?: Ref<HTMLElement>;
};

const Button: FunctionComponent<Props> = forwardRef((props: Props, ref?: Ref<HTMLElement>) => {
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
