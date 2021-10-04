import styled, { css } from 'styled-components';

import ProgressBar from 'src/components/ProgressBar';

import { ThemeType } from 'src/types';

export const BubbleWrapper = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.totaliserBubbleColor};
  border-radius: 3.2rem;
  padding: 5px;
  position: relative;
  z-index: 10;

  p {
    margin: 0;
  }
`;

export const ProgressBarWrapper = styled.div`
  padding: 0 46px 12px;
  margin-top: ${({ theme }) => theme.spacing.s};
  position: relative;
`;

export const Total = styled.p`
  color: ${({ theme }) => theme.colors.totaliserBubbleTotalColor};
  font-size: 2.625rem;
  line-height: 3rem;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
`;

export const BubbleText = styled.p`
  color: ${({ theme }) => theme.colors.totaliserBubbleTextColor};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
`;

export const GiftAid = styled.p`
  color: ${({ theme }) => theme.colors.totaliserBubbleTotalColor};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
`;

export const Summary = styled.div`
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

type TotaliserWrapperProps = {
  isCompact: boolean;
};

export const TotaliserWrapper = styled.div<TotaliserWrapperProps>`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  margin: 0;
  ${props =>
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

type StyledProgressBarProps = {
  theme: ThemeType;
  isCompact: boolean;
};

export const StyledProgressBar = styled(ProgressBar)<StyledProgressBarProps>`
  ${props =>
    !props.isCompact &&
    css`
      > div > div:after {
        content: '\\25bc';
        color: ${({ theme }) => theme.colors.totaliserBubbleColor};
        z-index: 11;
        position: absolute;
        top: -30px;
        right: -15px;
        font-size: 32px;
      }
    `}
`;
