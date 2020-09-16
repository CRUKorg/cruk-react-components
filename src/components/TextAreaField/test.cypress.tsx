/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Box, Heading, TextAreaField } from '../';

const content = () => {
  return (
    <>
      <section>
        <Heading h3>TextAreaField</Heading>
        <Box>
          <TextAreaField
            label="Tell us more about your fundraising"
            name="firstName"
            defaultValue="I am baking cakes"
          />
        </Box>
      </section>
    </>
  );
};

describe('TextAreaField', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because error text on grey background doesn't pass WCAG AA currently under discussion.
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
