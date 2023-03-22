/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  faShareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faFacebookSquare,
  faTwitterSquare,
  faWhatsappSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import TestWrapper, { TestThemeWrapper } from "../TestWrapper";
import {
  PopOver,
  Box,
  Button,
  IconFa,
  su2cTheme,
  crukTheme,
  bowelbabeTheme,
} from "..";

const internalContent = () => (
  <Box padding="xxs">
    <Button appearance="tertiary" aria-label="Facebook">
      <IconFa faIcon={faFacebookSquare} color="#4267b2" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="Twitter">
      <IconFa faIcon={faTwitterSquare} color="#1da1f2" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="WhatsApp">
      <IconFa faIcon={faWhatsappSquare} color="#4dc247" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="Facebook Messenger">
      <IconFa faIcon={faFacebookMessenger} color="#288ef8" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="LinkedIn">
      <IconFa faIcon={faLinkedin} color="#0077b5" size="1.5rem" />
    </Button>
    <Button appearance="tertiary" aria-label="Email">
      <IconFa faIcon={faEnvelopeSquare} color="#00b6ed" size="1.5rem" />
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
        <IconFa faIcon={faShareAlt} />
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
        <IconFa faIcon={faShareAlt} />
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
        <IconFa faIcon={faShareAlt} />
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
        <IconFa faIcon={faShareAlt} />
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
        <IconFa faIcon={faShareAlt} />
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
        <IconFa faIcon={faShareAlt} />
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

  it("is accessible Bowelbabe theme", () => {
    mount(
      <TestThemeWrapper theme={bowelbabeTheme}>{content()}</TestThemeWrapper>
    );
    cy.contains("Share left").click();
    cy.injectAxe();
    cy.checkA11y("body");
  });

  // eslint-disable-next-line jest/no-focused-tests
  it.only("should match snapshot share top and open content", () => {
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
