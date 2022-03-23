import styled, { css } from "styled-components";

import { ThemeType } from "../../types";

import ProgressBar from "../ProgressBar";

type ThemeProps = {
  theme: ThemeType;
};

export const BubbleWrapper = styled.div`
  text-align: center;
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.totaliserBubbleColor};
  border-radius: 3.2rem;
  padding: 5px;
  position: relative;
  z-index: 10;

  p {
    margin: 0;
  }
`;

export const ProgressBarWrapper = styled.div<{
  isCompact?: boolean;
}>`
  padding: 0 46px 12px;
  margin-top: ${({ theme }: ThemeProps) => theme.spacing.s};
  position: relative;

  ${({ isCompact }) =>
    !!isCompact !== true &&
    css`
      div > div > div:not(:first-child) {
        &:after {
          content: "\\25bc";
          color: ${({ theme }: ThemeProps) =>
            theme.colors.totaliserBubbleColor};
          z-index: 11;
          position: absolute;
          top: -30px;
          right: -15px;
          font-size: 32px;
        }
      }
    `};
`;

export const Total = styled.p`
  color: ${({ theme }: ThemeProps) => theme.colors.totaliserBubbleTotalColor};
  font-size: 2.625rem;
  line-height: 3rem;
  font-family: ${({ theme }: ThemeProps) =>
    theme.typography.fontFamilyHeadings};
  text-transform: ${({ theme }: ThemeProps) =>
    theme.typography.headerTextTransform};
`;

export const BubbleText = styled.p`
  color: ${({ theme }: ThemeProps) => theme.colors.totaliserBubbleTextColor};
  font-family: ${({ theme }: ThemeProps) =>
    theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }: ThemeProps) => headerTextTransform};
`;

export const GiftAid = styled.p`
  color: ${({ theme }: ThemeProps) => theme.colors.totaliserBubbleTotalColor};
  font-family: ${({ theme }: ThemeProps) =>
    theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }: ThemeProps) => headerTextTransform};
`;

/* span not a div so that we dont end up with two speech bubble arrows from ProgressBarWrapper */
export const Summary = styled.span`
  display: block;
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
  font-family: ${({ theme }: ThemeProps) => theme.typography.fontFamilyBase};
`;

type TotaliserWrapperProps = {
  isCompact: boolean;
};

export const TotaliserWrapper = styled.div<TotaliserWrapperProps>`
  font-family: ${({ theme }: ThemeProps) =>
    theme.typography.fontFamilyHeadings};
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
  justify-content: space-between;
  display: flex;
`;

export const StyledProgressBar = styled(ProgressBar)``;
