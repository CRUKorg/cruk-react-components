/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { Text, su2cTheme, crukTheme } from '../';

const content = () => {
  return (
    <>
      <Text>This is text it defaults to a paragraph tag</Text>
      <Text marginBottom="l" paddingHorizontal="s">
        This is text with spacing props "marginBottom="l" paddingHorizontal="s"
      </Text>
      <Text as="span">This is text as a span tag</Text>
      <Text textColor="primary">Color is Primary</Text>
      <Text textColor="#aa0000">Color is custom colour</Text>
      <Text textSize="l">Text size l</Text>
    </>
  );
};

describe('Text', () => {
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

describe('Text Format - CRUK',() =>{
  it('should have font family Arial',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.contains("This is text it defaults to a paragraph")
    .should('have.css','font-family')
    .and('contain','Arial')
})
  it('should have font size 16px',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.contains("This is text it defaults to a paragraph")
    .should('have.css','font-size','16px')
  })
  it('should have font weight 500',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.contains("Color")
    .should('have.css','font-weight','500')
  })
})
