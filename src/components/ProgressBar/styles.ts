import styled, { css, keyframes, Keyframes } from "styled-components";
import { ThemeType } from "../../types";

const BAR_HEIGHT = "16px";

type ThemeProp = {
  theme: ThemeType;
};

type LineProgressBarProps = {
  percentage: number;
  barColor?: string;
  isSecondary?: boolean;
};

type CircleProps = ThemeProp & {
  strokeDashoffsetInit: number;
  barColor?: string;
  isSecondary?: boolean;
};

type CircleWrapperProps = {
  circleSize: string;
};

type CircleKeyCircleFillKeyFramesProps = {
  strokeDashoffsetInit: number;
  strokeDashoffset: number;
};

const CircleFillKeyFrames = ({
  strokeDashoffsetInit,
  strokeDashoffset,
}: CircleKeyCircleFillKeyFramesProps) => keyframes`
  0% {
     stroke-dashoffset: ${strokeDashoffsetInit} ;
  }
  50% {
     stroke-dashoffset: ${strokeDashoffset} ;
  }
  100% {
     stroke-dashoffset: ${strokeDashoffset} ;
  }
`;

const SecondaryCircleFillKeyFrames = ({
  strokeDashoffsetInit,
  strokeDashoffset,
}: CircleKeyCircleFillKeyFramesProps) => keyframes`
  0% {
     stroke-dashoffset: ${strokeDashoffsetInit} ;
  }
  100% {
     stroke-dashoffset: ${strokeDashoffset} ;
  }
`;

export const ProgressBarWrapper = styled.div`
  margin-top: ${BAR_HEIGHT};
`;

export const LineProgressBarWrapper = styled.div`
  position: relative;
  height: 15px;
  margin-bottom: 0;
  background-color: ${({
    theme: {
      colors: { progressBarBackground },
    },
  }: ThemeProp) => progressBarBackground};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const LineProgressBar = styled.div<LineProgressBarProps>`
  position: absolute;
  left: 0;
  height: 15px;
  font-size: ${({
    theme: {
      fontSizes: { s },
    },
  }: ThemeProp) => s};
  line-height: ${({
    theme: {
      typography: { lineHeight },
    },
  }: ThemeProp) => lineHeight};
  color: ${({
    theme: {
      colors: { textLight },
    },
  }: ThemeProp) => textLight};
  text-align: center;
  background-color: ${({
    barColor,
    isSecondary,
    theme: {
      colors: { progressBar, progressBarSecondary },
    },
  }: LineProgressBarProps & ThemeProp) =>
    barColor || isSecondary ? progressBarSecondary : progressBar};
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
  width: ${({ percentage }) => percentage}%;
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

export const CircularWrapper = styled.div<CircleWrapperProps>`
  position: relative;
  width: ${({ circleSize }) => circleSize};
  height: ${({ circleSize }) => circleSize};
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

export const EmptyCircle = styled.circle`
  stroke: ${({ theme }: ThemeProp) => theme.tokenColors.grey_200};
`;

export const FullCircle = styled.circle<CircleProps>`
  stroke: ${({
    isSecondary,
    barColor,
    theme: {
      colors: { circularProgress, circularProgressSecondary },
    },
  }: CircleProps) =>
    barColor || isSecondary ? circularProgressSecondary : circularProgress};
  animation: ${({ isSecondary }: CircleProps) =>
      isSecondary
        ? (SecondaryCircleFillKeyFrames as () => Keyframes)
        : (CircleFillKeyFrames as () => Keyframes)}
    1s linear;
`;

export const CircularValue = styled.div`
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
  }: ThemeProp) => l};
  line-height: ${({
    theme: {
      fontSizes: { l },
    },
  }: ThemeProp) => l};
  text-align: center;
  height: 100%;
  color: ${({
    theme: {
      colors: { textDark },
    },
  }: ThemeProp) => textDark};
`;
