describe('footer should contain Report Node.js issue', () => {
    it('Report Node.js issue', () => {
      cy.visit('https://nodejs.org/en/')
  
      cy.get('footer')              
      .should('contain', 'Report Node.js issue')
      
    })
  })