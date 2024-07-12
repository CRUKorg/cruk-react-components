import styled, { css } from "styled-components";

import { type ThemeType } from "../../types";

import ProgressBar from "../ProgressBar";

type ThemeProps = {
  theme: ThemeType;
};

export const BubbleWrapper = styled.div<ThemeProps>`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.totaliserBubbleColor};
  border-radius: 3.2rem;
  padding: 5px;
  position: relative;
  p {
    margin: 0;
  }
`;

export const ProgressBarWrapper = styled.div<
  ThemeProps & {
    isCompact?: boolean;
  }
>`
  padding: 0 46px 12px;
  margin-top: ${({ theme }) => theme.spacing.s};
  position: relative;

  ${({ isCompact, theme }) =>
    !!isCompact !== true &&
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

export const Total = styled.p<ThemeProps>`
  color: ${({ theme }) => theme.colors.totaliserBubbleTotalColor};
  font-size: 2.625rem;
  line-height: 3rem;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({ theme }) => theme.typography.headerTextTransform};
`;

export const BubbleText = styled.p<ThemeProps>`
  color: ${({ theme }) => theme.colors.totaliserBubbleTextColor};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
`;

export const GiftAid = styled.p<ThemeProps>`
  color: ${({ theme }) => theme.colors.totaliserBubbleTotalColor};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
`;

/* span not a div so that we don't end up with two speech bubble arrows from ProgressBarWrapper */
export const Summary = styled.span<ThemeProps>`
  display: block;
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

type TotaliserWrapperProps = {
  isCompact: boolean;
  theme: ThemeType;
};

export const TotaliserWrapper = styled.div<TotaliserWrapperProps>`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  margin: 0;
  ${(props) =>
    props.isCompact &&
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
