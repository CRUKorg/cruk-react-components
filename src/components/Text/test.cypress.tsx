/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Text } from '../';

const content = () => {
  return (
    <>
      <Text>This is text it defaults to a paragraph tag</Text>
      <Text marginBottom="large" paddingHorizontal="small">
        This is text with spacing props "marginBottom="large" paddingHorizontal="small"
      </Text>
      <Text as="span">This is text as a span tag</Text>
      <Text textColor="primary">Color is Primary</Text>
      <Text textColor="#ff0000">Color is Primary</Text>
      <Text textSize="large">Text size large</Text>
    </>
  );
};

describe('Text', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match snapshot', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.wait(200); //annoying font loading flake on CI
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
