import React, { FunctionComponent, ReactChild } from 'react';
import styled, { css, withTheme } from 'styled-components';

import defaultTheme, { BREAKPOINT, COLORS, UTILITIES } from '../../themes/cruk';
import ProgressBar from '../ProgressBar';
import Text from '../Text';
import Badge from '../Badge';
import Box from '../Box';
import { calculatePercentRounded, formatMoney } from '../../utils/Helper';

import { ThemeType } from '../../themes/types';

type TotaliserProps = {
  total: number;
  giftAid?: number;
  target?: number | null;
  isCompact?: boolean;
  summaryMessage?: ReactChild;
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
  font-family: ${props => props.theme.typography.fontFamilyBase};
`;

type TotaliserWrapperProps = {
  isCompact: boolean;
};

const TotaliserWrapper = styled.div<TotaliserWrapperProps>`
  font-family: ${props => props.theme.typography.fontFamilyHeadings};
  margin: 0;
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
        top: -30px;
        right: -15px;
        font-size: 32px;
      }
    `}
`;

// TODO figure out how we want to handle AriaAttributes
const Totaliser: FunctionComponent<TotaliserProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const result = calculatePercentRounded(+props.total, props.target);
  const percentageOfTotal = calculatePercentRounded(+props.total, props.target);
  const summaryString = `${percentageOfTotal}% of the £${formatMoney(props.target)} target`;

  return (
    <TotaliserWrapper {...props} isCompact={props.isCompact || false} theme={theme}>
      {props.isCompact ? (
        <CompactWrapper theme={theme}>
          <Box marginHorizontal="none" marginRight="extraExtraSmall" marginBottom="none">
            <Badge>{`£${formatMoney(props.total)}`}</Badge>
          </Box>
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
          <p>+ £{formatMoney(props.giftAid || 0)} Gift Aid</p>
        </DetailWrapper>
      )}
      {props.target !== null && (
        <ProgressBarWrapper theme={theme}>
          <StyledProgressBar theme={theme} percentage={result} isCompact={props.isCompact || false} />
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
