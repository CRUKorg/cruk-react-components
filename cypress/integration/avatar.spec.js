context('Avatar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should match snapshot', () => {
    cy.get('[aria-label="Example code preview"]')
      .first()
      .matchImageSnapshot('avatar');
  });
});
