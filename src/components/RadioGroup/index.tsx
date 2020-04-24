import React, { FunctionComponent } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

import RadioInput from '../Radio';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

const StyledRadio = styled(RadioInput)`
  display: inline-block;
  float: left;
  text-align: center;
  margin-left: 20px;
  width: ${({ widthPercent }: { widthPercent: number }) => `${widthPercent}%`};
`;

const StyledLegend = styled.legend`
  display: block;
  float: left;
  max-width: 20%;
  width: ${({ widthPercent }: { widthPercent: number }) => `${widthPercent}%`};
`;

const StyledFieldSet = styled.fieldset`
  display: block;
  border: none;
`;

type RadioGroupProps = {
  legend: string;
  attributes: Array<{
    value: string;
    option: string;
  }>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: string;
  name: string;
  theme: ThemeType;
};

const RadioGroup: FunctionComponent<RadioGroupProps> = props => {
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
            checked={props.checked === item.value}
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
