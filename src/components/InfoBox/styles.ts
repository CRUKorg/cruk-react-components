import styled, { css } from "styled-components";

import Box from "../Box";

type InfoBoxProps = React.ComponentProps<typeof Box> & {
  css?: string;
};

export const StyledInfoBox = styled(Box)<InfoBoxProps>`
  display: flex;
  flex-shrink: 0;

  svg {
    margin-top: 0;
  }

  ${(props) =>
    props.css &&
    css`
      ${props.css}
    `}
`;

export default StyledInfoBox;
