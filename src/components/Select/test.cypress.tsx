/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Select, Box } from '../';

const content = () => {
  return (
    <>
      <Box>
        <Select value="" label="Disabled option" onChange={event => {}}>
          <option disabled value="">
            --Please choose an option--
          </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
      </Box>
      <Box>
        <Select value="" label="Disabled control" onChange={event => {}} disabled>
          <option disabled value="">
            --Please choose an option--
          </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
      </Box>
      <Box>
        <Select required hasError={true} label="Has error" onChange={event => {}}>
          <option value="dog">Dog</option>
          <option value="red_panda">Red panda</option>
          <option value="axolotl">Axolotl</option>
        </Select>
      </Box>
      <Box>
        <Select required errorMessage="This felid is required ☹️" label="Error message" onChange={event => {}}>
          <option value="cat">Cat</option>
        </Select>
      </Box>
    </>
  );
};

describe('Select', () => {
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
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});
