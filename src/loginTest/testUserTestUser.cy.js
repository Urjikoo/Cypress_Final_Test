import React from 'react'
import TestUser from './testUser'

describe('<TestUser />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TestUser />)
  })
})