import React, { FC, ReactNode } from "react";
import { ThemeProvider, useTheme } from "styled-components";

import defaultTheme from "src/themes/cruk";

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

const DefaultProps = {
  percentage: 0,
};

/**
 * Provide up-to-date feedback on the progress of a workflow or action with
simple yet flexible progress bars.
*/
const ProgressBar: FC<ProgressBarProps> = (props = DefaultProps) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const number = props.percentage;
  const percentString = `${!Number.isNaN(number) ? number : "0"}%`;
  const descriptivePercentageString = `${
    typeof props.circleContents === "string" ? props.circleContents : ""
  } ${percentString}% Complete`;
  const textOrPercentString = props.circleContents || percentString;

  return (
    <ThemeProvider theme={theme}>
      <ProgressBarWrapper {...props}>
        {props.isCircular ? (
          <CircularWrapper
            percentage={number}
            circleSize={props.circleSize || DEFAULT_CIRCLE_SIZE}
          >
            <CircularLeft className="Left">
              <CircularColorFill barColor={props.barColor} />
            </CircularLeft>
            <CircularRight className="Right">
              <CircularColorFill barColor={props.barColor} />
            </CircularRight>
            <CircularValue>{textOrPercentString}</CircularValue>
          </CircularWrapper>
        ) : (
          <LineProgressBarWrapper>
            <LineProgressBar
              percentage={number > 100 ? 100 : number}
              barColor={props.barColor}
            />
            <ScreenReaderOnly>{descriptivePercentageString}</ScreenReaderOnly>
          </LineProgressBarWrapper>
        )}
        {props.children}
      </ProgressBarWrapper>
    </ThemeProvider>
  );
};

export default ProgressBar;
