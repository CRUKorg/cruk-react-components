import styled from "styled-components";
import spacing, { type SpacingProps } from "./Spacing";
import { type ThemeType } from "../types";

type ThemeProps = {
  theme: ThemeType;
};

export const Flex = styled.div<SpacingProps>`
  display: block;
  @media (min-width: ${({ theme }: ThemeProps) => theme.breakpoint.tablet}) {
    display: flex;
  }
  ${(props) => spacing(props, props.theme as ThemeType)}
`;

export default Flex;
