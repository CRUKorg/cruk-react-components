import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

// TODO: change snapshot failure threshold to fix text aliasing issues

// addMatchImageSnapshotCommand(({
//   failureThreshold: 0.03, // threshold for entire image
//   failureThresholdType: 'percent', // percent of image or number of pixels
//   customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
//   capture: 'viewport', // capture viewport in screenshot
// });

// Return input or select by label text. Could be called getFormElementByLabel but that very long.
Cypress.Commands.add('getInputByLabel', (text) =>
  cy.contains('label', text).then(($label) => {
    const name = $label.attr('for');
    if (name) return cy.get(`#${name}`);
    cy.wrap($label).find('input, select, textarea');
  })
);
