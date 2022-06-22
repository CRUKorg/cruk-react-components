import styled from "styled-components";
import spacing, { SpacingProps } from "./Spacing";
import { ThemeType } from "../types";

type ThemeProps = {
  theme: ThemeType;
};

const Flex = styled.div<SpacingProps>`
  display: block;
  @media (min-width: ${({ theme }: ThemeProps) => theme.breakpoint.tablet}) {
    display: flex;
  }
  ${(props) => spacing(props, props.theme as ThemeType)}
`;

export default Flex;
