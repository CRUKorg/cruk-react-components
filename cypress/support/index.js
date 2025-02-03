import "cypress-axe";
import "cypress-real-events";

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
          if (name) {
            return cy.get(`#${name}`);
          } else {
            return cy.wrap($label).find("input, select, textarea");
          }
        });
    } else {
      return cy.contains("label", text).then(($label) => {
        const name = $label.attr("for");
        if (name) {
          return cy.get(`#${name}`);
        } else {
          return cy.wrap($label).find("input, select, textarea");
        }
      });
    }
  },
);
