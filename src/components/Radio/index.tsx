import React from 'react';
import styled from 'styled-components';
import RadioInput from './RadioInput';

const StyledRadio = styled(RadioInput)`
  flex: 2 2 auto;
  text-align: center;
  margin-left: 20px;
`;

const StyledLegend = styled.legend`
  flex: 1 1 auto;
  max-width: 20%;
`;

const StyledFieldSet = styled.fieldset`
  border: none;
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
};

const RadioGroup = (props: RadioGroupProps) => {
  return (
    <StyledFieldSet>
      <RadioGroupWrapper>
        <StyledLegend>{props.legend}</StyledLegend>
        {props.attributes.map(item => (
          <StyledRadio
            key={props.name}
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
  );
};

export default RadioGroup;
