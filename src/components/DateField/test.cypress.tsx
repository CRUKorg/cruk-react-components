/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Box, DateField } from '../';

const unControlledContent = () => (
  <>
    <Box backgroundColor="backgroundLight">
      <DateField
        dayName="birthDay"
        monthName="birthMonth"
        yearName="birthYear"
        day={'01'}
        month={'07'}
        year={'1990'}
        label="When were they born?"
        onChange={() => {}}
        onBlur={() => {}}
        onFocus={() => {}}
        errorMessage={'invalid birthday'}
      />
      <DateField
        day={'01'}
        month={'07'}
        year={'1990'}
        label="Date with all fields with errors"
        dayHasError={true}
        monthHasError={true}
        yearHasError={true}
        errorMessage={'Day month and year invalid'}
      />
    </Box>
  </>
);

describe('DateField', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{unControlledContent()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('should match snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestWrapper>{unControlledContent()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
