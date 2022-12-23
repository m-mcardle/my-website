/// <reference types="cypress" />

describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays hello message', () => {
    cy.get('.intro')
      .should('contain.text', 'Hi there!')
      .should('contain.text', 'My name is')
      .should('contain.text', 'Matt McArdle')
      .should('be.visible')
  })
})
