/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper, { TestCrukWrapper } from '../TestWrapper';
import { Radio, Heading } from '../';

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
