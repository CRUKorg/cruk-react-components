/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { TestThemeWrapper } from '../TestWrapper';
import { RadioGroup, crukTheme2, su2cTheme } from '../';

const uncontrolledContent = () => (
  <div id="radios">
    <RadioGroup
      legend="Email"
      name="email"
      attributes={[
        { option: 'Yes', value: 'yes' },
        { option: 'No', value: 'no' },
      ]}
      checkedState={'yes'}
    />

    <RadioGroup
      legend="Telephone"
      name="phone"
      attributes={[
        { option: 'Yes', value: 'yes' },
        { option: 'No', value: 'no' },
      ]}
      checkedState={'no'}
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
        checkedState={selectedEmail}
      />

      <RadioGroup
        legend="Telephone"
        name="phone"
        onChange={e => setSelectedPhone(e.target.value)}
        attributes={[
          { option: 'Yes', value: 'yes' },
          { option: 'No', value: 'no' },
        ]}
        checkedState={selectedPhone}
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
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match CRUK snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestThemeWrapper>{uncontrolledContent()}</TestThemeWrapper>);
    cy.wait(300); //annoying font loading flake on CI
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
  it('should match CRUK2 snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestThemeWrapper theme={crukTheme2}>{uncontrolledContent()}</TestThemeWrapper>);
    cy.wait(300); //annoying font loading flake on CI
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
  it('should match SU2C snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    cy.wait(300); //annoying font loading flake on CI
    mount(<TestThemeWrapper theme={su2cTheme}>{uncontrolledContent()}</TestThemeWrapper>);
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
});
