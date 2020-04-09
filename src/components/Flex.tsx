import styled, { css } from 'styled-components';
import defaultTheme from './../themes/cruk';

import spacing, { SpacingProps } from './Spacing';

type FlexProps = SpacingProps & {
  css: string;
};

const Flex = styled.div<FlexProps>`
  display: block;
  @media (min-width: ${defaultTheme.breakpoint.tablet}) {
    display: flex;
  }
  ${props => (css as any)([props.css])}
  ${props => spacing(props)}
`;

export default Flex;
