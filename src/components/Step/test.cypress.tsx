/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { Step, crukTheme, su2cTheme } from '../';

const BasicContent = () => {
  return <Step current={3} steps={['Account', 'Details', 'Activity', 'Motivation', 'Page']} />;
};

describe('Step', () => {
  it('is accessible CRUK theme', () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>
        <BasicContent />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('is accessible SU2C theme', () => {
    mount(
      <TestThemeWrapper theme={su2cTheme}>
        <BasicContent />
      </TestThemeWrapper>,
    );
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
