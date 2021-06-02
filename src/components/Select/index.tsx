import React, { FunctionComponent, ReactElement, SelectHTMLAttributes, Ref, forwardRef } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ErrorText from 'src/components/ErrorText';
import LabelWrapper from 'src/components/LabelWrapper';

import { StyledSelect } from './styles';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  errorMessage?: string;
  hasError?: boolean;
  label: string;
  hintText?: ReactElement | string;
  ref?: Ref<HTMLSelectElement>;
};

/**
 * Select components are used for collecting user provided information from a list of options.
 */
const Select: FunctionComponent<SelectProps> = forwardRef(
  ({ errorMessage, hasError, required, label, hintText, ...props }: SelectProps, ref?: Ref<HTMLSelectElement>) => {
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    return (
      <LabelWrapper label={label} hintText={hintText} required={required || false}>
        <StyledSelect
          {...props}
          ref={ref}
          theme={theme}
          required={required}
          aria-invalid={hasError || !!errorMessage || false}
          hasError={hasError || !!errorMessage || false}
        />
        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </LabelWrapper>
    );
  },
);

export default Select;
