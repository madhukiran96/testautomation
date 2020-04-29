describe('docs existence', () => {
    it('clicking "docs" navigates to a new url', () => {
      cy.visit('https://nodejs.org/en/')
  
      cy.contains('Docs').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', 'docs/')
    })
  })