describe('ticket app spec', () => {
  it('it should visit react base domain', () => {
    cy.visit('http://localhost:3000')
    cy.get('span').should('have.length.greaterThan', 5)
  })
})