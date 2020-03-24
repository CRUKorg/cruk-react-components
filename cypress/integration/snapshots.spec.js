const components = [
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
  'Select',
  'Step',
  'Text',
  'TextField',
  'Totaliser',
  'UserBlock',
];

const selectComponent = (componentName, brand) => {
  switch (componentName) {
    case 'Avatar':
      cy.get('head').invoke('append', '<style type="text/css">header {display: none;}</style>');
      cy.get(
        '[src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/modules/cruk_online_fundraising/images/hero_desktop.jpg"]',
      ).should($img => {
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
    default:
      cy.get('head').invoke('append', '<style type="text/css">header {display: none;}</style>');
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
    cy.contains('button', 'Switch theme').click();
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
