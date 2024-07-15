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

export const Details = styled.div<Props>`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.xs};
  text-align: left;
  min-width: 0;
`;

export const Name = styled.div<Props>`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  font-size: ${({ theme }) => theme.fontSizes.l};
  white-space: normal;
  word-break: break-word;
`;

export const Extra = styled.div<Props>`
  color: ${({ theme }) => theme.colors.userBlockExtraText};
  margin-top: 4px;
  white-space: normal;
  word-break: break-word;
`;
