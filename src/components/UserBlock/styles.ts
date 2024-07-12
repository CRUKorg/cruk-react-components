import styled from "styled-components";
import { type ThemeType } from "../../types";

type Props = {
  theme: ThemeType;
};

export const StyledUserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 1;
`;

export const Details = styled.div`
  flex: 1;
  margin-left: ${({ theme }: Props) => theme.spacing.xs};
  text-align: left;
  min-width: 0;
`;

export const Name = styled.div`
  font-family: ${({ theme }: Props) => theme.typography.fontFamilyHeadings};
  font-size: ${({ theme }: Props) => theme.fontSizes.l};
  white-space: normal;
  word-break: break-word;
`;

export const Extra = styled.div`
  color: ${({ theme }: Props) => theme.colors.userBlockExtraText};
  margin-top: 4px;
  white-space: normal;
  word-break: break-word;
`;
