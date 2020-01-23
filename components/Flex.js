import styled, { css } from 'styled-components';
import { BREAKPOINT } from './Constants';

const Flex = styled.div`
  display: block;
  @media (min-width: ${BREAKPOINT.tablet}) {
    display: flex;
  }
  ${props => css([props.css])}
`;

export default Flex;
