describe("Messages", () => {
  before(() => {
    cy.SignIn();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.fixture("vars.json").as("vars");
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    // cy.saveLocalStorage();
    //cy.SignIn()
  });

  //create randon parity numbers
  const partieNumber = Math.floor(Math.random() * 2000);
  const FinalMessage1 = "This is Message Number " + partieNumber;

  // const to get html elements

  /////////////////////////////////////////////////////////////////////////////////////////

  it("Send Message In Thread", () => {
    cy.get("@vars").then(items => {
      const item = items[0].SEVER_URL;
      cy.log(item + "/messages");
      cy.visit(item + "/messages");
    });
    cy.wait(4000);

    // Cypress.$('.page-messages .message-item .person-name span').each(function(i, v) {
    //   cy.log(i)
    // })

    cy.get("@vars").then(items => {
      const item = items[0].USER_FOR_FEED;
      cy.log(item);

      cy.get(".page-messages .message-item .person-name span").each(function(
        $el,
        index,
        $list
      ) {
        if ($list.get(index).textContent == item) {
          cy.log($el);
          cy.get($el.get(0))
            .parent()
            .click();
        }
      });
      cy.get("#message-input").type(FinalMessage1);
      cy.get("form > div > button").click();
      cy.reload();
      cy.get(".chat-message-content").should("contain", FinalMessage1);
      cy.wait(3000);
    });
  });

  it("Delete Message", () => {
    cy.get(".del_message_button")
      .last()
      .click();
    cy.wait(3000);
    cy.get(".btn.btn-outline")
      .contains("Yes")
      .click();
    cy.reload();
    cy.get(".chat-message-content").should(
      "contain",
      "This message was deleted."
    );
  });

  it("Delete Mesage of other side user", () => {
  
    cy.get("@vars").then(items => {
      const item = items[0].USER_FOR_FEED;
      cy.log(item);
      cy.get(".chat-message-author")
        .contains(item.trim())
        .closest(".chat-message")
        .find("button")
        .click();
    });
  });

  it("Send Message to Friend from Friend List", () => {
    cy.get("@vars").then(items => {
      const item = items[0].SEVER_URL;
      cy.log(item + "/messages");
      cy.visit(item + "/messages");
    });
    cy.get("partie-message-list > div > button").click();
    cy.wait(2000);
    cy.get('div.modal-header > button > img').click();
    cy.wait(2000);
    cy.get("partie-message-list > div > button").click();
    cy.wait(2000);
    cy.get("partie-message-friend")
      .first()
      .click();
    cy.get("#message-input").type(FinalMessage1);
    cy.get("form > div > button").click();
    cy.reload();
    cy.get(".chat-message-content").should("contain", FinalMessage1);
    cy.reload();
  });
});
