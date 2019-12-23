/// <reference types="Cypress" />

context("Actions", () => {
  describe("5 Edit Profile Page Test", () => {
    before(function() {
      cy.SignIn();
      cy.fixture("vars.json").as("vars");
    });

    const phoneNumber = Math.floor(Math.random() * 1000);
    const FinalPhone = "6267564526262" + phoneNumber;

    const profileBtn = "div.actions--left > button > img";

    it("go to profile page", () => {
      cy.wait(3000);
      cy.get(profileBtn).click();
      cy.wait(5000);
 
      cy.wait(6000);
      cy.get("div.actions--right > button:nth-child(1) > img").click();
      cy.wait(4000);
      cy.get(".action-title")
        .contains("Edit")
        .should("be.visible")
        .click();

      cy.wait(3000);
      cy.get('input[name="firstName"]').clear();
      cy.wait(3000);
      cy.get('input[name="firstName"]').type("UserFirstName"); // first name
      cy.wait(3000);
      cy.get('input[name="lastName"]').clear();
      cy.wait(3000);
      cy.get('input[name="lastName"]').type("UserLastName"); // lastname
      
      cy.get('form[name="profile"] span:nth-child(2) > label').click(); // play style
      cy.wait(2000);
      cy.get("textarea#bio").clear();
      cy.wait(2000);
      cy.get("textarea#bio").type("This is bio of the page");
      cy.get('input[name="profileLink"]').clear(); // website url
      cy.wait(2000);
      cy.get('input[name="profileLink"]').type("www.gmail.com");
      cy.get("a > span.btn-inner").click();
    });
  });
});
