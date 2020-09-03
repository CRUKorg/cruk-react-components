/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Box, Text } from '../';

const content = () => {
  return (
    <>
      <Box>This is box</Box>
      <Box backgroundColor="primary">
        <Text textColor="textLight">This is box</Text>
      </Box>
      <Box backgroundColor="secondary">
        <Text textColor="textLight">This is box</Text>
      </Box>
      <Box backgroundColor="tertiary">
        <Text textColor="textLight">This is box</Text>
      </Box>
      <Box backgroundColor="#fdc02f">
        <Text textColor="textLight">This is box</Text>
      </Box>
      <Box backgroundColor="secondary">
        <Text textColor="textLight">default spacing</Text>
      </Box>
      <Box backgroundColor="secondary" paddingVertical="extraLarge" paddingBottom="extraSmall">
        <Text textColor="textLight">paddingVertical="extraLarge" paddingBottom="extraSmall"</Text>
      </Box>
      <Box backgroundColor="primary" marginVertical="large" marginLeft="small">
        <Text textColor="textLight">marginVertical="large" marginLeft="small"</Text>
      </Box>
    </>
  );
};

describe('Box', () => {
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
      .matchImageSnapshot();
  });
});
