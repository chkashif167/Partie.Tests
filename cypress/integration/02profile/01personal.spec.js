describe("1 Followings Count Profile Page Test", () => {
  before(() => {
    cy.SignIn();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.fixture("vars.json").as("vars");
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  it("Followings Count", () => {
    const profileBtn = "div.actions--left > button > img";
    const followingsTab1counts = "div:nth-child(1) > span.quick-stat-figure";
    const followingsTab1 = "div.profile-quick-stats > div:nth-child(1)";
    const modalList = "div.person-name";
    const closeModal = "div.modal-header > button > img";

    cy.wait(3000);
    cy.get(profileBtn).click();
    cy.wait(3000);
    cy.get("div:nth-child(1) > span.quick-stat-figure").then($el => {
      cy.wait(3000);
      cy.get(followingsTab1).click();
      cy.wait(3000);
      const totalFollowings = $el.get(0).textContent;
      cy.log("Total Followings", totalFollowings);
      cy.get(modalList).should("have.length", totalFollowings);
    });

    cy.wait(2000);
    cy.get(closeModal).click();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  it("Followrs Count", () => {
    const modalList = ".person-listing";
    const closeModal = "div.modal-header > button > img";

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

  it("Partie Counts", () => {
    const modalList = ".partie-title";
    const closeModal = "div.modal-header > button > img";

    cy.get("div:nth-child(3) > span.quick-stat-figure").then($el => {
      cy.wait(2000);
      cy.get("div:nth-child(3) > span.quick-stat-label").click();
      cy.wait(2000);
      const totalParties = $el.get(0).textContent;
      cy.log("Total Parties", totalParties);
      cy.get(modalList).should("have.length", totalParties);
    });

    cy.wait(2000);
    cy.get(closeModal).click();
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  it("Badges Count", () => {
    const modalList = ".partie-title";
    const closeModal = "div.modal-header > button > img";
    cy.wait(2000);
    cy.get("div.profile-quick-stats > div:nth-child(4)").click(); // click on badges tab
    cy.get(".section-header + .badge-group")
      .find(".achievement")
      .as("totalAchievements");
    cy.get("@totalAchievements").then(totalAchievements => {
      var TotalAchieveMetnsVar = Cypress.$(totalAchievements).length;
      cy.log(TotalAchieveMetnsVar);
      cy.get(".section-header + .badge-group")
        .find(".achievement.incomplete")
        .as("incompleteAchievements");
      cy.get("@incompleteAchievements").then(incompleteAchievements => {
        var incompleteAchievementsVar = Cypress.$(incompleteAchievements)
          .length;
        cy.log(incompleteAchievementsVar);
        var TotalCompleteAchievment =
          TotalAchieveMetnsVar - incompleteAchievementsVar;
        cy.log(TotalCompleteAchievment);
        cy.get(".badge-group")
          .find(".token-value")
          .then(() => {
            var sum = 0;
            Cypress.$(".token-value span").each(function() {
              sum += +Cypress.$(this).text() || 0;
            });
            cy.log(sum);
            var TotalBadgesAndAchivment = TotalCompleteAchievment + sum;
            cy.log(TotalBadgesAndAchivment);
            cy.get("div:nth-child(4) > span.quick-stat-figure").should(
              "contain",
              TotalBadgesAndAchivment
            );
          });
      });
    });
    cy.wait(1000);
    cy.get(closeModal).click();
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  it("Edit Profile", () => {
    cy.wait(3000);
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
