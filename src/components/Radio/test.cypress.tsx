/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import { TestThemeWrapper } from '../TestWrapper';
import { Radio, Heading, su2cTheme, crukTheme } from '../';

const uncontrolledRadio = () => (
  <div id="radios">
    <Radio name="example1" value="one" checked={true}>
      Option one
    </Radio>
    <Radio name="example1" value="two">
      Option two
    </Radio>
  </div>
);

const Content = () => {
  const [selected, setSelected] = React.useState('one');

  return (
    <>
      <Radio
        name="example1"
        value="one"
        checked={selected === 'one'}
        onClick={() => {
          setSelected('one');
        }}
      >
        Option one
      </Radio>

      <Radio
        name="example1"
        value="two"
        checked={selected === 'two'}
        onClick={() => {
          setSelected('two');
        }}
      >
        Option two
      </Radio>

      <Heading h2>Selected value {selected}</Heading>
    </>
  );
};

describe('Radio', () => {
  it('is accessible CRUK theme', () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>
        <Content />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('is accessible SU2C theme', () => {
    mount(
      <TestThemeWrapper theme={su2cTheme}>
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
    mount(<TestThemeWrapper>{uncontrolledRadio()}</TestThemeWrapper>);
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
    mount(<TestThemeWrapper theme={su2cTheme}>{uncontrolledRadio()}</TestThemeWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
});
