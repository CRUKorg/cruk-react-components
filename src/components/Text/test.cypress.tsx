/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper from '../TestWrapper';
import { Text } from '../';

const content = () => {
  return (
    <>
      <Text>This is text it defaults to a paragraph tag</Text>
      <Text marginBottom="l" paddingHorizontal="s">
        This is text with spacing props "marginBottom="l" paddingHorizontal="s"
      </Text>
      <Text as="span">This is text as a span tag</Text>
      <Text textColor="primary">Color is Primary</Text>
      <Text textColor="#ff0000">Color is custom colour</Text>
      <Text textSize="l">Text size l</Text>
    </>
  );
};

describe('Text', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled as we are testing with weird colours and SU2C colours which do not pass WCAG AA.
      },
    });
  });

  it('should match snapshot', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
