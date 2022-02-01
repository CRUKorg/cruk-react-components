import React, { FC, ReactNode } from "react";
import { ThemeProvider, useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";

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
  /** flag which converts line bar to donut chart */
  isCircular?: boolean;
  /** contents inside the donut chart */
  circleContents?: ReactNode;
  /** diameter of the donut chart */
  circleSize?: string;
  /** foreground colour of chart */
  barColor?: string;
};

/**
 * Provide up-to-date feedback on the progress of a workflow or action with
simple yet flexible progress bars.
*/
const ProgressBar: FC<ProgressBarProps> = ({
  percentage = 0,
  isCircular,
  circleContents,
  circleSize,
  barColor,
  children,
}) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const percentageNumber = !Number.isNaN(percentage) ? percentage : 0;
  const percentString = `${percentageNumber}%`;
  const percentageLimited = percentageNumber > 100 ? 100 : percentageNumber;

  const descriptivePercentageString = `${
    typeof circleContents === "string" ? circleContents : ""
  } ${percentString}% Complete`;
  const textOrPercentString = circleContents || percentString;

  const strokeWidth = 6;
  const d = 128;
  const r = d / 2 - strokeWidth;

  return (
    <ThemeProvider theme={theme}>
      <ProgressBarWrapper>
        {isCircular ? (
          <CircularWrapper
            percentage={percentageNumber}
            circleSize={circleSize || DEFAULT_CIRCLE_SIZE}
          >
            <CircleSvg viewBox={`0 0 ${d} ${d}`}>
              <EmptyCircle
                cx={r + strokeWidth}
                cy={r + strokeWidth}
                r={r}
                strokeWidth={strokeWidth}
              />
              <FullCircle
                barColor={barColor}
                cx={r + strokeWidth}
                cy={r + strokeWidth}
                r={r}
                strokeWidth={strokeWidth}
                strokeDasharray={2 * Math.PI * r}
                strokeDashoffset={
                  2 * Math.PI * r * (1 - percentageLimited / 100)
                }
                strokeDashoffsetInit={2 * Math.PI * r}
              />
            </CircleSvg>
            <CircularValue>{textOrPercentString}</CircularValue>
          </CircularWrapper>
        ) : (
          <LineProgressBarWrapper>
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
};

export default ProgressBar;
