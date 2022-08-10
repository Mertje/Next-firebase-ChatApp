const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:3000",
    "specPattern": ["cypress/e2e/Register.cy.js", "cypress/e2e/Login.cy.js", "cypress/e2e/CreateGroup.cy.js", "cypress/e2e/DeleteAccount.cy.js"]
  },
});
