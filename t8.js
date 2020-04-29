describe('download fail', () => {
    it('clicks the link "sdujdj"', () => {
      cy.visit('https://nodejs.org/en/')
  //fail to download
      cy.contains('lsmdnjjckc').click()
      
    })
  })