describe('commenting on a post', () => {
  before(() => {
    cy.testCleanup();
    cy.signup("epictetus@rollingstone.com", "epictetus", "Password1234")
    cy.signup("confucius@rollingstone.com", "confucius", "Password1234")

  })
  
  it("one user can comment on another user's post", () => {
    // make this into a cypress custom function
    cy.visit("/login");
    cy.get("#username").type("epictetus");
    cy.get("#password").type("Password1234");
    cy.get("#submit").click();


    cy.get("#message").type("It's not what happens to you, but how you respond to it that matters");
    cy.get("#submit").click();

    cy.get("#logout-button").click();

    cy.visit("/login");
    cy.get("#username").type("confucius");
    cy.get("#password").type("Password1234");
    cy.get("#submit").click();


    cy.get("#comment").type("It doesn't matter how slowly you go as long as you do not stop");
    cy.get('[data-cy="submit-comment"]').click();
    cy.get('[data-cy="show-comments-button"]').click();

    cy.get('[data-cy="comment-text"]').should('contain.text', "It doesn't matter how slowly you go as long as you do not stop")    
    cy.get('[data-cy="comment-author"]').should('contain.text', "confucius")    

  })
})