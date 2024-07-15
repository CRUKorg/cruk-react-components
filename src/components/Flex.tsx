import React from "react";
import styled from "styled-components";
import {
  spacing,
  type SpacingPropsInternal,
  spacingPropsToSpacingPropsInternal,
  type SpacingProps,
} from "./Spacing";
import { type ThemeType } from "../types";

type StyledProps = SpacingPropsInternal & {
  theme: ThemeType;
};

const FlexStyled = styled.div<StyledProps>`
  display: block;
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
  }
  ${(props) => spacing(props, props.theme as ThemeType)}
`;

type Props = SpacingProps & {
  theme: ThemeType;
};
export function Flex(props: Props) {
  const spacingProps = spacingPropsToSpacingPropsInternal(props);

  return <FlexStyled theme={props.theme} {...spacingProps} />;
}

export default Flex;
