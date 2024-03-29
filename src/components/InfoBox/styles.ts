import styled, { css } from "styled-components";

import { ThemeType } from "../../types";
import Box, { BoxProps } from "../Box";

type InfoBoxProps = BoxProps & {
  css?: string;
  theme: ThemeType;
};

export const StyledInfoBox = styled(Box)<InfoBoxProps>`
  display: flex;
  flex-shrink: 0;

  svg {
    margin-top: 0;
  }

  ${(props: InfoBoxProps) =>
    props.css &&
    css`
      ${props.css}
    `}
`;

export default StyledInfoBox;
