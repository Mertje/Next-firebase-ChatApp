/// <reference types = 'cypress' />

describe("Create and open group", () => {
    beforeEach("login user", () => {
        cy.initialCheck();
        cy.login();
    });

    it("should add group and send chat", () => {
        cy.get('[data-cy="search-div"]').should("be.visible").click().type('mert@mertgunes.nl{enter}');
        cy.get('[data-cy="group-name"]').should("be.visible").click();
        cy.get('[data-cy="chat-input"]').click().type('Test message from new user{enter}')
        cy.get('[data-cy="chat-message"]').should("contain", "Test message from new user")
        cy.get('[data-cy="nav-login"]').should("not.to.match", ":empty").click();
    });
});
