import React from 'react';
import styled from 'styled-components';
import Radio from './Radio';

const StyledRadio = styled(Radio)`
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

const RadioGroup = (props) => {

  return (
    <StyledFieldSet>
      <RadioGroupWrapper>
        <StyledLegend>{props.legend}</StyledLegend>
        {props.attributes.map((item, index) =>
          <StyledRadio key={index}
            checked={props.checked === item.value}
            onChange={props.onChange}
            name={props.name}
            value={item.value}
          >
            {item.option}
          </StyledRadio>
        )}
      </RadioGroupWrapper>
    </StyledFieldSet>
  );
};

export default RadioGroup;
