/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Avatar } from '../';

const content = () => {
  return (
    <>
      <Avatar />
      <Avatar name="Sam" size="small" />
      <Avatar name="Sam" size="medium" />
      <Avatar name="Sam" size="large" />
      <Avatar name="Sam" size="extraLarge" />
      <Avatar name="Sam" url="https://via.placeholder.com/300/2e008b/d9318a?text=avatar" />
    </>
  );
};

describe('Avatar', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('should match snapshot', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get('[src="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"]').should($img => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      '[src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/icon-avatar-S.png"]',
    ).should($img => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
    cy.wait(300); //annoying font loading flake on CI
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
