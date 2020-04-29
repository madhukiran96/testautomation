describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://nodejs.org/en/')
      cy.url().should('eq','https://nodejs.org/en/')
    })
  })