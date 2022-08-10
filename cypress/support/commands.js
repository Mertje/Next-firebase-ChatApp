// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('initialCheck', () => { 
    cy.visit("/");
    cy.get('[data-cy="register-email"]').should("be.visible");
    cy.get('[data-cy="register-password"]').should("be.visible");
    cy.get('[data-cy="nav-login"]').should("not.to.match", ":empty").click();
 })

Cypress.Commands.add('login', () =>{
    cy.get('[data-cy="switch-form"]').click();
    cy.get('[data-cy="login-email"]').click().type("test@mertgunes.nl");
    cy.get('[data-cy="login-password"]').click().type("Welkom123");
    cy.get('[data-cy="login-submit"]').click();
    cy.get('[data-cy="search-div"]').should("be.visible");
})