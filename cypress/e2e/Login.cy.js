/// <reference types = 'cypress' />

describe('login existing user', () => {
    
    beforeEach('Wait for components to load in', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="register-email"]').should("be.visible")
        cy.get('[data-cy="register-password"]').should("be.visible")
        cy.get('[data-cy="nav-login"]').should('not.to.match', ':empty').then( dat => {
            if(dat[0].innerText === 'Press to log out')
                cy.get('[data-cy="nav-login"]').click()
        })
    })

    it('should login', () => {
        cy.get('[data-cy="switch-form"]').click()
        cy.get('[data-cy="login-email"]').click().type('test1@mertgunes.nl')
        cy.get('[data-cy="login-password"]').click().type('Welkom123')
        cy.get('[data-cy="login-submit"]').click()
        cy.get('[data-cy="search-div"]').should("be.visible") 
    })




})