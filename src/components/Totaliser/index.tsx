import React, { FunctionComponent, ReactChild } from 'react';
import { useTheme } from 'styled-components';

import { calculatePercentRounded, formatMoneyWithCommas } from 'src/utils/Helper';

import defaultTheme from 'src/themes/cruk';
import Text from 'src/components/Text';
import Badge from 'src/components/Badge';
import Box from 'src/components/Box';

import {
  TotaliserWrapper,
  CompactWrapper,
  Summary,
  DetailWrapper,
  BubbleText,
  Total,
  ProgressBarWrapper,
  StyledProgressBar,
} from './styles';

type TotaliserProps = {
  total: number;
  giftAid?: number;
  target?: number | null;
  isCompact?: boolean;
  summaryMessage?: ReactChild;
};

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
