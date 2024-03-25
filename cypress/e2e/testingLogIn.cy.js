describe('template spec', () => {
  it('reaches local host and checks h1 tag content', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="cypress-h1"]').should("exist")
    .should('have.text', 'testUser')
  })
})
