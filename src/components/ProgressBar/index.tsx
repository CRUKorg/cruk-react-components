import React, { FunctionComponent } from 'react';
import styled, { css, keyframes, ThemeProvider, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

type ProgressBarProps = {
  percentage: number;
  isCircular?: boolean;
  showIndicator?: boolean;
  children?: any;
  theme?: ThemeType;
};

type PercentageProps = {
  percentage: number;
};

const ProgressBarWrapper = styled.div`
  margin-top: 15px;
`;

const ProgressBarSharedStyling = css`
  float: left;
  width: 1%;
  height: 100%;
  font-size: ${({
    theme: {
      fontSizes: { small },
    },
  }) => small};
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
    theme: {
      colors: { progressBar },
    },
  }) => progressBar};
  border-radius: ${({
    theme: {
      utilities: { borderRadius },
    },
  }) => borderRadius};
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
`;

const ProgressSharedStyling = css`
  height: 15px;
  margin-bottom: 0;
  background-color: ${({
    theme: {
      colors: { progressBarBg },
    },
  }) => progressBarBg};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const LineProgressBarWrapper = styled.div`
  ${ProgressSharedStyling};
`;

type LineProgressBarProps = PercentageProps;

const LineProgressBar = styled.div<LineProgressBarProps>`
  ${ProgressBarSharedStyling}
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

const CircularColorFill = styled.span`
  width: 100%;
  height: 100%;
  background: none;
  border-width: 4px;
  border-style: solid;
  position: absolute;
  top: 0;
  border-color: ${({
    theme: {
      colors: { circularProgress },
    },
  }) => circularProgress};
`;

const CircularLeft = styled.span`
  left: 0;

  ${CircularColorFill} {
    left: 100%;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }
`;

const CircularRight = styled.span`
  right: 0;

  ${CircularColorFill} {
    left: -100%;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
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

type CircularWrapperProps = PercentageProps;

const CircularWrapper = styled.div<CircularWrapperProps>`
  ${ProgressSharedStyling};

  width: 90px;
  height: 90px;
  line-height: 90px;
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
        colors: { circularProgressBg },
      },
    }) => `4px solid ${circularProgressBg}`};
    position: absolute;
    top: 0;
    left: 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: ${({
    theme: {
      fontSizes: { large },
    },
  }) => large};
  line-height: ${({
    theme: {
      fontSizes: { large },
    },
  }) => large};
  text-align: center;
  height: 100%;
  text-transform: uppercase;
  color: ${({
    theme: {
      colors: { circularProgress },
    },
  }) => circularProgress};
`;

const ProgressBar: FunctionComponent<ProgressBarProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const number = props.percentage;
  const text = `${!Number.isNaN(number) ? number : '0'}%`;
  return (
    <ThemeProvider theme={theme}>
      <ProgressBarWrapper {...props}>
        {props.isCircular ? (
          <CircularWrapper percentage={number}>
            <CircularLeft className="Left">
              <CircularColorFill />
            </CircularLeft>
            <CircularRight className="Right">
              <CircularColorFill />
            </CircularRight>
            <CircularValue>{text}</CircularValue>
          </CircularWrapper>
        ) : (
          <LineProgressBarWrapper>
            <LineProgressBar percentage={number > 100 ? 100 : number} />
            <SROnly>{`${text} Complete`}</SROnly>
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

export default withTheme(ProgressBar);
