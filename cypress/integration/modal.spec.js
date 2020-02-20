context('Modal', () => {
  beforeEach(() => {
    cy.visit('/modal');
  });

  it('should open modal, focus trap inside the modal', () => {
    cy.contains('Show me a modal').type('{enter}');
    cy.focused().should('have.attr', 'aria-label', 'close');
    cy.focused().tab();
    cy.focused().should('have.text', 'Get me out of here');
    cy.focused().tab();
    cy.focused().should('have.text', 'Go for it 😃');
    cy.focused().tab();
    cy.focused().should('have.attr', 'aria-label', 'close');
    cy.focused().tab({ shift: true });
    cy.focused().should('have.text', 'Go for it 😃');
    cy.focused().tab({ shift: true });
    cy.focused().should('have.text', 'Get me out of here');
    cy.focused().tab({ shift: true });
    cy.focused().should('have.attr', 'aria-label', 'close');
  });

  it('should close the modal when Esc key pressed', () => {
    cy.contains('Show me a modal').click();
    cy.get('body').type('{esc}');
    cy.get('[aria-label=close]').should('not.exist');
  });
});
