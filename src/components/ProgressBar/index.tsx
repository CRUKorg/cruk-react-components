import React, { type ReactNode } from "react";

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
  // barColor,
  // secondaryBarColor,
  secondaryPercentage,
  children,
}: ProgressBarProps) {
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

  const strokeDashOffset = c * (1 - percentageLimited / 100);
  const secondaryStrokeDashOffset = c * (1 - secondaryPercentageLimited / 100);
  return (
    <div className="component-progress-bar">
      {isCircular ? (
        <div
          className="circular-wrapper"
          style={{
            width: circleSize || DEFAULT_CIRCLE_SIZE,
            height: circleSize || DEFAULT_CIRCLE_SIZE,
          }}
        >
          <svg className="circle-svg" viewBox={`0 0 ${d} ${d}`}>
            <circle
              className="empty-circle"
              cx={r + strokeWidth}
              cy={r + strokeWidth}
              r={r}
              strokeWidth={strokeWidth}
            />
            <circle
              className="full-circle"
              data-is-secondary="true"
              cx={r + strokeWidth}
              cy={r + strokeWidth}
              r={r}
              strokeWidth={strokeWidth}
              strokeDasharray={c}
              strokeDashoffset={secondaryStrokeDashOffset}
              style={
                {
                  "--_stroke-dashoffset-init": c,
                  "--_stroke-dashoffset": secondaryStrokeDashOffset,
                } as React.CSSProperties
              }
            />

            <circle
              className="full-circle"
              data-is-secondary="false"
              cx={r + strokeWidth}
              cy={r + strokeWidth}
              r={r}
              strokeWidth={strokeWidth}
              strokeDasharray={c}
              strokeDashoffset={strokeDashOffset}
              style={
                {
                  "--_stroke-dashoffset-init": c,
                  "--_stroke-dashoffset": strokeDashOffset,
                } as React.CSSProperties
              }
            />
          </svg>
          <div className="circle-value">{textOrPercentString}</div>
        </div>
      ) : (
        <div
          className="line-progress-bar-wrapper"
          data-is-complete={percentageLimited >= 100}
        >
          <div
            className="line-progress-bar"
            style={
              {
                width: `${secondaryPercentageLimited}%`,
                "--_line-bar-width": `${secondaryPercentageLimited}%`,
              } as React.CSSProperties
            }
            data-is-secondary="true"
            data-is-complete={secondaryPercentageLimited >= 100}
          />

          <div
            className="line-progress-bar"
            style={
              {
                width: `${percentageLimited}%`,
                "--_line-bar-width": `${percentageLimited}%`,
              } as React.CSSProperties
            }
            data-is-secondary="false"
            data-is-complete={percentageLimited >= 100}
          />
          <div className="screen-reader-only">
            {descriptivePercentageString}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

export default ProgressBar;
