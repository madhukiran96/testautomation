describe('website should load', () => {
    it('Does not do much!', () => {
      cy.visit('https://nodejs.org/en/')
      cy.url().should('eq','https://nodejs.org/en/')
    })
  })