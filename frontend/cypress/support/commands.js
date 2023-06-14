Cypress.Commands.add('signup', (email, username, password) => {
  cy.visit("/signup");
  cy.get("#email").type(email);
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#submit").click();
})

Cypress.Commands.add('testCleanup', () => {
  cy.task('clearDB')
})

