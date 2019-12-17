describe("7 Mute User Profile Page Test", () => {
  before(function() {
    cy.SignIn();
    cy.fixture("vars.json").as("vars");
  });

  it("Mute User", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER1_PROFILE;
      cy.log(item);
      cy.visit(item);
    });
    cy.wait(3000)
    cy.get("div.actions--right > button:nth-child(1) > img").click(); // click on three dots
    cy.wait(3000)
    cy.get("span.action-title")
      .contains("Mute")
      .click();
    cy.get("div#toast-container div > div ").should(
      "contain",
      "User successfully muted"
    );
  });
});
