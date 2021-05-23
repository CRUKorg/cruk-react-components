import React, { FunctionComponent, ReactNode } from 'react';
import styled, { css, keyframes, ThemeProvider, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

const CIRCLE_THICKENESS = '4px';
const DEFAULT_CIRCLE_SIZE = '90px';

type ProgressBarProps = {
  percentage: number;
  isCircular?: boolean;
  circleContents?: ReactNode;
  circleSize?: string;
  barColor?: string;
};

type PercentageProps = {
  percentage: number;
};

const ProgressBarWrapper = styled.div`
  margin-top: 15px;
`;

const ProgressSharedStyling = css`
  height: 15px;
  margin-bottom: 0;
  background-color: ${({
    theme: {
      colors: { progressBarBackground },
    },
  }) => progressBarBackground};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const LineProgressBarWrapper = styled.div`
  ${ProgressSharedStyling};
`;

type LineProgressBarProps = {
  percentage: number;
  barColor?: string;
};

const LineProgressBar = styled.div<LineProgressBarProps>`
  float: left;
  width: 1%;
  height: 100%;
  font-size: ${({
    theme: {
      fontSizes: { s },
    },
  }) => s};
  line-height: ${({
    theme: {
      typography: { lineHeight },
    },
  }) => lineHeight};
  color: ${({
    theme: {
      colors: { textLight },
    },
  }) => textLight};
  text-align: center;
  background-color: ${({
    barColor,
    theme: {
      colors: { progressBar },
    },
  }) => (barColor ? barColor : progressBar)};
  border-radius: ${({
    theme: {
      utilities: { borderRadius },
    },
  }) => borderRadius};
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
  position: relative;

  ${props =>
    props.percentage &&
    css`
      width: ${props.percentage}%;
    `}
`;

const SROnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

type CircularColorFillProps = {
  barColor?: string;
};

const CircularColorFill = styled.span<CircularColorFillProps>`
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
  }) => (barColor ? barColor : circularProgress)};
`;

const CircularLeft = styled.span`
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

const CircularRight = styled.span`
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

type AnimationRightProps = PercentageProps;

const AnimationRight = (props: AnimationRightProps) => keyframes`
  0% { transform: rotate(0deg); }
  100% {
    transform: rotate(${props.percentage > 50 ? '180' : props.percentage * 3.6}deg);
  }
`;

type AnimationLeftProps = PercentageProps;

const AnimationLeft = (props: AnimationLeftProps) => keyframes`
  0% { transform: rotate(0deg); }
  100% {
    transform: rotate(${props.percentage > 100 ? '180' : props.percentage * 3.6 - 180}deg);
  }
`;

type CircularWrapperProps = {
  percentage: number;
  circleSize: string;
};

const CircularWrapper = styled.div<CircularWrapperProps>`
  ${ProgressSharedStyling};

  width: ${({ circleSize }) => circleSize};
  height: ${({ circleSize }) => circleSize};
  background: none;
  margin: 0 auto;
  box-shadow: none;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: ${({
      theme: {
        colors: { circularProgressBackground },
      },
    }) => `${CIRCLE_THICKENESS} solid ${circularProgressBackground}`};
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

  ${props =>
    props.percentage < 51 &&
    css`
      ${CircularRight} ${CircularColorFill} {
        animation: ${AnimationRight as any} 0.5s linear forwards;
      }
    `};
  ${props =>
    props.percentage > 50 &&
    css`
      ${CircularRight} ${CircularColorFill} {
        animation: ${AnimationRight as any} 0.5s linear forwards;
      }
      ${CircularLeft} ${CircularColorFill} {
        animation: ${AnimationLeft as any} 0.5s linear forwards 0.5s;
      }
    `};
  ${props =>
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

const CircularValue = styled.div`
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

const ProgressBar: FunctionComponent<ProgressBarProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const number = props.percentage;
  const percentString = `${!Number.isNaN(number) ? number : '0'}%`;
  const descriptivePercentageString = `${
    typeof props.circleContents === 'string' ? props.circleContents : null
  } ${percentString}% Complete`;
  const textOrPercentString = props.circleContents || percentString;

  return (
    <ThemeProvider theme={theme}>
      <ProgressBarWrapper {...props}>
        {props.isCircular ? (
          <CircularWrapper percentage={number} circleSize={props.circleSize || DEFAULT_CIRCLE_SIZE}>
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
            <LineProgressBar percentage={number > 100 ? 100 : number} barColor={props.barColor} />
            <SROnly>{descriptivePercentageString}</SROnly>
          </LineProgressBarWrapper>
        )}
        {props.children}
      </ProgressBarWrapper>
    </ThemeProvider>
  );
};

ProgressBar.defaultProps = {
  percentage: 0,
};

export default ProgressBar;
