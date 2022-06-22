// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";
import "cypress-plugin-tab";
import "cypress-plugin-tab";
import "cypress-axe";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/react";

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)

Cypress.Commands.add(
  "getInputByLabel",
  {
    prevSubject: "optional",
  },
  (subject, text) => {
    if (subject) {
      return cy
        .get(subject)
        .contains("label", text)
        .then(($label) => {
          const name = $label.attr("for");
          if (name) return cy.get(`#${name}`);
          cy.wrap($label).find("input, select, textarea");
        });
    } else {
      return cy.contains("label", text).then(($label) => {
        const name = $label.attr("for");
        if (name) return cy.get(`#${name}`);
        cy.wrap($label).find("input, select, textarea");
      });
    }
  }
);

if (Cypress.config("isInteractive")) {
  Cypress.Commands.add("matchImageSnapshot", () => {
    cy.log("Skipping snapshot");
  });
} else {
  addMatchImageSnapshotCommand();
}
