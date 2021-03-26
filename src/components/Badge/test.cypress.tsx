/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Badge, Icon } from '../';

const content = () => {
  return (
    <>
      <Badge>
        <Icon name="poundSign" />
      </Badge>
      <Badge backgroundColor="secondary">
        <Icon name="search" />
      </Badge>
      <Badge backgroundColor="tertiary">
        <Icon name="eventName" />
      </Badge>
      <Badge backgroundColor="#8bc34a">2</Badge>
      <Badge backgroundColor="textLight" textColor="tertiary" borderColor="tertiary">
        <Icon name="comment" />
      </Badge>
      <Badge>This is text</Badge>
    </>
  );
};

describe('Badge', () => {
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
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
