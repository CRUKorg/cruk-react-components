import React from "react";
import { useTheme, ThemeProvider } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";
import StyledRadio from "../Radio";
import { StyledFieldSet, StyledLegend, OptionWrapper } from "./styles";

type Attribute = {
  value: string;
  option: string;
};

export type RadioConsentProps = {
  /** because each radio has its own label this is the consent group label text */
  legend: string;
  /** array of option for radio constent group where option is the option name and value is the option value  */
  attributes: Attribute[];
  /** on change handler callback passed change event */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** set the value of selected option */
  selectedValue?: string;
  /** name of field this is what groups all the options together */
  name: string;
};

/**
 *
 * RadioConsent is a component for showing a bunch of yes/no radios predominantly used for notification selections where a unselected state is usefull for analytics.
 *
 * This is always a controlled component that will only change state with the selectedValue prop
 */
export function RadioConsent(props: RadioConsentProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const { legend, attributes, onChange, selectedValue = "", name } = props;

  return (
    <ThemeProvider theme={theme}>
      <StyledFieldSet>
        <StyledLegend>{legend}</StyledLegend>
        <OptionWrapper>
          {attributes.map((item: Attribute) => (
            <StyledRadio
              key={item.value}
              checked={selectedValue === item.value}
              onChange={onChange}
              name={name}
              value={item.value}
            >
              {item.option}
            </StyledRadio>
          ))}
        </OptionWrapper>
      </StyledFieldSet>
    </ThemeProvider>
  );
}

export default RadioConsent;
