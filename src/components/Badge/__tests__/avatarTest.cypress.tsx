/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { ThemeProvider } from 'styled-components';

import { Badge, Heading, crukTheme, crukTheme2, su2cTheme } from '../../index';

const content = () => {
  return (
    <>
      <Badge>3</Badge>
    </>
  );
};

const themedContent = () => (
  <>
    <Heading>CRUK Theme</Heading>
    <ThemeProvider theme={crukTheme}>{content()}</ThemeProvider>
    <Heading>CRUK 2 Theme</Heading>
    <ThemeProvider theme={crukTheme2}>{content()}</ThemeProvider>
    <Heading>SU2C Theme</Heading>
    <ThemeProvider theme={su2cTheme}>{content()}</ThemeProvider>
  </>
);

describe('Progress Bar', () => {
  it('is accessible', () => {
    mount(<>{themedContent()}</>);
    cy.injectAxe();
    cy.checkA11y('[aria-label="Example code preview"]', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });
});
