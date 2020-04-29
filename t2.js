describe('download works', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://nodejs.org/en/')
  
      cy.contains('12.16.3 LTS').click()
      cy.contains('14.0.0 Current').click()
    })
  })