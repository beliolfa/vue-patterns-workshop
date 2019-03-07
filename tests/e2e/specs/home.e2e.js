describe('Home Page', () => {
  it('has the correct title and heading', () => {
    cy.visit('/')
    cy.title().should('equal', 'Home | Vue Enterprise Boilerplate')
    cy.contains('h1', 'Shoping List')
  })

  it('adds an item hitting the add button', () => {
    cy.visit('/')
    cy.get('input[name="product"]').type('Awesome Product')
    cy.contains('button', 'Add Product').click()
    cy.contains('li', 'Awesome Product')
  })

  it('clears the input after adding the product', () => {
    cy.visit('/')
    cy.get('input[name="product"]').type('Awesome Product')
    cy.contains('button', 'Add Product').click()
    cy.get('input[name="product"]').should('have.value', '')
  })
})
