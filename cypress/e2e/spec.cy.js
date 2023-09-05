describe('page visit', () => {
  it('Visits my CRC Resume page', () => {
    cy.visit('http://crc.tim-andes.com/')
  })
})

describe('Check for Counter', () => {
  it('Checks for page view counter <span> element', () => {
    cy.get('div > p').children().should('exist')
  })
})

context("GET DB /tutorials", () => {
  it("GET the view count", () => {
    cy.request("GET", "https://43uub5rsi5.execute-api.us-east-1.amazonaws.com/tutorials/").then((response) => {
      expect(response.status).to.eq(200)  
      expect(response.body).to.exist
      expect(response.body).to.be.a('number')
    })
  })
})
