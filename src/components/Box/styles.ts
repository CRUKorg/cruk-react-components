import styled from "styled-components";

import { spacing, type SpacingPropsInternal } from "../Spacing";
import { type colours } from "../../types";

type StyledBoxProps = SpacingPropsInternal & {
  $backgroundColor?: (typeof colours)[number] | string;
  $css?: string;
};

export const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "transparent"};
  // if we set a background color, add padding
  padding: ${({ $backgroundColor }) =>
    $backgroundColor ? "var(--spacing-s, 1.5rem)" : 0};
  margin: 0 0 var(--spacing-m, 2rem) 0;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => spacing(props)}
`;

export default StyledBox;
