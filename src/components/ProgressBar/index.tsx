import React, { type ReactNode } from "react";
import { ThemeProvider, useTheme } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";

import {
  ProgressBarWrapper,
  CircularWrapper,
  CircleSvg,
  EmptyCircle,
  FullCircle,
  CircularValue,
  LineProgressBarWrapper,
  LineProgressBar,
  ScreenReaderOnly,
} from "./styles";

const DEFAULT_CIRCLE_SIZE = "90px";

export type ProgressBarProps = {
  /** percentage value of the progressbar */
  percentage: number;
  /** percentage value of a secondary (highter) amount of the progressbar */
  secondaryPercentage?: number;
  /** flag which converts line bar to donut chart */
  isCircular?: boolean;
  /** contents inside the donut chart */
  circleContents?: ReactNode;
  /** diameter of the donut chart */
  circleSize?: string;
  /** foreground colour of chart bar */
  barColor?: string;
  /** foreground colour of chart secondary bar */
  secondaryBarColor?: string;
  children?: ReactNode;
};

/**
 * Provide up-to-date feedback on the progress of a workflow or action with
simple yet flexible progress bars.
*/
export function ProgressBar({
  percentage = 0,
  isCircular,
  circleContents,
  circleSize,
  barColor,
  secondaryBarColor,
  secondaryPercentage,
  children,
}: ProgressBarProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const percentageNumber = !Number.isNaN(percentage) ? percentage : 0;
  const percentageLimited = percentageNumber > 100 ? 100 : percentageNumber;
  const percentString = `${percentageNumber}%`;

  const secondaryPercentageNumber =
    secondaryPercentage && !Number.isNaN(secondaryPercentage)
      ? secondaryPercentage
      : 0;

  const secondaryPercentageLimited =
    secondaryPercentageNumber > 100 ? 100 : secondaryPercentageNumber;

  const descriptivePercentageString = `${
    typeof circleContents === "string" ? circleContents : ""
  } ${percentString}% Complete`;
  const textOrPercentString = circleContents || percentString;

  const strokeWidth = 6;
  const d = 128;
  const r = d / 2 - strokeWidth;
  const c = 2 * Math.PI * r;

  return (
    <ThemeProvider theme={theme}>
      <ProgressBarWrapper>
        {isCircular ? (
          <CircularWrapper circleSize={circleSize || DEFAULT_CIRCLE_SIZE}>
            <CircleSvg viewBox={`0 0 ${d} ${d}`}>
              <EmptyCircle
                cx={r + strokeWidth}
                cy={r + strokeWidth}
                r={r}
                strokeWidth={strokeWidth}
              />
              <FullCircle
                isSecondary
                barColor={secondaryBarColor}
                cx={r + strokeWidth}
                cy={r + strokeWidth}
                r={r}
                strokeWidth={strokeWidth}
                strokeDasharray={c}
                strokeDashoffset={c * (1 - secondaryPercentageLimited / 100)}
                strokeDashoffsetInit={c}
              />

              <FullCircle
                barColor={barColor}
                cx={r + strokeWidth}
                cy={r + strokeWidth}
                r={r}
                strokeWidth={strokeWidth}
                strokeDasharray={c}
                strokeDashoffset={c * (1 - percentageLimited / 100)}
                strokeDashoffsetInit={c}
              />
            </CircleSvg>
            <CircularValue>{textOrPercentString}</CircularValue>
          </CircularWrapper>
        ) : (
          <LineProgressBarWrapper
            percentage={percentageLimited}
            secondaryPercentage={secondaryPercentageLimited}
          >
            <LineProgressBar
              isSecondary
              percentage={secondaryPercentageLimited}
              barColor={secondaryBarColor}
            />

            <LineProgressBar
              percentage={percentageLimited}
              barColor={barColor}
            />
            <ScreenReaderOnly>{descriptivePercentageString}</ScreenReaderOnly>
          </LineProgressBarWrapper>
        )}
        {children}
      </ProgressBarWrapper>
    </ThemeProvider>
  );
}

export default ProgressBar;
