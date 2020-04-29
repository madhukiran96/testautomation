describe('download works', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://nodejs.org/en/')
  //fail
      cy.contains('lsmdnjjckc').click()
      cy.contains('opposkssnwj').click()
    })
  })