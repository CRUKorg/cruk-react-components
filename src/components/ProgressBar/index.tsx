import React, { FC, ReactNode } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

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
} from './styles';

const DEFAULT_CIRCLE_SIZE = '90px';

type ProgressBarProps = {
  percentage: number;
  isCircular?: boolean;
  circleContents?: ReactNode;
  circleSize?: string;
  barColor?: string;
};

const ProgressBar: FC<ProgressBarProps> = props => {
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
            <ScreenReaderOnly>{descriptivePercentageString}</ScreenReaderOnly>
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
