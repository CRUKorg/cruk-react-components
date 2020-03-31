import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-weight: bold;
  width: 100%;
  & > * {
    margin-top: 5px;
    font-weight: normal;
  }
`;

const StyledSpan = styled.span`
  margin: 10px 0px;
  display: block;
`;

type WithLabelProps = {
  label: string;
  hintText?: string;
  required?: boolean;
};

export const WithLabel: FunctionComponent<WithLabelProps> = ({ label, hintText, required, children }) =>
  label ? (
    <Label>
      {label} {!required && <span>(optional)</span>}
      {hintText && <StyledSpan>{hintText}</StyledSpan>}
      {children}
    </Label>
  ) : (
    <>{children}</>
  );

WithLabel.defaultProps = {
  hintText: '',
  required: false,
};

export default Label;
