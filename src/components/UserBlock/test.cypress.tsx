/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { UserBlock, Icon } from '../';

const content = () => {
  return (
    <>
      <UserBlock />
      <UserBlock name="Sam Smith" size="s" />
      <UserBlock
        name="Sam Smith"
        size="l"
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

describe('UserBlock', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('should match snapshot', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('[src="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"]').should($img => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      '[src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/icon-avatar-S.png"]',
    ).should($img => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
