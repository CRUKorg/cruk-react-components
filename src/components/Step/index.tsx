import React, { type ReactNode } from "react";

/**
 *
 * Visually show where a user is in a multi-step process. Calculate the number of steps and the width of each step required to fit the progress bar in the parent container.
 * Step display progress through a sequence by breaking it up into multiple logical steps. They may also be used for navigation.
 */
export function Step({
  steps = [],
  current = 1,
  children,
}: {
  /** current step number */
  current: number;
  /** list of step  */
  steps: string[];
  children?: ReactNode;
}) {
  const totalSteps: number = Array.isArray(steps)
    ? Object.keys(steps).length
    : 0;
  const itemWidth = `${totalSteps > 0 ? 100 / totalSteps : 100}%`;

  return (
    <div className="component-step">
      <ul className="step-list">
        {Array.isArray(steps) &&
          steps.map((step, i) => (
            <li
              className="step-item"
              key={`step${i}`}
              data-is-active={i + 1 === current}
              data-is-done={i + 1 < current}
              style={{ "--_step-item-width": itemWidth } as React.CSSProperties}
            >
              <span className="step-bar">
                {i + 1 < current && <span className="step-tick" />}
              </span>
              {step}
            </li>
          ))}
      </ul>
      {children}
    </div>
  );
}
export default Step;
