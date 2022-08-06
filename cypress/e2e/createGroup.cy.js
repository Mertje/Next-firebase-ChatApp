/// <reference types = 'cypress' />

describe("Create and open group", () => {
  beforeEach("login existing user if not logged in", () => {
    cy.initialCheck();
    cy.get('[data-cy="nav-login"]')
      .should("not.to.match", ":empty")
      .then(() => {
         cy.login()
      });
  });

  it("should add group", () => {
    cy.get('[data-cy="search-div"]').should("be.visible").click().type('m@mertgunes.nl{enter}');
    cy.get('[data-cy="group-name"]').should("be.visible").click();
  });
});
