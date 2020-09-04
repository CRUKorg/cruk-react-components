/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { TestThemeWrapper } from '../TestWrapper';
import { Radio, Heading, crukTheme2, su2cTheme } from '../';

const uncontrolledRadio = () => (
  <div id="radios">
    <Radio name="example1" value="one" checked={true}>
      Option one
    </Radio>
    <Radio name="example1" value="two">
      Option one
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
    mount(<TestThemeWrapper>{uncontrolledRadio()}</TestThemeWrapper>);
    cy.wait(300); //annoying font loading flake on CI
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
  it('should match CRUK2 snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestThemeWrapper theme={crukTheme2}>{uncontrolledRadio()}</TestThemeWrapper>);
    cy.wait(300); //annoying font loading flake on CI
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
  it('should match SU2C snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    cy.wait(300); //annoying font loading flake on CI
    mount(<TestThemeWrapper theme={su2cTheme}>{uncontrolledRadio()}</TestThemeWrapper>);
    cy.get('#radios')
      .first()
      .matchImageSnapshot();
  });
});
