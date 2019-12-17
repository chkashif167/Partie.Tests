describe("Un-Mute User from Post Test", () => {
  
    before(function () {
        cy.SignIn()
        cy.fixture('vars.json').as('vars')
     })
     it("Un-Mute User from Post Test", () => {
       cy.get("a:nth-child(1) > span").should("contain", "Home");

       cy.get("@vars").then(items => {
         const item = items[0].USER_FOR_FEED;
         cy.log(item);
         cy.get("div.author-name")
           .contains(item.trim())
           .closest("partie-feed-item")
           .find("button.btn.btn-menu > img")
           .click();
         cy.wait(4000);
         cy.get('span.action-title').contains('Unmute').click();
         cy.wait(4000);
         cy.get("div#toast-container div > div").should(
           "contain",
           "User successfully un-muted"
         ); // check toaster message
       });
     });

  });
  