describe("1 Followings Count Profile Page Test", () => {
  before(function() {
    cy.SignIn();
    cy.fixture("vars.json").as("vars");
  });

  it("Followings Count", () => {
    const profileBtn = "div.actions--left > button > img";
    const followingsTab1counts = "div:nth-child(1) > span.quick-stat-figure";
    const followingsTab1 = "div.profile-quick-stats > div:nth-child(1)";
    const modalList = "div.person-name";
    const closeModal = "div.modal-header > button > img";

    cy.wait(3000);
    cy.get(profileBtn).click();
     cy.wait(5000);
    cy.get('div:nth-child(1) > span.quick-stat-figure').then(($el)=>{
      cy.wait(5000);
      cy.get(followingsTab1).click();
      cy.wait(5000);
      const totalFollowings = $el.get(0).textContent;
      cy.log('Total Followings', totalFollowings)
      cy.get(modalList).should("have.length", totalFollowings);
    })

    cy.wait(2000);
    cy.get(closeModal).click();
  });
});
