describe('liking a post', () => {
  before(() => {
    cy.testCleanup();
    cy.signup("socrates@example.com", "socrates", "Password1234")
  })
  
  it('user can like a post they have created', () => {
    // make this into a cypress custom function
    cy.visit("/login");
    cy.get("#username").type("socrates");
    cy.get("#password").type("Password1234");
    cy.get("#submit").click();


    cy.get("#message").type("The only true wisdom is knowing you know nothing");
    cy.get("#submit").click();

    cy.get("#like-button").click();
    cy.get("#like-count").should('contain.text', "1 like")    

  })
})