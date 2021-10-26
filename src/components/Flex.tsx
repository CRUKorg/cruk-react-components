import styled, { css } from "styled-components";
import spacing, { SpacingProps } from "src/components/Spacing";
import { ThemeType } from "src/types";

type FlexProps = SpacingProps & {
  css: string;
};

type ThemeProps = {
  theme: ThemeType;
};

const Flex = styled.div<FlexProps>`
  display: block;
  @media (min-width: ${({ theme }: ThemeProps) => theme.breakpoint.tablet}) {
    display: flex;
  }
  ${(props) =>
    props.css &&
    css`
      ${props.css}
    `}};
  ${(props) => spacing(props, props.theme)}
`;

export default Flex;
