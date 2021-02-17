import React, { FunctionComponent } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

import RadioInput from '../Radio';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../types';

const StyledRadio = styled(RadioInput)`
  display: block;
  float: left;
  text-align: center;
  margin-left: ${({ theme }) => theme.spacing.s};
  width: ${({ widthPercent, theme }: { widthPercent: number; theme: ThemeType }) =>
    `calc(${widthPercent}% - ${theme.spacing.s})`};
`;

const StyledLegend = styled.legend`
  display: block;
  float: left;
  width: ${({ widthPercent }: { widthPercent: number }) => `${widthPercent}%`};
`;

const StyledFieldSet = styled.fieldset`
  display: block;
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
  theme: ThemeType;
};

const RadioGroup: FunctionComponent<RadioGroupProps> = ({ selectedValue = '', ...props }) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  const numberOfAttributes = props.attributes.length;
  const percentage = 100 / (numberOfAttributes + 1);

  return (
    <ThemeProvider theme={theme}>
      <StyledFieldSet>
        <StyledLegend widthPercent={percentage}>{props.legend}</StyledLegend>
        {props.attributes.map(item => (
          <StyledRadio
            widthPercent={percentage}
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

export default withTheme(RadioGroup);
