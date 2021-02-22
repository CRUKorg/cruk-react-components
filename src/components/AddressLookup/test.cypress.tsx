/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { AddressLookup, su2cTheme } from '../';

const Content = () => {
  return (
    <fieldset>
      <legend>Your Address</legend>
      <div style={{ height: '300px' }}>
        <AddressLookup
          countries={['GBR']}
          apiKey="MG17-ZD93-FF33-KF13"
          onAddressSelected={() => {}}
          onChange={() => {}}
        />
      </div>
    </fieldset>
  );
};

describe('AddressLookup', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/Find/**', {
      Items: [
        {
          Description: 'London',
          Id: '1',
          Text: 'N10 Logistics',
          Type: 'Address',
        },
        {
          Description: 'High Road, London - 14 Addresses',
          Id: '2',
          Text: 'N17 0AB',
          Type: 'Postcode',
        },
      ],
    }).as('find');
  });

  it('can find address and is accessible', () => {
    mount(
      <TestWrapper>
        <Content />
      </TestWrapper>,
    );
    cy.get('body')
      .first()
      .within($list => {
        cy.getInputByLabel('Home address')
          .type('N10')
          .blur();
        cy.contains('li', 'N17 0AB High Road, London - 14 Addresses').should('exist');
      });
    cy.get('@find')
      .should('have.property', 'url')
      .and('contain', 'Countries=GBR');
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('should match CRUK snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    mount(
      <TestThemeWrapper>
        <Content />
      </TestThemeWrapper>,
    );
    cy.getInputByLabel('Home address')
      .type('N10')
      .blur();
    cy.contains('li', 'N17 0AB High Road, London - 14 Addresses').should('exist');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
  it('should match SU2C snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    mount(
      <TestThemeWrapper theme={su2cTheme}>
        <Content />
      </TestThemeWrapper>,
    );
    cy.getInputByLabel('Home address')
      .type('N10')
      .blur();
    cy.contains('li', 'N17 0AB High Road, London - 14 Addresses').should('exist');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
