import React, { FunctionComponent, ReactChild } from 'react';
import styled, { css, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import ProgressBar from 'src/components/ProgressBar';
import Text from 'src/components/Text';
import Badge from 'src/components/Badge';
import Box from 'src/components/Box';
import { calculatePercentRounded, formatMoneyWithCommas } from 'src/utils/Helper';

import { ThemeType } from 'src/types';

type TotaliserProps = {
  total: number;
  giftAid?: number;
  target?: number | null;
  isCompact?: boolean;
  summaryMessage?: ReactChild;
};

const DetailWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
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
  border: solid 1px ${({ theme }) => theme.colors.totaliserBorder};
  position: relative;
`;

const Total = styled.p`
  font-size: 2.625rem;
  line-height: 3rem;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
`;

const BubbleText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }) => headerTextTransform};
`;

const Summary = styled.div`
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

type TotaliserWrapperProps = {
  isCompact: boolean;
};

const TotaliserWrapper = styled.div<TotaliserWrapperProps>`
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
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const result = calculatePercentRounded(+props.total, props.target || 0);
  const percentageOfTotal = calculatePercentRounded(+props.total, props.target || 0);
  const summaryString = `${percentageOfTotal}% of the £${formatMoneyWithCommas(props.target || 0)} target`;

  return (
    <TotaliserWrapper {...props} isCompact={props.isCompact || false} theme={theme}>
      {props.isCompact ? (
        <CompactWrapper theme={theme}>
          <Box marginHorizontal="none" marginRight="xxs" marginBottom="none">
            <Badge>{`£${formatMoneyWithCommas(props.total)}`}</Badge>
          </Box>
          {props.target !== null && (
            <Summary>
              <Text as="span">{summaryString}</Text>
            </Summary>
          )}
        </CompactWrapper>
      ) : (
        <DetailWrapper theme={theme}>
          <BubbleText>Total raised</BubbleText>
          <Total>£{formatMoneyWithCommas(props.total)}</Total>
          <BubbleText>+ £{formatMoneyWithCommas(props.giftAid || 0)} Gift Aid</BubbleText>
        </DetailWrapper>
      )}
      {/* We don't want to show the default summaryMessage if there is no target, because the summary is associated with the target progress bar */}
      {/* However, if we explicitly pass a summaryMessage string/compononent, then we want to always display it even if the target is zero*/}
      {(!!props.target || !!props.summaryMessage) && (
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
  summaryMessage: undefined,
  target: null,
};

export default Totaliser;
