/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import { TestThemeWrapper } from '../TestWrapper';
import { Button, Radio, Heading, su2cTheme, crukTheme } from '../';
import { Label } from '../LabelWrapper/styles';
import { Fieldset } from '../DateField/styles';

const uncontrolledRadio = () => (
  <div id="radios">
    <Radio name="example1" label="Choose an option" value="one">
      Option one
    </Radio>
    <Radio name="example2" label="Choose an option" value="two">
      Option two
    </Radio>
    <Button>Click me</Button>
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
