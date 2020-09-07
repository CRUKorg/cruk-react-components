/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { TextField, Box, Heading, Icon, Button } from '../';

const content = () => {
  return (
    <>
      <section>
        <Heading h3 textSize="large">
          Text field
        </Heading>
        <Box>
          <TextField label="First name" type="text" name="firstName" />
        </Box>
      </section>
      <section>
        <Heading h3 textSize="large" paddingTop="medium">
          With a placeholder
        </Heading>
        <Box>
          <TextField label="Your favourite food" type="text" name="yourFavouriteFood" placeholder="Cookies" />
        </Box>
      </section>
      <section>
        <Heading h3 textSize="large" paddingTop="medium">
          With hint text
        </Heading>
        <Box>
          <TextField label="This is the label" type="text" name="hintText" hintText="This is the hint text" />
        </Box>
      </section>
      <section>
        <Heading h3 textSize="large" paddingTop="medium">
          With extra bits
        </Heading>
        <Box>
          <TextField label="Fundraising target" type="text" name="fundraisingTarget" extraLeft="£" />
        </Box>
        <Box>
          <TextField
            label="Search"
            type="text"
            name="search"
            extraRight={
              <Button appearance="text" aria-label="search">
                <Icon name="search" />
              </Button>
            }
          />
        </Box>
        <Box>
          <TextField
            label="Fundraising page"
            type="text"
            name="fundraisingPage"
            extraTop={`https://fundraise.cancerresearchuk.org/page/`}
          />
        </Box>
        <Box>
          <TextField
            label="Email address"
            type="text"
            name="emailAddress"
            extraBottom="Wash your hands for 20 seconds"
          />
        </Box>
      </section>
      <section>
        <Heading h3 textSize="large" paddingTop="medium">
          With error message
        </Heading>
        <Box>
          <TextField
            label="Phone number"
            type="text"
            name="phoneNumber"
            hasError
            errorMessage="You have made more than one daily outing for exercise"
          />
        </Box>
      </section>
      <section>
        <Heading h3 textSize="large" paddingTop="medium">
          Required
        </Heading>
        <Box>
          <TextField label="Number of cats" type="text" name="numberOfCats" required />
        </Box>
      </section>
      <section>
        <Heading h3 textSize="large" paddingTop="medium">
          Disabled
        </Heading>
        <Box>
          <TextField label="Favourite pasta type" type="text" name="favouritePastaType" value="Spaghetti" disabled />
        </Box>
      </section>
    </>
  );
};

describe('TextField', () => {
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
