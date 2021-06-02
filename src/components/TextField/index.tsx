import React, { FunctionComponent, InputHTMLAttributes, ReactElement, Ref, forwardRef } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ErrorText from 'src/components/ErrorText';
import LabelWrapper from 'src/components/LabelWrapper';

import { ExtraLeft, ExtraRight, ExtraTop, ExtraBottom, ExtraWrapper, StyledInput } from './styles';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  extraBottom?: ReactElement | string;
  extraLeft?: ReactElement | string;
  extraRight?: ReactElement | string;
  extraTop?: ReactElement | string;
  hasError?: boolean;
  isValid?: boolean;
  hintText?: ReactElement | string;
  isValidVisible?: boolean;
  isInvalidVisible?: boolean;
  label: string;
  ref?: Ref<HTMLInputElement>;
};

const TextField: FunctionComponent<TextFieldProps> = forwardRef(
  (
    {
      errorMessage,
      extraBottom,
      extraLeft,
      extraRight,
      extraTop,
      hasError,
      hintText,
      isValid,
      isValidVisible,
      isInvalidVisible,
      label,
      ...props
    }: TextFieldProps,
    ref?: Ref<HTMLInputElement>,
  ) => {
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    const renderContent = (
      <>
        {!!extraLeft && <ExtraLeft theme={theme}>{extraLeft}</ExtraLeft>}
        <StyledInput
          hasError={hasError || !!errorMessage || false}
          isValid={typeof isValid !== 'undefined' ? isValid : !hasError && !errorMessage}
          aria-invalid={hasError || !!errorMessage || false}
          isValidVisible={isValidVisible || false}
          isInvalidVisible={isInvalidVisible || false}
          extraBottom={extraBottom}
          extraLeft={extraLeft}
          extraRight={extraRight}
          extraTop={extraTop}
          {...props}
          theme={theme}
          ref={ref}
        />
        {!!extraRight && <ExtraRight theme={theme}>{extraRight}</ExtraRight>}
      </>
    );

    return (
      <LabelWrapper label={label} hintText={hintText} required={props.required || false}>
        {!!extraTop && <ExtraTop theme={theme}>{extraTop}</ExtraTop>}
        {!!extraRight || !!extraLeft ? <ExtraWrapper>{renderContent}</ExtraWrapper> : renderContent}
        {!!extraBottom && <ExtraBottom theme={theme}>{extraBottom}</ExtraBottom>}
        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </LabelWrapper>
    );
  },
);

export default TextField;
