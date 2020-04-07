import React, { FunctionComponent } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

import RadioInput from '../Radio';
import defaultTheme from '../../themes/cruk';
import spacing, { SpacingProps } from '../Spacing';

import { ThemeType } from '../../themes/types';

const StyledRadio = styled(RadioInput)`
  flex: 2 2 auto;
  text-align: center;
  margin-left: 20px;
`;

const StyledLegend = styled.legend`
  flex: 1 1 auto;
  max-width: 20%;
`;

const StyledFieldSet = styled.fieldset<SpacingProps>`
  border: none;
  ${props => spacing(props)}
`;

const RadioGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
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

  return (
    <ThemeProvider theme={theme}>
      <StyledFieldSet>
        <RadioGroupWrapper>
          <StyledLegend>{props.legend}</StyledLegend>
          {props.attributes.map((item, index) => (
            <StyledRadio
              key={index}
              checked={props.checked === item.value}
              onChange={props.onChange}
              name={props.name}
              value={item.value}
            >
              {item.option}
            </StyledRadio>
          ))}
        </RadioGroupWrapper>
      </StyledFieldSet>
    </ThemeProvider>
  );
};

export default withTheme(RadioGroup);
