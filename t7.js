describe('logo image is visible', () => {
    it('image visible', () => {
      cy.visit('https://nodejs.org/en/')

     cy.get('.container').find('#logo').children('img[src="/static/images/logo.svg"]').should('be.visible')
     
  


      
    })
  })