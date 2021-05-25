import styled, { css } from 'styled-components';

import Spacing, { SpacingProps } from 'src/components/Spacing';

type StyledBoxProps = SpacingProps & {
  backgroundColor?: string;
  css?: any;
};

export const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${props => props.theme.colors.backgroundLight};
  padding: ${({ theme, backgroundColor }) => (backgroundColor ? theme.spacing.s : 0)};
  margin: 0 0 ${props => props.theme.spacing.m} 0;

  &:last-child {
    margin-bottom: 0;
  }

  background-color: ${({ theme: { colors }, backgroundColor }) =>
    backgroundColor && typeof colors[backgroundColor] !== 'undefined'
      ? colors[backgroundColor]
      : backgroundColor
      ? backgroundColor
      : 'transparent'};

  ${(props: StyledBoxProps) => (css as any)([props.css])}
  ${props => Spacing(props)}
`;
