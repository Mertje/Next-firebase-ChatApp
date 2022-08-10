/// <reference types = 'cypress' />

describe("Delete user", () => {
    beforeEach("login existing user if not logged in", () => {
        cy.initialCheck();
        cy.login();
    });

    it("should delete account", () => {
        cy.get('[data-cy="delete-button"]').should("be.visible").click();
    });
});
