import React, { type ReactChild, type ReactNode } from "react";
import { useTheme } from "styled-components";

import {
  calculatePercentRounded,
  formatMoneyWithCommas,
} from "../../utils/Helper";

import { crukTheme as defaultTheme } from "../../themes/cruk";
import { Text } from "../Text";
import { Badge } from "../Badge";
import { Box } from "../Box";

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
} from "./styles";

export type TotaliserProps = {
  /** financial total as a number */
  total: number;
  /** additional donation amount as a number */
  additionalAmount?: number;
  /** git aid total as a number */
  giftAid?: number;
  /** money target as a number */
  target?: number | null;
  /** flag for low height compact appearance */
  isCompact?: boolean;
  /** component for custom summary message underneath total graph only visible if there is a target */
  summaryMessage?: ReactChild;
  /** component children */
  children?: ReactNode;
};

// TODO figure out how we want to handle AriaAttributes

/**
 * Think Blue Peter, used to display total raised and if target prop is passed will display tercentage of target reached.
 * */
export function Totaliser({
  total,
  additionalAmount,
  giftAid,
  target = null,
  isCompact,
  summaryMessage = undefined,
  children,
}: TotaliserProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const percentageOfTotal = calculatePercentRounded(+total, target || 0);
  const withAdditionalPercentageOfTotal = calculatePercentRounded(
    additionalAmount ? +total + (additionalAmount || 0) : 0,
    target || 0,
  );

  const summaryString = `${percentageOfTotal}% of the £${formatMoneyWithCommas(
    target || 0,
  )} target`;

  return (
    <TotaliserWrapper isCompact={isCompact || false} theme={theme}>
      {!isCompact ? (
        <BubbleWrapper theme={theme}>
          <BubbleText>Total raised</BubbleText>
          <Total>£{formatMoneyWithCommas(total)}</Total>
          <GiftAid>+ £{formatMoneyWithCommas(giftAid || 0)} Gift Aid</GiftAid>
        </BubbleWrapper>
      ) : (
        <Box marginHorizontal="none" marginRight="xxs" marginBottom="none">
          <Badge>{`£${formatMoneyWithCommas(total)}`}</Badge>
        </Box>
      )}
      {/* We don't want to show the default summaryMessage if there is no target, because the summary is associated with the target progress bar */}
      {/* However, if we explicitly pass a summaryMessage string/component, then we want to always display it even if the target is zero */}

      {(!!target || !!summaryMessage) && (
        <>
          <ProgressBarWrapper isCompact={isCompact || false} theme={theme}>
            <StyledProgressBar
              theme={theme}
              percentage={percentageOfTotal}
              secondaryPercentage={withAdditionalPercentageOfTotal}
            />
            {!isCompact ? (
              summaryMessage ? (
                <Summary>{summaryMessage}</Summary>
              ) : (
                <Summary>
                  <Text as="span">{summaryString}</Text>
                </Summary>
              )
            ) : (
              <CompactWrapper theme={theme}>
                {target !== null && (
                  <Summary>
                    <Text as="span">{summaryString}</Text>
                  </Summary>
                )}
              </CompactWrapper>
            )}
          </ProgressBarWrapper>
        </>
      )}
      {children}
    </TotaliserWrapper>
  );
}

export default Totaliser;
