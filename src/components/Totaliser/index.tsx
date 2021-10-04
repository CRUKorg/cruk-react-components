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
  BubbleWrapper,
  BubbleText,
  GiftAid,
  Total,
  ProgressBarWrapper,
  StyledProgressBar,
} from './styles';

export type TotaliserProps = {
  /** financial total as a number */
  total: number;
  /** git aid total as a number */
  giftAid?: number;
  /** money target as a number */
  target?: number | null;
  /** flag for low height compact appearance */
  isCompact?: boolean;
  /** component for custom summary message underneath total graph only visible if there is a target */
  summaryMessage?: ReactChild;
};

// TODO figure out how we want to handle AriaAttributes

/**
 * Think Blue Peter, used to display total raised and if target prop is passed will display tercentage of target reached.
 * */
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
        <BubbleWrapper theme={theme}>
          <BubbleText>Total raised</BubbleText>
          <Total>£{formatMoneyWithCommas(props.total)}</Total>
          <GiftAid>+ £{formatMoneyWithCommas(props.giftAid || 0)} Gift Aid</GiftAid>
        </BubbleWrapper>
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
