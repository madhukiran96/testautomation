describe('download should work', () => {
    it('clicks the link "12.16.3 LTS"', () => {
      cy.visit('https://nodejs.org/en/')
  
      cy.contains('12.16.3 LTS').click()

    })
  })