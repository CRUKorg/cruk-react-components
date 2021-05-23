import React, { FunctionComponent } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { StyledFieldSet, StyledLegend, StyledRadio } from './styles';

type RadioGroupProps = {
  legend: string;
  attributes: Array<{
    value: string;
    option: string;
  }>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  selectedValue?: string;
  name: string;
};

const RadioGroup: FunctionComponent<RadioGroupProps> = ({ selectedValue = '', ...props }) => {
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
        {props.attributes.map(item => (
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
