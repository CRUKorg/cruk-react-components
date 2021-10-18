/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import { PopOver, Box, Button, Icon, su2cTheme, crukTheme } from "../";

const internalContent = () => (
  <Box padding="xxs">
    <Button appearance="text" aria-label="Facebook">
      <Icon name="facebookSquare" color="#4267b2" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="Twitter">
      <Icon name="twitterSquare" color="#1da1f2" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="WhatsApp">
      <Icon name="whatsappSquare" color="#4dc247" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="Facebook Messenger">
      <Icon name="messengerSquare" color="#288ef8" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="LinkedIn">
      <Icon name="linkedin" color="#0077b5" size="1.5rem" />
    </Button>
    <Button appearance="text" aria-label="Email">
      <Icon name="envelopeSquare" color="#00b6ed" size="1.5rem" />
    </Button>
  </Box>
);

const content = () => (
  <>
    <PopOver
      modalLabel="sharing options"
      modalContent={internalContent()}
      minWidth="23em"
    >
      <Button>
        <Icon name="share" />
        Share top
      </Button>
    </PopOver>
    <PopOver
      modalLabel="sharing options"
      position="topLeft"
      modalContent={internalContent()}
      minWidth="23em"
    >
      <Button>
        <Icon name="share" />
        Share topLeft
      </Button>
    </PopOver>
    <PopOver
      modalLabel="sharing options"
      position="bottom"
      modalContent={internalContent()}
      minWidth="23em"
    >
      <Button>
        <Icon name="share" />
        Share bottom
      </Button>
    </PopOver>
    <PopOver
      modalLabel="sharing options"
      position="bottomLeft"
      modalContent={internalContent()}
      minWidth="23em"
    >
      <Button>
        <Icon name="share" />
        Share bottomLeft
      </Button>
    </PopOver>
    <PopOver
      modalLabel="sharing options"
      position="left"
      modalContent={internalContent()}
      minWidth="23em"
    >
      <Button>
        <Icon name="share" />
        Share left
      </Button>
    </PopOver>
    <PopOver
      modalLabel="sharing options"
      position="right"
      modalContent={internalContent()}
      minWidth="23em"
    >
      <Button>
        <Icon name="share" />
        Share right
      </Button>
    </PopOver>
  </>
);

describe("Popover", () => {
  it("is accessible CRUK theme", () => {
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.contains("Share left").click();
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible SU2C theme", () => {
    mount(<TestThemeWrapper theme={su2cTheme}>{content()}</TestThemeWrapper>);
    cy.contains("Share left").click();
    cy.injectAxe();
    cy.checkA11y("body", {
      rules: {
        "color-contrast": { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it.only("should match snapshot share top", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.contains("Share top").click();
    cy.get('button[aria-label="Facebook"]').should("be.visible");
    cy.get("body").type("{esc}");
    cy.get('button[aria-label="Facebook"]').should("not.exist");
  });

  it("should match snapshot share top", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.contains("Share top").click();
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.get("body").first().matchImageSnapshot();
  });

  it("should match snapshot share left", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.contains("Share left").click();
    cy.get("body").first().matchImageSnapshot();
  });

  it("should match snapshot share right", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.contains("Share right").click();
    cy.get("body").first().matchImageSnapshot();
  });

  it("should match snapshot share bottom", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.contains("Share bottom").click();
    cy.get("body").first().matchImageSnapshot();
  });

  it("should match snapshot share bottomLeft", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.contains("Share bottomLeft").click();
    cy.get("body").first().matchImageSnapshot();
  });

  it("should match snapshot share topLeft", () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document().its("fonts.status").should("equal", "loaded");
    cy.contains("Share topLeft").click();
    cy.get("body").first().matchImageSnapshot();
  });
});
