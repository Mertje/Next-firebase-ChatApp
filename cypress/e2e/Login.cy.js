/// <reference types = 'cypress' />

describe("login existing user", () => {
    beforeEach("Wait for components to load in", () => {
        cy.initialCheck();
    });

    it("should login", () => {
        cy.login();
        cy.get('[data-cy="nav-login"]').should("not.to.match", ":empty").click();
    });
});
