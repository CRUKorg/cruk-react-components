import styled, { css, keyframes, Keyframes } from "styled-components";
import { ThemeType } from "../../types";

type ThemeProp = {
  theme: ThemeType;
};

type LineProgressBarProps = {
  percentage: number;
  barColor?: string;
};

type CircleProps = ThemeProp & {
  strokeDashoffsetInit: number;
  barColor?: string;
};

const CircleFillKeyFrames = ({
  strokeDashoffsetInit,
  strokeDashoffset,
}: {
  strokeDashoffsetInit: number;
  strokeDashoffset: number;
}) => keyframes`
  from {
     stroke-dashoffset: ${strokeDashoffsetInit} ;
  }
  to {
     stroke-dashoffset: ${strokeDashoffset} ;
  }
`;

export const ProgressBarWrapper = styled.div`
  margin-top: 15px;
`;

const ProgressSharedStyling = css`
  height: 15px;
  margin-bottom: 0;
  background-color: ${({
    theme: {
      colors: { progressBarBackground },
    },
  }: ThemeProp) => progressBarBackground};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const LineProgressBarWrapper = styled.div`
  ${ProgressSharedStyling};
`;

export const LineProgressBar = styled.div<LineProgressBarProps>`
  float: left;
  width: 1%;
  height: 100%;
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
    theme: {
      colors: { progressBar },
    },
  }: LineProgressBarProps & ThemeProp) => barColor || progressBar};
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
  position: relative;

  ${(props) =>
    props.percentage &&
    css`
      width: ${props.percentage}%;
    `}
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
  percentage: number;
  circleSize: string;
}>`
  ${ProgressSharedStyling};

  width: ${({ circleSize }) => circleSize};
  height: ${({ circleSize }) => circleSize};
  background: none;
  margin: 0 auto;
  box-shadow: none;
  position: relative;
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
  stroke: ${({ theme }: { theme: ThemeType }) => theme.tokenColors.grey_200};
`;

export const FullCircle = styled.circle<CircleProps>`
  stroke: ${({
    barColor,
    theme: {
      colors: { circularProgress },
    },
  }: CircleProps) => barColor || circularProgress};
  stroke: ${({ theme }: CircleProps) => theme.colors.circularProgress};
  animation: ${CircleFillKeyFrames as () => Keyframes} 0.5s linear forwards;
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
