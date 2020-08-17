/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { ProgressBar } from '../';

const content = () => {
  return (
    <>
      <ProgressBar percentage={0} />
      <ProgressBar percentage={20} />
      <ProgressBar percentage={150} />
      <ProgressBar percentage={0} isCircular />
      <ProgressBar percentage={20} isCircular />
      <ProgressBar percentage={150} isCircular />
    </>
  );
};

describe('ProgressBar', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
