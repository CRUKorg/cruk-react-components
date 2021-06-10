import React, { FunctionComponent } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { StepBar, StepItem, StepList, StepTick, StepWrapper } from './styles';

export type StepProps = {
  /** current step number */
  current: number;
  /** list of step  */
  steps: string[];
};

// TODO think about AriaAttributes and how we want to pass them down

/**
 *
 * Visually show where a user is in a multi-step process. Calculate the number of steps and the width of each step required to fit the progress bar in the parent container.
 * Step display progress through a sequence by breaking it up into multiple logical steps. They may also be used for navigation.
 */
const Step: FunctionComponent<StepProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const totalSteps: number = Array.isArray(props.steps) ? Object.keys(props.steps).length : 0;

  return (
    <ThemeProvider theme={theme}>
      <StepWrapper>
        <StepList total={totalSteps}>
          {Array.isArray(props.steps) &&
            props.steps.map((step, i) => (
              <StepItem key={i} active={i + 1 === props.current} done={i + 1 < props.current}>
                <StepBar>{i + 1 < props.current && <StepTick />}</StepBar>
                {step}
              </StepItem>
            ))}
        </StepList>
        {props.children}
      </StepWrapper>
    </ThemeProvider>
  );
};

Step.defaultProps = {
  current: 1,
};

export default Step;
