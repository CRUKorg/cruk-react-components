import React, { type ReactNode } from "react";
import { ThemeProvider, useTheme } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";

import { StepBar, StepItem, StepList, StepTick, StepWrapper } from "./styles";

export type StepProps = {
  /** current step number */
  current: number;
  /** list of step  */
  steps: string[];
  children?: ReactNode;
};

// TODO think about AriaAttributes and how we want to pass them down

/**
 *
 * Visually show where a user is in a multi-step process. Calculate the number of steps and the width of each step required to fit the progress bar in the parent container.
 * Step display progress through a sequence by breaking it up into multiple logical steps. They may also be used for navigation.
 */
export function Step({ steps = [], current = 1, children }: StepProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const totalSteps: number = Array.isArray(steps)
    ? Object.keys(steps).length
    : 0;

  return (
    <ThemeProvider theme={theme}>
      <StepWrapper>
        <StepList $total={totalSteps}>
          {Array.isArray(steps) &&
            steps.map((step, i) => {
              const key = `step${i}`;
              return (
                <StepItem
                  key={key}
                  $active={i + 1 === current}
                  $done={i + 1 < current}
                >
                  <StepBar>{i + 1 < current && <StepTick />}</StepBar>
                  {step}
                </StepItem>
              );
            })}
        </StepList>
        {children}
      </StepWrapper>
    </ThemeProvider>
  );
}
export default Step;
