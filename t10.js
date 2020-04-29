//logo not found
describe('logo image is not visible', () => {
    it('image not visible', () => {
      cy.visit('https://nodejs.org/en/')

     cy.get('.container').find('#logo').children('img[src="/static/images/pogo.svg"]').should('be.visible')
  


      
    })
  })