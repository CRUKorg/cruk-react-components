import "cypress-plugin-tab";
import "cypress-axe";
import "./commands";

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
