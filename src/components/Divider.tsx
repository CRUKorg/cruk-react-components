import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
  width: 100%;
  :before,
  :after {
    background-color: #333;
    content: '';
    display: inline-block;
    flex-grow: 1;
    height: 1px;
  }
`;

export const Divider: FunctionComponent = props => <StyledDivider>{props.children}</StyledDivider>;

export default Divider;
