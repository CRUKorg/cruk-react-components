import React, { FunctionComponent } from "react";
import { useTheme, ThemeProvider } from "styled-components";

import defaultTheme from "src/themes/cruk";

import { StyledFieldSet, StyledLegend, StyledRadio } from "./styles";

export type RadioGroupProps = {
  /** because each radio has its own label this is the group label text */
  legend: string;
  /** array of option for radio group where option is the option name and value is the option value  */
  attributes: Array<{
    value: string;
    option: string;
  }>;
  /** on change handler callback passed change event */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** set the value of selected option */
  selectedValue?: string;
  /** name of field this is what groups all the options together */
  name: string;
};

/**
 *
 * Radio group is a component for showing a bunch of yes/no radios predominantly used for notification selections where a unselected state is usefull for analytics.
 *
 * This is always a controlled component that will only change state with the selectedValue prop
 */
const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  selectedValue = "",
  ...props
}) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const numberOfAttributes = props.attributes.length;

  return (
    <ThemeProvider theme={theme}>
      <StyledFieldSet>
        <StyledLegend>{props.legend}</StyledLegend>
        {props.attributes.map((item) => (
          <StyledRadio
            numberOfAttributes={numberOfAttributes}
            key={item.value}
            checked={selectedValue === item.value}
            onChange={props.onChange}
            name={props.name}
            value={item.value}
          >
            {item.option}
          </StyledRadio>
        ))}
      </StyledFieldSet>
    </ThemeProvider>
  );
};

export default RadioGroup;
