/// <reference types = 'cypress' />

describe("login existing user", () => {
  beforeEach("Wait for components to load in", () => {
    cy.initialCheck();
  });

  it("should login", () => {
    cy.login()
  });
});
