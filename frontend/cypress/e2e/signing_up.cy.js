describe("Signing up", () => {
  // this test passes when the users collection is empty - how do we make sure it's empty?
  it("with valid credentials, redirects to '/login'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someoneelse@example.com");
    cy.get("#password").type("Password1234");
    cy.get("#username").type("someotherusername");
    cy.get("#submit").click();

    cy.url().should("include", "/login");
  });

  it("with missing password, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someoneelse@example.com");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });

  it("with missing email, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#password").type("Password1234");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });
});