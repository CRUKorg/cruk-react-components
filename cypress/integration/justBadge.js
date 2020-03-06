const components = ['Badge'];

const selectComponent = (componentName, brand) => {
  cy.get('head').invoke('append', '<style type="text/css">header {display: none;}</style>');
  cy.get('[aria-label="Example code preview"]')
    .first()
    .matchImageSnapshot(`${brand}_${componentName}`);
};

components.forEach(componentName => {
  it(`CRUK ${componentName} Should match snapshot`, () => {
    cy.visit(`/${componentName.toLowerCase()}`);
    selectComponent(componentName, 'cruk');
  });

  // it(`SU2C ${componentName} Should match snapshot`, () => {
  //   cy.visit(`/${componentName.toLowerCase()}`);
  //   cy.contains('button', 'Switch theme').click();
  //   selectComponent(componentName, 'su2c');
  // });

  // it('has no detectable a11y violations', () => {
  //   cy.visit(`/${componentName.toLowerCase()}`);
  //   cy.injectAxe();
  //   cy.checkA11y('[aria-label="Example code preview"]', {
  //     rules: {
  //       'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
  //     },
  //   });
  // });
});
