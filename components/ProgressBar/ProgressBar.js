// @Flow

import React from 'react';
import styled, { css, keyframes, ThemeProvider, withTheme } from 'styled-components';
import { COLORS, TYPOGRAPHY, UTILITIES } from '../Constants';

type ProgressBarProps = {
  theme: { progress: {}, colors: {} },
  percentage: number,
  isCircular: boolean,
  showIndicator: boolean,
};

const ProgressBarWrapper = styled.div`
  margin-top: 15px;
`;

const ProgressBarSharedStyling = css`
  float: left;
  width: 1%;
  height: 100%;
  font-size: ${TYPOGRAPHY.fontSizeSmall}
  line-height: ${TYPOGRAPHY.lineHeight};
  color: ${props => props.theme.colors.white};
  text-align: center;
  background-color: ${props => props.theme.colors.progressBar};
  border-radius: ${UTILITIES.borderRadius};
  -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
  -webkit-transition: width .6s ease;
  -o-transition: width .6s ease;
  transition: width .6s ease;
`;

const ProgressSharedStyling = css`
  height: 15px;
  margin-bottom: 0;
  background-color: ${props => props.theme.colors.progressBarBg};
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
`;

const LineProgressBarWrapper = styled.div`
  ${ProgressSharedStyling};
`;

const LineProgressBar = styled.div`
  ${ProgressBarSharedStyling}
  position: relative;
  
  ${barProps => barProps.percentage && css`
    width: ${barProps.percentage}%;
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
  border-color: ${props => props.theme.colors.circularProgress};
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

const AnimationRight = props => keyframes`
  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(${props.percentage > 50 ? '180' : props.percentage * 3.6});
    transform: rotate(${props.percentage > 50 ? '180' : props.percentage * 3.6}deg);
  }
`;

const AnimationLeft = props => keyframes`
  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(${props.percentage > 100 ? '180' : (props.percentage * 3.6) - 180});
    transform: rotate(${props.percentage > 100 ? '180' : (props.percentage * 3.6) - 180}deg);
  }
`;

const CircularWrapper = styled.div`
  ${ProgressSharedStyling};
  
  width: 90px;
  height: 90px;
  line-height: 90px;
  background: none;
  margin: 0 auto;
  box-shadow: none;
  position: relative;
  
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid ${props => props.theme.colors.circularProgressBg};
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
  
  ${props => props.percentage < '51' && css`
    ${CircularRight} ${CircularColorFill} {
      animation: ${AnimationRight} 0.5s linear forwards;
    }
  `};
  ${props => props.percentage > '50' && css`
    ${CircularRight} ${CircularColorFill} {
      animation: ${AnimationRight} 0.5s linear forwards;
    }
    ${CircularLeft} ${CircularColorFill} {
      animation: ${AnimationLeft} 0.5s linear forwards 0.5s;
    }
  `};
  ${props => props.percentage >= '100' && css`
    ${CircularRight} ${CircularColorFill} {
      animation: ${AnimationRight} 0.5s linear forwards;
    }
    ${CircularLeft} ${CircularColorFill} {
      animation: ${AnimationLeft} 0.5s linear forwards 0.5s;
    }
  `};
`;

const CircularValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: ${TYPOGRAPHY.fontSizeMedium};
  line-height: ${TYPOGRAPHY.fontSizeMedium};
  text-align: center;
  height: 100%;
  text-transform: uppercase;
  color: ${props => props.theme.colors.circularProgress};
`;

const ProgressBar = (props: ProgressBarProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    progress: props.theme.progress,
  };
  const number = Number.parseInt(props.percentage, 10);
  const text = `${!Number.isNaN(number) ? number : '0'}%`;
  return (
    <ThemeProvider theme={theme}>
      <ProgressBarWrapper {...props}>
        {props.isCircular ?
          (
            <CircularWrapper percentage={number}>
              <CircularLeft className="Left">
                <CircularColorFill />
              </CircularLeft>
              <CircularRight className="Right">
                <CircularColorFill />
              </CircularRight>
              <CircularValue>
                {text}
              </CircularValue>
            </CircularWrapper>
          ) : (
            <LineProgressBarWrapper>
              <LineProgressBar
                percentage={number > 100 ? '100' : number}
              />
              <SROnly>{`${text} Complete`}</SROnly>
            </LineProgressBarWrapper>
          )}
        {props.children}
      </ProgressBarWrapper>
    </ThemeProvider>
  );
};

ProgressBar.defaultProps = {
  percentage: '0',
};

export default withTheme(ProgressBar);
