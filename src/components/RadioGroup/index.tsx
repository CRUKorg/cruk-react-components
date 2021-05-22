import React, { FunctionComponent } from 'react';
import styled, { useTheme, ThemeProvider } from 'styled-components';

import RadioInput from 'src/components/Radio';
import defaultTheme from 'src/themes/cruk';

import { ThemeType } from 'src/types';

const LEGEND_WIDTH = '20%';

const StyledRadio = styled(RadioInput)`
  display: block;
  float: left;
  text-align: center;
  margin-left: ${({ theme }) => theme.spacing.s};
  width: ${({ numberOfAttributes, theme }: { numberOfAttributes: number; theme: ThemeType }) =>
    `calc(((100% - ${LEGEND_WIDTH}) / ${numberOfAttributes}) - ${theme.spacing.s})`};
`;

const StyledLegend = styled.legend`
  width: ${LEGEND_WIDTH};
  display: block;
  float: left;
`;

const StyledFieldSet = styled.fieldset`
  display: block;
  position: relative;
  border: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
  width: 100%;
`;

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
