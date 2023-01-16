/// <reference types="cypress" />

describe('projects page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Projects')
  })

  it('displays projects', () => {
    cy.get('.project-card')
      .should('have.length.at.least', 1)
  })

  it('navigates to project page on click', () => {
    cy.get('.project-card')
      .first()
      .click()
      .url()
      .should('include', '/Projects/')
  })
})
