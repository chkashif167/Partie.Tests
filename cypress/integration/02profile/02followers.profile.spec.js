describe("2 Followrs Count Profile Page Test", () => {
  before(function() {
    cy.SignIn();
    //cy.fixture("vars.json").as("vars");
  });

  it("Followrs Count", () => {
    const profileBtn = "div.actions--left > button > img";
    const modalList = ".person-listing";
    const closeModal = "div.modal-header > button > img";

    cy.wait(1000);
    cy.get(profileBtn).click();
    cy.wait(5000);
    cy.get("div:nth-child(2) > span.quick-stat-figure").then($el => {
    cy.wait(3000);
    cy.get("div:nth-child(2) > span.quick-stat-label").click(); // Followers Tab 2 click
    cy.wait(3000);
      const totalFollowers = $el.get(0).textContent;
      cy.log("Total Followers", totalFollowers);
      cy.get(modalList).should("have.length", totalFollowers);
    });

    cy.wait(1000);
    cy.get(closeModal).click();
  });
});
