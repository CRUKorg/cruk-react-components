const components = [
  'AddressLookup'
  'Avatar',
  'Badge',
  'Box',
  'Button',
  'Checkbox',
  'Collapse',
  'ErrorText',
  'Footer',
  'Header',
  'Heading',
  'Icon',
  'Link',
  'Loader',
  'Modal',
  'Pagination',
  'PopOver',
  'ProgressBar',
  'Radio',
  'RadioGroup',
  'Select',
  'Step',
  'Text',
  'TextField',
  'Totaliser',
  'UserBlock',
];

const selectComponent = (componentName, brand) => {
  switch (componentName) {
    case 'AddressLookup':
      cy.get('head').invoke(
        'append',
        '<style type="text/css"> header {display: none;} [aria-label="Example code preview"] span {animation: none;} </style>',
      );
      cy.get('[aria-label="Example code preview"]')
        .first().within(($list) => {
          // TODO stub address endpoints.
          cy.getInputByLabel("Home address").type("N10").blur();
          cy.contains("li","N10 Logistics Ltd").should("exist");
          cy.matchImageSnapshot(`${brand}_${componentName}`)
        })
      break;
    case 'Avatar':
      cy.get('head').invoke('append', '<style type="text/css">header {display: none;}</style>');
      cy.get('[src="https://via.placeholder.com/300/2e008b/d9318a?text=avatar"]').should($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
      cy.get('[aria-label="Example code preview"]')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
      break;
    case 'Header':
      cy.viewport(1000, 480);
      cy.get('header')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
      break;
    case 'Modal':
      cy.get('head').invoke('append', '<style type="text/css">header {display: none;}</style>');
      cy.contains('Show me a modal').click();
      cy.get('[aria-modal="true"').matchImageSnapshot(`${brand}_${componentName}`);
      break;
    case 'PopOver':
      cy.get('head').invoke('append', '<style type="text/css">header {display: none;}</style>');
      cy.contains('Share left').click();
      cy.get('[aria-label="Example code preview"]')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
      break;
    case 'Collapse':
      cy.get('head').invoke('append', '<style type="text/css">header {display: none;}</style>');
      cy.contains('What is Lorem Ipsum?').click();
      cy.wait(500); // Wait to expand
      cy.get('[aria-label="Example code preview"]')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
      break;
    case 'Loader':
      cy.get('head').invoke(
        'append',
        '<style type="text/css"> header {display: none;} [aria-label="Example code preview"] span {animation: none;} </style>',
      );
      cy.wait(500); // Wait for fonts to load
      cy.get('[aria-label="Example code preview"]')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
      break;
    default:
      cy.get('head').invoke(
        'append',
        '<style type="text/css"> header {display: none;} [aria-label="Example code preview"] span {animation: none;} </style>',
      );
      cy.get('[aria-label="Example code preview"]')
        .first()
        .matchImageSnapshot(`${brand}_${componentName}`);
  }
};

components.forEach(componentName => {
  it(`CRUK ${componentName} Should match snapshot`, () => {
    cy.visit(`/${componentName.toLowerCase()}`);
    selectComponent(componentName, 'cruk');
  });

  it(`SU2C ${componentName} Should match snapshot`, () => {
    cy.visit(`/${componentName.toLowerCase()}`);
    cy.get('select[name="themeSelector"]').select('su2c');
    selectComponent(componentName, 'su2c');
  });

  it('has no detectable a11y violations', () => {
    cy.visit(`/${componentName.toLowerCase()}`);
    cy.injectAxe();
    cy.checkA11y('[aria-label="Example code preview"]', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });
});
