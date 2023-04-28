describe('Login Test', () => {
    it('Create a successful login scenario', () => {
        cy.visit('https://saucedemo.com')
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()      
    })

    it('Create a unsuccessful login scenario', () => {
        cy.visit('https://saucedemo.com')
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce1')
        cy.get('[data-test="login-button"]').click()
    })
    
    it('Add 2 items to the cart', () => {
        cy.visit('https://saucedemo.com')
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()          
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_badge').should('not.equal', '2')
    })

    it('Finish a purchase', () => {
        cy.visit('https://saucedemo.com')
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()          
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('User')
        cy.get('[data-test="lastName"]').type('First')
        cy.get('[data-test="postalCode"]').type('99999999')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('not.equal', 'Thank you for your order!')
    })

})