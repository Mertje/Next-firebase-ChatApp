/// <reference types = 'cypress' />

describe("Register new user", () => {
    beforeEach("Go to page and look for input fields", () => {
        cy.initialCheck();
    });

    it("should create new account", () => {
        cy.get('[data-cy="register-email"]').click().type("test@mertgunes.nl");
        cy.get('[data-cy="register-password"]').click().type("Welkom123");
        cy.get('[data-cy="register-submit"]').click();
        cy.get('[data-cy="search-div"]').should("be.visible");
    });
});
