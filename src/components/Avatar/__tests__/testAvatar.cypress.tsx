/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../../TestWrapper';
import { Avatar } from '../../';

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
      .matchImageSnapshot({
        customSnapshotsDir: './cypress/snapshots',
        customDiffDir: './cypress/snapshots/diff',
      });
  });
});
