import React, { FC, ReactNode } from "react";
import { ThemeProvider, useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";

import {
  ProgressBarWrapper,
  CircularWrapper,
  CircularLeft,
  CircularRight,
  CircularValue,
  CircularColorFill,
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
  const number = percentage;
  const percentString = `${!Number.isNaN(number) ? number : "0"}%`;
  const descriptivePercentageString = `${
    typeof circleContents === "string" ? circleContents : ""
  } ${percentString}% Complete`;
  const textOrPercentString = circleContents || percentString;

  return (
    <ThemeProvider theme={theme}>
      <ProgressBarWrapper>
        {isCircular ? (
          <CircularWrapper
            percentage={number}
            circleSize={circleSize || DEFAULT_CIRCLE_SIZE}
          >
            <CircularLeft className="Left">
              <CircularColorFill barColor={barColor} />
            </CircularLeft>
            <CircularRight className="Right">
              <CircularColorFill barColor={barColor} />
            </CircularRight>
            <CircularValue>{textOrPercentString}</CircularValue>
          </CircularWrapper>
        ) : (
          <LineProgressBarWrapper>
            <LineProgressBar
              percentage={number > 100 ? 100 : number}
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
