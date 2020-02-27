import styled from 'styled-components';
import BaseText, { BaseTextProps } from '../BaseText';

export const Span = styled.span`
  ${(props: BaseTextProps) => BaseText(props)}
`;

export default Span;
