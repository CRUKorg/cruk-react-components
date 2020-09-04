import '@percy/cypress';

// Return input or select by label text. Could be called getFormElementByLabel but that very long.
Cypress.Commands.add('getInputByLabel', text =>
  cy.contains('label', text).then($label => {
    const name = $label.attr('for');
    if (name) return cy.get(`#${name}`);
    cy.wrap($label).find('input, select, textarea');
  }),
);
