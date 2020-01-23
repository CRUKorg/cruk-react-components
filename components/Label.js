// @Flow

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
`

export const WithLabel = ({ children, label, required }) => (
  label
    ? (
      <Label>
        {label} {!required && <span>(optional)</span>}
        {children}
      </Label>)
    : <React.Fragment>{children}</React.Fragment>
);

export default Label;
 