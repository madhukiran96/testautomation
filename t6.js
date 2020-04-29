describe('nav bar existence with atleast 1 listing', () => {
    it('nav should have home', () => {
      cy.visit('https://nodejs.org/en/')
  
      cy.get('footer')              
      .should('contain', 'Report Node.js issue')
      
    })
  })