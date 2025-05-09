import styled, { css } from "styled-components";

import { type ThemeType } from "../../types";

import ProgressBar from "../ProgressBar";

export const BubbleWrapper = styled.div<{
  theme: ThemeType;
}>`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.totaliserBubbleColor};
  border-radius: 3.2rem;
  padding: 5px;
  position: relative;
  p {
    margin: 0;
  }
`;

export const ProgressBarWrapper = styled.div<{
  $isCompact?: boolean;
  theme: ThemeType;
}>`
  padding: 0 46px 12px;
  margin-top: ${({ theme }) => theme.spacing.s};
  position: relative;

  ${({ $isCompact, theme }) =>
    !!$isCompact !== true &&
    css`
      div > div > div:not(:first-child) {
        &:after {
          content: "\\25bc";
          color: ${theme.colors.totaliserBubbleColor};
          position: absolute;
          top: -30px;
          right: -15px;
          font-size: 32px;
        }
      }
    `};
`;

export const Total = styled.p<{
  theme: ThemeType;
}>`
  color: ${({ theme }) => theme.colors.totaliserBubbleTotalColor};
  font-size: 2.625rem;
  line-height: 3rem;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({ theme }) => theme.typography.headerTextTransform};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
`;

export const BubbleText = styled.p<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.totaliserBubbleTextColor};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
`;

export const GiftAid = styled.p<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.totaliserBubbleTotalColor};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
`;

/* span not a div so that we don't end up with two speech bubble arrows from ProgressBarWrapper */
export const Summary = styled.span<{ theme: ThemeType }>`
  display: block;
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

export const TotaliserWrapper = styled.div<{
  $isCompact: boolean;
  theme: ThemeType;
}>`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  margin: 0;
  ${(props) =>
    props.$isCompact &&
    css`
      ${ProgressBarWrapper} {
        border: none;
        padding: 0;
      }
    `}
`;

export const CompactWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
`;

export const StyledProgressBar = styled(ProgressBar)``;
