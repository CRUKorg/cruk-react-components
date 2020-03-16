context('Header', () => {
  // we're not visiting the header page because then there will multiple headers on a page
  // the way it is used in docs is perfect for our needs
  beforeEach(() => {
    cy.viewport(2000, 400);
    cy.visit('/badge');
  });

  it('should scroll to main content', () => {
    cy.tab();
    cy.focused().should('have.text', 'Skip to main content');
    // can't test further than this without a page with some junk above main content
  });

  it('should alt text in link in logo image', () => {
    cy.tab();
    cy.tab();
    cy.focused()
      .find('img')
      .should('have.attr', 'alt', 'Cancer Research UK Giving Page');
  });

  it('should go to link in logo', () => {
    cy.tab();
    cy.tab();
    cy.focused().should('have.attr', 'href', '/');
  });

  it('should stick to the top of the page', () => {
    cy.get('header')
      .find('[data-cy="header-sticky-container"]')
      .should('have.css', 'height', '120px')
      .should('have.css', 'position', 'relative');
  });

  it('should reduce to smaller height when not at top of page', () => {
    cy.window().scrollTo(0, 800);
    cy.get('header')
      .find('[data-cy="header-sticky-container"]')
      .should('have.css', 'height', '54px')
      .should('have.css', 'position', 'fixed')
      .should('have.css', 'top', '0px');
  });
});
