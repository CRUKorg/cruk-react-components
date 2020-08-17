/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper, { TestCrukWrapper } from '../TestWrapper';
import { RadioGroup } from '../';

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
      <TestCrukWrapper>
        <Content />
      </TestCrukWrapper>,
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
        <Content />
      </TestWrapper>,
    );
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
