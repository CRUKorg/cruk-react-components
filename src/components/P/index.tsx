import styled from 'styled-components';
import BaseText, { BaseTextProps } from '../BaseText';

export const Paragraph = styled.p`
  ${(props: BaseTextProps) => BaseText(props)}
`;

export default Paragraph;
