import styled, { css, keyframes } from "styled-components";
import { type ThemeType } from "../../types";

const BAR_HEIGHT = "16px";

type CircleKeyCircleFillKeyFramesProps = {
  $strokeDashoffsetInit: number;
  strokeDashoffset: number;
};

const CircleFillKeyFrames = ({
  $strokeDashoffsetInit,
  strokeDashoffset,
}: CircleKeyCircleFillKeyFramesProps) => keyframes`
  0% {
     stroke-dashoffset: ${$strokeDashoffsetInit} ;
  }
  50% {
     stroke-dashoffset: ${strokeDashoffset} ;
  }
  100% {
     stroke-dashoffset: ${strokeDashoffset} ;
  }
`;

const SecondaryCircleFillKeyFrames = ({
  $strokeDashoffsetInit,
  strokeDashoffset,
}: CircleKeyCircleFillKeyFramesProps) => keyframes`
  0% {
     stroke-dashoffset: ${$strokeDashoffsetInit} ;
  }
  100% {
     stroke-dashoffset: ${strokeDashoffset} ;
  }
`;

const TargetBarPulseKeyFrames = () => keyframes`
    0% {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 64px;
    height: 64px;
    right: -32px;
  }
`;

const LineBarPulseKeyFrames = () => keyframes`
  0% {
    transform: scale(1);
    border-radius: 0px;

  }
  50% {
    transform:scale(1.025);
  }
  100% {
    transform: scale(1);
     border-radius: 0px;
  }
`;

export const ProgressBarWrapper = styled.div`
  margin-top: ${BAR_HEIGHT};
`;

export const LineProgressBarWrapper = styled.div<{
  $percentage: number;
  $secondaryPercentage: number;
  theme: ThemeType;
}>`
  position: relative;
  height: ${BAR_HEIGHT};
  margin-bottom: 0;
  background-color: ${({
    theme: {
      colors: { progressBarBackground },
    },
  }) => progressBarBackground};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  ${({ $percentage, $secondaryPercentage }) =>
    ($percentage === 100 || $secondaryPercentage === 100) &&
    css`
      animation: ${LineBarPulseKeyFrames} 0.3s 0.5s 1 ease-out;
    `}
`;

export const LineProgressBar = styled.div<{
  $percentage: number;
  $barColor?: string;
  $isSecondary?: boolean;
  theme: ThemeType;
}>`
  position: absolute;
  left: 0;
  height: ${BAR_HEIGHT};
  background-color: ${({ $barColor, $isSecondary, theme }) =>
    !!$barColor || !!$isSecondary
      ? theme.colors.progressBarSecondary
      : theme.colors.progressBar};
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
  width: ${({ $percentage }) => $percentage}%;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    opacity: 0;
    filter: blur(2px);
    background-color: ${({
      $barColor,
      $isSecondary,
      theme: {
        colors: { progressBar, progressBarSecondary },
      },
    }) => ($barColor || $isSecondary ? progressBarSecondary : progressBar)};

    ${({ $percentage }) =>
      $percentage === 100 &&
      css`
        animation: ${TargetBarPulseKeyFrames} 0.33s 0.75s 3 ease-in;
      `}
  }
`;

export const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const CircularWrapper = styled.div<{
  $circleSize: string;
  theme: ThemeType;
}>`
  position: relative;
  width: ${({ $circleSize }) => $circleSize};
  height: ${({ $circleSize }) => $circleSize};
  background: none;
  margin: 0 auto;
  box-shadow: none;
`;

export const CircleSvg = styled.svg`
  position: absolute;
  transform: rotate(-90deg);
  fill: none;
  stroke-linecap: round;
  width: 100%;
  height: 100%;
`;

export const EmptyCircle = styled.circle<{
  theme: ThemeType;
}>`
  stroke: ${({ theme }) => theme.tokenColors.grey_200};
`;

export const FullCircle = styled.circle<{
  $strokeDashoffsetInit: number;
  strokeDashoffset: number;
  $barColor?: string;
  $isSecondary?: boolean;
  theme: ThemeType;
}>`
  stroke: ${({
    $isSecondary,
    $barColor,
    theme: {
      colors: { circularProgress, circularProgressSecondary },
    },
  }) =>
    $barColor || $isSecondary ? circularProgressSecondary : circularProgress};
  animation: ${({ $isSecondary, strokeDashoffset, $strokeDashoffsetInit }) =>
      $isSecondary
        ? SecondaryCircleFillKeyFrames({
            strokeDashoffset,
            $strokeDashoffsetInit,
          })
        : CircleFillKeyFrames({ strokeDashoffset, $strokeDashoffsetInit })}
    1s linear;
`;

export const CircularValue = styled.div<{
  theme: ThemeType;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 2;
  font-size: ${({
    theme: {
      fontSizes: { l },
    },
  }) => l};
  line-height: ${({
    theme: {
      fontSizes: { l },
    },
  }) => l};
  text-align: center;
  height: 100%;
  color: ${({
    theme: {
      colors: { textDark },
    },
  }) => textDark};
`;
