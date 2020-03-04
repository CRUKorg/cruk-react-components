import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import BaseText, { BaseTextProps } from '../BaseText';

export const TextStyled = styled.p`
  ${(props: BaseTextProps) => BaseText(props)}
`;

export const Text: FunctionComponent<BaseTextProps> = props => <TextStyled {...props} />;

export default Text;
