import React, { FunctionComponent, InputHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ErrorText from 'src/components/ErrorText';
import LabelWrapper from 'src/components/LabelWrapper';

import { ExtraLeft, ExtraRight, ExtraTop, ExtraBottom, ExtraWrapper, StyledInput } from './styles';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** error message text  */
  errorMessage?: string;
  /** custom component/text that appears underneath the input field */
  extraBottom?: ReactNode;
  /** custom component/text that appears to the left of the input field for example prefixes like "£" */
  extraLeft?: ReactNode;
  /** custom component/text that appears to the right of the input field for example a search button */
  extraRight?: ReactNode;
  /** custom component/text that appears above the input field for example a url domain */
  extraTop?: ReactNode;
  /** flag for error styling */
  hasError?: boolean;
  /** flag which controls the whether a cross icon or check icon is displayed to the right of the input field */
  isValid?: boolean;
  /** flag to hide or show the check icon when valid */
  isValidVisible?: boolean;
  /** flag to hide or show the cross icon when invalid */
  isInvalidVisible?: boolean;
  /** hint text */
  hintText?: ReactNode;
  /** label text */
  label: string;
  /** flag to stop (required) appearing in label, useful for compound form components like DateInput */
  hideRequiredInLabel?: boolean;
  /** react reference to the DOM element sometime used to scroll to or set focus after an error */
  ref?: Ref<HTMLInputElement>;
};

/**
 * TextFields let users enter and edit text. For multiline text entry please consider using the TextAreaFieldComponent.
 * */
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
      hideRequiredInLabel,
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
      <LabelWrapper
        label={label}
        hintText={hintText}
        required={props.required || false}
        hideRequiredInLabel={hideRequiredInLabel}
      >
        {!!extraTop && <ExtraTop theme={theme}>{extraTop}</ExtraTop>}
        {!!extraRight || !!extraLeft ? <ExtraWrapper>{renderContent}</ExtraWrapper> : renderContent}
        {!!extraBottom && <ExtraBottom theme={theme}>{extraBottom}</ExtraBottom>}
        {!!errorMessage && <ErrorText marginTop="xxs">{errorMessage}</ErrorText>}
      </LabelWrapper>
    );
  },
);

export default TextField;
