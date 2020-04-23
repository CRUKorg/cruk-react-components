import React, { FunctionComponent, ReactChild } from 'react';
import styled, { css, withTheme } from 'styled-components';

import defaultTheme, { BREAKPOINT, COLORS, TYPOGRAPHY, UTILITIES } from '../../themes/cruk';
import ProgressBar from '../ProgressBar';
import Text from '../Text';
import { calculatePercentRounded, formatMoney } from '../../utils/Helper';

import { ThemeType } from '../../themes/types';

type TotaliserProps = {
  giftAid: number;
  total: number;
  isCompact: boolean;
  summaryMessage?: ReactChild;
  target?: number | null;
  theme?: ThemeType;
};

const DetailWrapper = styled.div`
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 3.2rem;
  padding: 5px;
  position: relative;
  z-index: 10;

  p {
    margin: 0;
  }
`;
const ProgressBarWrapper = styled.div`
  padding: 0 46px 12px;
  margin-top: 7px;
  border: solid 1px ${COLORS.totaliserBorder};
  border-radius: ${UTILITIES.borderRadius};
  position: relative;
`;
const Total = styled.p`
  font-size: 2.625rem;
  line-height: 3rem;
`;
const Summary = styled.div`
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
`;

type TotaliserWrapperProps = {
  isCompact: boolean;
};

const TotaliserWrapper = styled.div<TotaliserWrapperProps>`
  font-family: ${props => props.theme.typography.fontFamilyHeadings};
  margin: 0 0 20px 0;
  ${props =>
    !props.isCompact &&
    css`
      @media (min-width: ${BREAKPOINT.desktop}) {
        max-width: 335px;
      }
    `}
  ${props =>
    props.isCompact &&
    css`
      ${ProgressBarWrapper} {
        border: none;
        padding: 0;
      }
    `}
`;
const CompactWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  ${Total} {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 20px;
    color: ${props => props.theme.colors.textLight};
    font-size: 1rem;
    line-height: ${TYPOGRAPHY.lineHeight};
    margin: -5px 0 5px;
    padding: 5px 12px;
  }
`;

type StyledProgressBarProps = {
  theme: ThemeType;
  isCompact: boolean;
};

const StyledProgressBar = styled(ProgressBar)<StyledProgressBarProps>`
  ${props =>
    !props.isCompact &&
    css`
      > div > div:after {
        content: '\\25bc';
        color: ${({ theme }) => theme.colors.tertiary};
        z-index: 11;
        position: absolute;
        top: -39px;
        right: -15px;
        font-size: 32px;
      }
    `}
`;

const Totaliser: FunctionComponent<TotaliserProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const result = calculatePercentRounded(+props.total, props.target);
  const percentageOfTotal = calculatePercentRounded(+props.total, props.target);
  const summaryString = `${percentageOfTotal}% of the £${formatMoney(props.target)} target`;

  return (
    <TotaliserWrapper {...props} isCompact={props.isCompact} theme={theme}>
      {props.isCompact ? (
        <CompactWrapper theme={theme}>
          <Total>£{formatMoney(props.total)}</Total>
          {props.target !== null && (
            <Summary>
              <Text as="span">{summaryString}</Text>
            </Summary>
          )}
        </CompactWrapper>
      ) : (
        <DetailWrapper theme={theme}>
          <p>Total raised</p>
          <Total>£{formatMoney(props.total)}</Total>
          <p>+ £{formatMoney(props.giftAid)} Gift Aid</p>
        </DetailWrapper>
      )}
      {props.target !== null && (
        <ProgressBarWrapper theme={theme}>
          <StyledProgressBar theme={theme} percentage={result} isCompact={props.isCompact} />
          {!props.isCompact &&
            (props.summaryMessage ? (
              <Summary>{props.summaryMessage}</Summary>
            ) : (
              <Summary>
                <Text as="span">{summaryString}</Text>
              </Summary>
            ))}
        </ProgressBarWrapper>
      )}
      {props.children}
    </TotaliserWrapper>
  );
};

Totaliser.defaultProps = {
  target: null,
  summaryMessage: null,
  theme: null,
};

export default withTheme(Totaliser);
