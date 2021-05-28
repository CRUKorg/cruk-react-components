/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { Avatar, crukTheme, su2cTheme } from '../';

const content = () => {
  return (
    <>
      <Avatar />
      <Avatar name="Sam" size="s" aria-label="sam's profile" />
      <Avatar name="Sam" size="m" aria-label="sam's profile" />
      <Avatar name="Sam" size="l" aria-label="sam's profile" />
      <Avatar name="Sam" size="xl" aria-label="sam's profile" />
      <Avatar name="Sam" aria-label="sam's profile" url="https://via.placeholder.com/300/2e008b/d9318a?text=avatar" />
    </>
  );
};

describe('Avatar', () => {
  it('is accessible CRUK theme', () => {
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('is accessible SU2C theme', () => {
    mount(<TestThemeWrapper theme={su2cTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match snapshot', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get('[src="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"]').should($img => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      '[src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/icon-avatar-S.png"]',
    ).should($img => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      '[src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/su2c/icon-avatar-S.png"]',
    ).should($img => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      '[src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/icon-avatar-Anonymous.png"]',
    ).should($img => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.get(
      '[src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/su2c/icon-avatar-Anonymous.png"]',
    ).should($img => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
