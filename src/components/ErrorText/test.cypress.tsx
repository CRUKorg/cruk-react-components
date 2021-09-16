/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { ErrorText, crukTheme, su2cTheme } from '../';

const content = () => {
  return (
    <>
      <ErrorText>This field is required</ErrorText>
    </>
  );
};

describe('ErrorText', () => {
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
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});

describe('Error Styles', ()=>{
  it('should have Font size 16px on all devices',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,750)
    cy.contains('This field is required')
    .should('have.css','font-size','16px')
    cy.viewport(992,1028)
    cy.contains('This field is required')
    .should('have.css','font-size','16px')
  })
  it('should belong to Arial Font Family',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.contains('This field is required')
    .should('have.css','font-family')
    .and('contain','Arial')
  })
})