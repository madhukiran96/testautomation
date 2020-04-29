//website does not load
describe('website does not load', () => {
    it('Does not do much!', () => {
      cy.visit('https://nodjs.org/en/')
      cy.url().should('eq','https://nodejs.org/en/')
    })
  })