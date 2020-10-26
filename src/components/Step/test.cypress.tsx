/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Step } from '../';

const BasicContent = () => {
  return <Step current={3} steps={['Account', 'Details', 'Activity', 'Motivation', 'Page']} />;
};

// TODO some tests interacting with compoent

// const Content = () => {
//   const [step, setStep] = React.useState(1);
//   const steps = ['Account', 'Details', 'Activity', 'Motivation', 'Page'];

//   return (
//     <>
//       <Step current={3} steps={['Account', 'Details', 'Activity', 'Motivation', 'Page']} />
//       <Step current={3} steps={['Step1', 'Step2', 'Step3', 'Step4', 'Step5', 'Step6']} />
//       <Box>
//         <Heading h2 marginTop="medium">
//           Create your Giving Page
//         </Heading>
//         <Step current={step} steps={steps} />
//         <Heading h1>{steps[step - 1]} Page</Heading>
//         <Button onClick={() => setStep(step - 1)}>Prev</Button>
//         <Button onClick={() => setStep(step + 1)} appearance="primary">
//           Next
//         </Button>
//       </Box>
//     </>
//   );
// };

describe('Step', () => {
  it('is accessible', () => {
    mount(
      <TestWrapper>
        <BasicContent />
      </TestWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('should match snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(
      <TestWrapper>
        <BasicContent />
      </TestWrapper>,
    );
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
