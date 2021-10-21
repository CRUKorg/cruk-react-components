import styled, { css } from 'styled-components';
import { ThemeType } from 'src/types';

import ProgressBar from 'src/components/ProgressBar';

type ThemeProps = {
  theme: ThemeType
}
export const DetailWrapper = styled.div`
  color: ${({ theme }: ThemeProps) => theme.colors.textLight};
  text-align: center;
  background-color: ${({ theme }: ThemeProps) => theme.colors.tertiary};
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
  margin-top: 7px;
  border: solid 1px ${({ theme }: ThemeProps) => theme.colors.totaliserBorder};
  position: relative;
`;

export const Total = styled.p`
  font-size: 2.625rem;
  line-height: 3rem;
  font-family: ${({ theme }: ThemeProps) => theme.typography.fontFamilyHeadings};
  text-transform: ${({ theme }: ThemeProps) => theme.typography.headerTextTransform};
`;

export const BubbleText = styled.p`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fontFamilyHeadings};
  text-transform: ${({ theme }: ThemeProps) => theme.typography.headerTextTransform};
`;

export const Summary = styled.div`
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
  font-family: ${({ theme }: ThemeProps) => theme.typography.fontFamilyBase};
`;

type TotaliserWrapperProps = {
  isCompact: boolean;
};

export const TotaliserWrapper = styled.div<TotaliserWrapperProps>`
  font-family: ${({ theme }: ThemeProps) => theme.typography.fontFamilyHeadings};
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
  isCompact: boolean;
};

export const StyledProgressBar = styled(ProgressBar)<StyledProgressBarProps>`
  ${props =>
    !props.isCompact &&
    css`
      > div > div:after {
        content: '\\25bc';
        color: ${({ theme }: ThemeProps) => theme.colors.tertiary};
        z-index: 11;
        position: absolute;
        top: -30px;
        right: -15px;
        font-size: 32px;
      }
    `}
`;
