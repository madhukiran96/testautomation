describe('find logo', () => {
    it('nav should have home', () => {
      cy.visit('https://nodejs.org/en/')

     cy.get('.container').find('#logo').children('img[src="/static/images/logo.svg"]')
      
    })
  })
