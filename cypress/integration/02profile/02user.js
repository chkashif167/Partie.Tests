describe("6 Follow User From Profile Page", () => {
  before(() => {
    cy.SignIn();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.fixture("vars.json").as("vars");
  });

  it("Follow User", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER1_PROFILE;
      cy.log(item);
      cy.visit(item);
    });

    cy.get("button:nth-child(1) > span")
      .contains("Follow")
      .click();
    cy.get("div#toast-container div > div ").should(
      "contain",
      "User successfully followed"
    );
  });

  it("Mute User", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER1_PROFILE;
      cy.log(item);
      cy.visit(item);
    });
    cy.wait(3000);
    cy.get("div.actions--right > button:nth-child(1) > img").click(); // click on three dots
    cy.wait(3000);
    cy.get("span.action-title")
      .contains("Mute")
      .click();
    cy.get("div#toast-container div > div ").should(
      "contain",
      "User successfully muted"
    );
  });
  it("UnMute User", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER1_PROFILE;
      cy.log(item);
      cy.visit(item);
    });
    cy.wait(5000);
    cy.get("div.actions--right > button:nth-child(1) > img").click(); // click on three dots
    cy.wait(5000);
    cy.get("span.action-title")
      .contains("Unmute")
      .click();
    cy.get("div#toast-container div > div ").should(
      "contain",
      "User successfully unmuted"
    );
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
    //cy.get("cdk-virtual-scroll-viewport").scrollTo('bottom')
    cy.wait(4000);
    cy.get(".chat-message-content")
      .contains("This is Messageee")
      .should("to.be.visible");
  });
  it("Report User", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER1_PROFILE;
      cy.log(item);
      cy.visit(item);
    });

    cy.get("div.actions--right > button:nth-child(1) > img").click(); // click on three dots
    cy.get(".action-title")
      .contains("Report")
      .click();
    cy.get("textarea#report").type("Reprting This User");
    cy.get("div#feedback-modal div.modal-content > button").click();
    cy.get("div#toast-container div > div ").should(
      "contain",
      "User successfully reported"
    );
  });
  it("Unfollow", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER1_PROFILE;
      cy.log(item);
      cy.visit(item);
    });
    cy.get("div.actions--right > button:nth-child(1) > img").click(); // click on three dots
    cy.wait(6000);
    cy.get("span.action-title")
      .contains("Unfollow")
      .click();
    cy.get("div#toast-container div > div ").should(
      "contain",
      "User successfully un-followed"
    );
  });
});
