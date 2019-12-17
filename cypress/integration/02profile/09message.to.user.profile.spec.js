describe("9 Message To User Profile Page Test", () => {
  before(function() {
    cy.SignIn();
    cy.fixture("vars.json").as("vars");
  });

  it("Message To User", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER1_PROFILE;
      cy.log(item);
      cy.visit(item);
    });

    cy.get("button:nth-child(2) > span")
      .contains("Message")
      .click();
    cy.get("input#message-input").type("This is Messageee");
    cy.get("form > div > button")
      .should("contain", "Send")
      .click();
      cy.get("cdk-virtual-scroll-viewport").scrollTo('bottom') 
    cy.wait(4000);
    cy.get(".chat-message-content")
      .contains("This is Messageee")
      .should("to.be.visible");
  });
});
