describe('source code existence', () => {
    it('clicking "downloads" to check dor the source code', () => {
      cy.visit('https://nodejs.org/en/')
  
      if(cy.contains('Downloads').click())
      {
      cy.contains('node-v12.16.3.tar.gz')
      }
    })
  })