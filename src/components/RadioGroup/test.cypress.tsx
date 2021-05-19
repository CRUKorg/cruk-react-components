/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import { TestThemeWrapper } from '../TestWrapper';
import { RadioGroup, su2cTheme } from '../';

const uncontrolledContent = () => (
  <div id="radios">
    <RadioGroup
      legend="Email"
      name="email"
      attributes={[
        { option: 'Yes', value: 'yes' },
        { option: 'No', value: 'no' },
      ]}
      selectedValue={'yes'}
    />

    <RadioGroup
      legend="Telephone"
      name="phone"
      attributes={[
        { option: 'Yes', value: 'yes' },
        { option: 'No', value: 'no' },
      ]}
      selectedValue={'no'}
    />
  </div>
);

const Content = () => {
  const [selectedEmail, setSelectedEmail] = React.useState('yes');
  const [selectedPhone, setSelectedPhone] = React.useState('no');

  return (
    <>
      <RadioGroup
        legend="Email"
        name="email"
        onChange={e => setSelectedEmail(e.target.value)}
        attributes={[
          { option: 'Yes', value: 'yes' },
          { option: 'No', value: 'no' },
        ]}
        selectedValue={selectedEmail}
      />

      <RadioGroup
        legend="Telephone"
        name="phone"
        onChange={e => setSelectedPhone(e.target.value)}
        attributes={[
          { option: 'Yes', value: 'yes' },
          { option: 'No', value: 'no' },
        ]}
        selectedValue={selectedPhone}
      />
    </>
  );
};

describe('RadioGroup', () => {
  it('is accessible', () => {
    mount(
      <TestThemeWrapper>
        <Content />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('should match CRUK snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestThemeWrapper>{uncontrolledContent()}</TestThemeWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
  it('should match SU2C snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestThemeWrapper theme={su2cTheme}>{uncontrolledContent()}</TestThemeWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
});
