/// <reference types="cypress" />

import React, { ChangeEvent } from "react";
import { mount } from "cypress/react";

import { TestThemeWrapper } from "../AllThemesWrapper";
import {
  RadioConsent,
  su2cTheme,
  crukTheme,
  bowelbabeTheme,
  rflTheme,
} from "..";

const Content = () => {
  const [selectedEmail, setSelectedEmail] = React.useState("yes");
  const [selectedPhone, setSelectedPhone] = React.useState("no");

  return (
    <>
      <RadioConsent
        legend="Email"
        name="email"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSelectedEmail(e.target.value)
        }
        attributes={[
          { option: "Yes", value: "yes" },
          { option: "No", value: "no" },
        ]}
        selectedValue={selectedEmail}
      />

      <RadioConsent
        legend="Telephone"
        name="phone"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSelectedPhone(e.target.value)
        }
        attributes={[
          { option: "Yes", value: "yes" },
          { option: "No", value: "no" },
        ]}
        selectedValue={selectedPhone}
      />
    </>
  );
};

describe("RadioConsent", () => {
  it("is accessible CRUK theme", () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>
        <Content />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible RFL theme", () => {
    mount(
      <TestThemeWrapper theme={rflTheme}>
        <Content />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });

  it("is accessible SU2C theme", () => {
    mount(
      <TestThemeWrapper theme={su2cTheme}>
        <Content />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y("body", {
      rules: {
        "color-contrast": { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it("is accessible Bowelbabe theme", () => {
    mount(
      <TestThemeWrapper theme={bowelbabeTheme}>
        <Content />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y("body");
  });
});
