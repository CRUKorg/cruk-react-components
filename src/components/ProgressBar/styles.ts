import styled, { css, keyframes } from 'styled-components';
import { ThemeType } from 'src/types';

const CIRCLE_THICKENESS = "4px";

type ThemeProp = {
  theme: ThemeType
}

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

type LineProgressBarProps = {
  percentage: number;
  barColor?: string;
};


type CircularColorFillProps = {
  barColor?: string;
};

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
  }: CircularColorFillProps & ThemeProp) => (barColor || progressBar)};
  border-radius: ${({
    theme: {
      button: { borderRadius },
    },
  }: ThemeProp) => borderRadius};
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


export const CircularColorFill = styled.span<CircularColorFillProps>`
  width: 100%;
  height: 100%;
  background: none;
  border-width: ${CIRCLE_THICKENESS};
  border-style: solid;
  position: absolute;
  top: 0;
  border-color: ${({
    barColor,
    theme: {
      colors: { circularProgress },
    },
  }: CircularColorFillProps & ThemeProp) => (barColor || circularProgress)};
`;

export const CircularLeft = styled.span`
  left: 0;

  ${CircularColorFill} {
    left: 100%;
    border-top-right-radius: 100vw;
    border-bottom-right-radius: 100vw;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }
`;

export const CircularRight = styled.span`
  right: 0;

  ${CircularColorFill} {
    left: -100%;
    border-top-left-radius: 100vw;
    border-bottom-left-radius: 100vw;
    border-right: 0;
    -webkit-transform-origin: center right;
    transform-origin: center right;
  }
`;

const AnimationRight = ({ percentage }: { percentage: number }) => keyframes`
  0% { transform: rotate(0deg); }
  100% {
    transform: rotate(${percentage > 50 ? "180" : percentage * 3.6}deg);
  }
`;

const AnimationLeft = ({ percentage }: { percentage: number }) => keyframes`
  0% { transform: rotate(0deg); }
  100% {
    transform: rotate(${percentage > 100 ? "180" : percentage * 3.6 - 180}deg);
  }
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

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: ${({
      theme: {
        colors: { circularProgressBackground },
      },
    }: ThemeProp) => `${CIRCLE_THICKENESS} solid ${circularProgressBackground}`};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  > span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  ${(props) =>
    props.percentage < 51 &&
    css`
      ${CircularRight} ${CircularColorFill} {
        animation: ${AnimationRight as any} 0.5s linear forwards;
      }
    `};
  ${(props) =>
    props.percentage > 50 &&
    css`
      ${CircularRight} ${CircularColorFill} {
        animation: ${AnimationRight as any} 0.5s linear forwards;
      }
      ${CircularLeft} ${CircularColorFill} {
        animation: ${AnimationLeft as any} 0.5s linear forwards 0.5s;
      }
    `};
  ${(props) =>
    props.percentage >= 100 &&
    css`
      ${CircularRight} ${CircularColorFill} {
        animation: ${AnimationRight as any} 0.5s linear forwards;
      }
      ${CircularLeft} ${CircularColorFill} {
        animation: ${AnimationLeft as any} 0.5s linear forwards 0.5s;
      }
    `};
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
