import React, { FunctionComponent, ReactElement, TextareaHTMLAttributes, Ref, forwardRef } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ErrorText from 'src/components/ErrorText';
import LabelWrapper from 'src/components/LabelWrapper';

import { StyledTextArea } from './styles';

export type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorMessage?: string;
  hasError?: boolean;
  hintText?: ReactElement | string;
  label: string;
  resize?: 'both' | 'vertical' | 'horizontal' | 'none';
  lineCount?: number;
  ref?: Ref<HTMLTextAreaElement>;
};

/**
 * TextAreaField lets users enter and edit text over multiple lines.
 */
const TextField: FunctionComponent<TextAreaFieldProps> = forwardRef(
  (
    { errorMessage, hasError, hintText, label, resize = 'vertical', lineCount = 3, ...props }: TextAreaFieldProps,
    ref?: Ref<HTMLTextAreaElement>,
  ) => {
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    return (
      <LabelWrapper label={label} hintText={hintText} required={props.required || false}>
        <StyledTextArea
          {...props}
          aria-invalid={hasError || !!errorMessage || false}
          hasError={hasError || !!errorMessage || false}
          resize={resize}
          lineCount={lineCount}
          theme={theme}
          ref={ref}
        />
        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </LabelWrapper>
    );
  },
);

TextField.defaultProps = {
  lineCount: 3,
  resize: 'vertical',
};

export default TextField;
