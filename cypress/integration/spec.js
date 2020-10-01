/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.route2('http://dummy.restapiexample.com/api/v1/create').as('create')

    cy.window().then((win) => {
      win.eval(
        `fetch("http://dummy.restapiexample.com/api/v1/create", {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
        });`
      )
    })

    cy.wait('@create').should(({ response }) => expect(response.statusCode).be.equal(200))
  })

  it('should work', () => {
    cy.route2('POST', 'http://dummy.restapiexample.com/api/v1/create').as('create')

    cy.window().then((win) => {
      win.eval(
        `fetch("http://dummy.restapiexample.com/api/v1/create", {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
        });`
      )
    })

    cy.wait('@create').should(({ response }) => expect(response.statusCode).be.equal(200))
  })
})
