import styled from "styled-components";
import spacing, { type SpacingProps } from "./Spacing";
import { type ThemeType } from "../types";

type Props = SpacingProps & {
  theme: ThemeType;
};

export const Flex = styled.div<Props>`
  display: block;
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
  }
  ${(props) => spacing(props, props.theme as ThemeType)}
`;

export default Flex;
