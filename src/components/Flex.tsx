import styled, { css } from 'styled-components';
import { BREAKPOINT } from '../Constants';

type FlexProps = {
  css: string;
};

const Flex = styled.div<FlexProps>`
  display: block;
  @media (min-width: ${BREAKPOINT.tablet}) {
    display: flex;
  }
  ${props => (css as any)([props.css])}
`;

export default Flex;
