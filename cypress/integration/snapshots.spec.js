const components = [
  'Avatar',
  'Badge',
  'Box',
  'Button',
  'Checkbox',
  'Collapse',
  'ErrorText',
  'Heading',
  'Icon',
  'Loader',
  'Modal',
  'Pagination',
  'PopOver',
  'ProgressBar',
  'Radio',
  'Select',
  'Step',
  'TextField',
  'Totaliser',
  'UserBlock',
];

const selectComponent = (componentName, brand) => {
  cy.contains('a', componentName).click();
  cy.get('head').invoke(
    'append',
    '<style type="text/css">header {display: none;}</style>',
  );
  switch (componentName) {
    case 'Modal':
      cy.contains('Show me a modal').click();
      cy.matchImageSnapshot(`${brand}_${componentName}`);
      break;
    case 'PopOver':
      cy.contains('Share left').click();
      cy.get('[aria-label="Example code preview"]')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
      break;
    case 'Collapse':
      cy.contains('What is Lorem Ipsum?').click();
      cy.wait(500); // Wait to expand
      cy.get('[aria-label="Example code preview"]')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
      break;
    default:
      cy.get('[aria-label="Example code preview"]')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
  }
};

components.forEach(componentName => {
  it(`CRUK ${componentName} Should match snapshot`, () => {
    cy.visit('/');
    selectComponent(componentName, 'cruk');
  });

  it(`SU2C ${componentName} Should match snapshot`, () => {
    cy.visit('/');
    cy.contains('button', 'Switch theme').click();
    selectComponent(componentName, 'su2c');
  });

  it('has no detectable a11y violations', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.contains('a', componentName).click();
    cy.checkA11y('[aria-label="Example code preview"]', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });
});
