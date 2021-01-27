/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Step } from '../';

const BasicContent = () => {
  return <Step current={3} steps={['Account', 'Details', 'Activity', 'Motivation', 'Page']} />;
};

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
