describe('source code existence', () => {
    it('clicking "downloads" to check the source code exists', () => {
      cy.visit('https://nodejs.org/en/')
  
      cy.contains('Downloads').click()
      cy.contains('node-v12.16.3.tar.gz')
      cy.get('a')              
      .should('contain', 'node-v12.16.3.tar.gz')
    })
  })