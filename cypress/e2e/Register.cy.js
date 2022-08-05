/// <reference types = 'cypress' />

describe('Register new user', () => {
    
    beforeEach('Go to page and look for input fields', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="register-email"]').should("be.visible")
        cy.get('[data-cy="register-password"]').should("be.visible")
        cy.get('[data-cy="nav-login"]').should('not.to.match', ':empty').then( dat => {
            if(dat[0].innerText === 'Press to log out')
                cy.get('[data-cy="nav-login"]').click()
        })
    })

    it('should create new account', () => {
        cy.get('[data-cy="register-email"]').click().type('test@mertgunes.nl')
        cy.get('[data-cy="register-password"]').click().type('Welkom123')
        cy.get('[data-cy="register-submit"]').click()
        cy.get('[data-cy="search-div"]').should("be.visible") 
    })

})