/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { UserBlock, Icon } from '../';

const content = () => {
  return (
    <>
      <UserBlock />
      <UserBlock name="Sam Smith" size="small" />
      <UserBlock
        name="Sam Smith"
        size="large"
        extra={
          <>
            <Icon name="clock" />
            Just now
          </>
        }
      />
      <UserBlock
        name="Sam Smith"
        avatarUrl="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"
        extra="(Managed by My Mum)"
      />
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
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
