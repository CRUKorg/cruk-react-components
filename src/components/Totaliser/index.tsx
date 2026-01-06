import React, { type ReactNode } from "react";

import {
  calculatePercentRounded,
  formatMoneyWithCommas,
} from "../../utils/Helper";

import { Text } from "../Text";
import { Badge } from "../Badge";
import { Box } from "../Box";

import { ProgressBar } from "../ProgressBar";

// TODO figure out how we want to handle AriaAttributes

/**
 * Think Blue Peter, used to display total raised and if target prop is passed will display percentage of target reached.
 * */
export function Totaliser({
  total,
  additionalAmount,
  giftAid,
  target = null,
  isCompact,
  summaryMessage = undefined,
  children,
}: {
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
  summaryMessage?: ReactNode;
  /** component children */
  children?: ReactNode;
}) {
  const percentageOfTotal = calculatePercentRounded(+total, target || 0);
  const withAdditionalPercentageOfTotal = calculatePercentRounded(
    additionalAmount ? +total + (additionalAmount || 0) : 0,
    target || 0,
  );

  const summaryString = `${percentageOfTotal}% of the £${formatMoneyWithCommas(
    target || 0,
  )} target`;

  return (
    <div className="component-totaliser" data-is-compact={isCompact || false}>
      {!isCompact ? (
        <div className="bubble-wrapper">
          <p className="bubble-text">Total raised</p>
          <p className="total">£{formatMoneyWithCommas(total)}</p>
          <p className="gift-aid">
            + £{formatMoneyWithCommas(giftAid || 0)} Gift Aid
          </p>
        </div>
      ) : (
        <Box marginHorizontal="none" marginRight="xxs" marginBottom="none">
          <Badge>{`£${formatMoneyWithCommas(total)}`}</Badge>
        </Box>
      )}
      {/* We don't want to show the default summaryMessage if there is no target, because the summary is associated with the target progress bar */}
      {/* However, if we explicitly pass a summaryMessage string/component, then we want to always display it even if the target is zero */}

      {(!!target || !!summaryMessage) && (
        <>
          <div
            className="progress-bar-wrapper"
            data-is-compact={isCompact || false}
          >
            <ProgressBar
              percentage={percentageOfTotal}
              secondaryPercentage={withAdditionalPercentageOfTotal}
            />
            {!isCompact ? (
              summaryMessage ? (
                <span className="summary">{summaryMessage}</span>
              ) : (
                <span className="summary">
                  <Text as="span">{summaryString}</Text>
                </span>
              )
            ) : (
              <div className="compact-wrapper">
                {target !== null && (
                  <span className="summary">
                    <Text as="span">{summaryString}</Text>
                  </span>
                )}
              </div>
            )}
          </div>
        </>
      )}
      {children}
    </div>
  );
}

export default Totaliser;
