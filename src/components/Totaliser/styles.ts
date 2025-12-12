import styled, { css } from "styled-components";

import { type ThemeType } from "../../types";

import ProgressBar from "../ProgressBar";

export const BubbleWrapper = styled.div<{
  theme: ThemeType;
}>`
  text-align: center;
  background-color: var(--clr-totaliser-bubble, #f2f2f2);
  border-radius: 3.2rem;
  padding: 5px;
  position: relative;
  p {
    margin: 0;
  }
`;

export const ProgressBarWrapper = styled.div<{
  $isCompact?: boolean;
}>`
  padding: 0 46px 12px;
  margin-top: var(--spacing-s, 1.5rem);
  position: relative;

  ${({ $isCompact }) =>
    !!$isCompact !== true &&
    css`
      div > div > div:not(:first-child) {
        &:after {
          content: "\\25bc";
          color: var(--clr-totaliser-bubble, #f2f2f2);
          position: absolute;
          top: -36px;
          right: -15px;
          font-size: 32px;
        }
      }
    `};
`;

export const Total = styled.p<{
  theme: ThemeType;
}>`
  color: var(--clr-totaliser-bubble-total, #00007e);
  font-size: 2.625rem;
  line-height: 3rem;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({ theme }) => theme.typography.headerTextTransform};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
`;

export const BubbleText = styled.p<{ theme: ThemeType }>`
  color: var(--clr-totaliser-bubble-text, #000);
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
`;

export const GiftAid = styled.p<{ theme: ThemeType }>`
  color: var(--clr-totaliser-bubble-total, #00007e);
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
