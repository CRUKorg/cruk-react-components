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
  @media (min-width: 768px) {
    display: flex;
  }
  ${(props) => spacing(props)}
`;

type Props = SpacingProps & {
  theme: ThemeType;
};
export function Flex(props: Props) {
  const spacingProps = spacingPropsToSpacingPropsInternal(props);

  return <FlexStyled theme={props.theme} {...spacingProps} />;
}

export default Flex;
