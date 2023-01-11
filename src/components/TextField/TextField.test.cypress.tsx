/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import {
  TextField,
  Box,
  Heading,
  IconFa,
  Button,
  crukTheme,
  su2cTheme,
} from "..";

const content = () => (
  <>
    <section>
      <Heading h3 textSize="l">
        Text field
      </Heading>
      <Box>
        <TextField label="First name" type="text" name="firstName" />
      </Box>
    </section>
    <section>
      <Heading h3 textSize="l" paddingTop="m">
        With a placeholder
      </Heading>
      <Box>
        <TextField
          label="Your favourite food"
          type="text"
          name="yourFavouriteFood"
          placeholder="Cookies"
        />
      </Box>
    </section>
    <section>
      <Heading h3 textSize="l" paddingTop="m">
        With hint text
      </Heading>
      <Box>
        <TextField
          label="This is the label"
          type="text"
          name="hintText"
          hintText="This is the hint text"
        />
      </Box>
    </section>
    <section>
      <Heading h3 textSize="l" paddingTop="m">
        With extra bits
      </Heading>
      <Box>
        <TextField
          label="Fundraising target"
          type="text"
          name="fundraisingTarget"
          extraLeft="£"
        />
      </Box>
      <Box>
        <TextField
          label="Search"
          type="text"
          name="search"
          extraRight={
            <Button appearance="tertiary" aria-label="search">
              <IconFa faIcon={faSearch} />
            </Button>
          }
        />
      </Box>
      <Box>
        <TextField
          label="Fundraising page"
          type="text"
          name="fundraisingPage"
          extraTop="https://fundraise.cancerresearchuk.org/page/"
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
      <Heading h3 textSize="l" paddingTop="m">
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
      <Heading h3 paddingTop="m">
        Is Valid Indicator
      </Heading>
      <Box>
        <TextField
          label="Phone number"
          type="text"
          name="phoneNumber"
          isValid
          isValidVisible
        />
      </Box>
    </section>
    <section>
      <Heading h3 paddingTop="m">
        Is Invalid Indicator
      </Heading>
      <Box>
        <TextField
          label="Phone number"
          type="text"
          name="phoneNumber"
          isValid={false}
          isInvalidVisible
        />
      </Box>
    </section>
    <section>
      <Heading h3 paddingTop="m">
        Required
      </Heading>
      <Box>
        <TextField
          label="Number of cats"
          type="text"
          name="numberOfCats"
          required
        />
      </Box>
    </section>
    <section>
      <Heading h3 textSize="l" paddingTop="m">
        Disabled
      </Heading>
      <Box>
        <TextField
          label="Favourite pasta type"
          type="text"
          name="favouritePastaType"
          value="Spaghetti"
          disabled
        />
      </Box>
    </section>
  </>
);

describe("TextField", () => {
  it("is accessible CRUK theme", () => {
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible SU2C theme", () => {
    mount(<TestThemeWrapper theme={su2cTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y("body", {
      rules: {
        "color-contrast": { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it("should match snapshot", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get("body").first().matchImageSnapshot();
  });
});
