//website does not load
describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://nodjs.org/en/')
      cy.url().should('eq','https://nodejs.org/en/')
    })
  })