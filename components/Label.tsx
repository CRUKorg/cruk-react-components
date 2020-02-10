import React from 'react';
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
  hintText: string;
  required: boolean;
  children: any;
};

export const WithLabel = ({ children, label, hintText, required }: WithLabelProps) =>
  label ? (
    <Label>
      {label} {!required && <span>(optional)</span>}
      <StyledSpan>{hintText}</StyledSpan>
      {children}
    </Label>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

export default Label;
