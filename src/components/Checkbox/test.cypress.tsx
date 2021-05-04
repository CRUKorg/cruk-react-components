/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper from '../TestWrapper';
import { Box, Checkbox } from '../';

const unControlledContent = () => (
  <>
    <Box>
      <Checkbox name="example" value="one" checked={true}>
        Option one
      </Checkbox>
    </Box>
    <Box>
      <Checkbox name="example" value="two">
        Option two
      </Checkbox>
    </Box>
  </>
);

describe('Checkbox', () => {
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
