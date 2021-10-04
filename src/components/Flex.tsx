import styled, { css } from 'styled-components';
import spacing, { SpacingProps } from 'src/components/Spacing';

type FlexProps = SpacingProps & {
  css: string;
};

const Flex = styled.div<FlexProps>`
  display: block;
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
  }
  ${(props) => (css as any)([props.css])}
  ${(props) => spacing(props, props.theme)}
`;

export default Flex;
