describe("3 Partie Counts Profile Page Test", () => {
  before(function() {
    cy.SignIn();
    //cy.fixture("vars.json").as("vars");
  });

  it("Partie Counts", () => {
    const profileBtn = "div.actions--left > button > img";
    const modalList = ".partie-title";
    const closeModal = "div.modal-header > button > img";

    cy.wait(5000);
    cy.get(profileBtn).click();
    cy.wait(5000);
    
    cy.get("div:nth-child(3) > span.quick-stat-figure").then($el => {
      cy.wait(5000);
      cy.get("div:nth-child(3) > span.quick-stat-label").click();
        cy.wait(5000);
      const totalParties = $el.get(0).textContent;
      cy.log("Total Parties", totalParties);
      cy.get(modalList).should("have.length", totalParties);
    });

    cy.wait(2000);
    cy.get(closeModal).click();
  });
});
