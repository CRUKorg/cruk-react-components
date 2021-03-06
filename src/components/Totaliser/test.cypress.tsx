/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { Totaliser, Box, Text, su2cTheme, crukTheme } from '../';

const content = () => (
  <>
    <Box>
      <Totaliser total={22.5} giftAid={10.55} />
    </Box>
    <Box>
      <Totaliser total={0.01} target={100000} />
    </Box>
    <Box>
      <Totaliser total={99.99} target={100} giftAid={25} />
    </Box>
    <Box>
      <Totaliser total={32} target={100} giftAid={6.4} isCompact />
    </Box>
    <Box>
      <Totaliser total={120} giftAid={27.5} target={100} summaryMessage={<Text>cool</Text>} />
    </Box>
    <Box>
      <Totaliser total={120} giftAid={27.5} target={100} summaryMessage="cool" />
    </Box>
  </>
);

describe('Totaliser', () => {
  it('is accessible CRUK theme', () => {
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO cyan baground white text doesn't pass new designs to come
      },
    });
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
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
