// var inCompleteAcheivement;
// var completeAchievemnets;
let totalBadges;
let _totalBadges;

describe("4 Badges Count Profile Page Test", () => {
  before(function() {
    cy.SignIn();
    cy.fixture("vars.json").as("vars");
  });
  beforeEach(() => {});

  it("Badges Count", () => {
    const profileBtn = "div.actions--left > button > img";

    const modalList = ".partie-title";
    const closeModal = "div.modal-header > button > img";

    cy.get(profileBtn).click();
    cy.wait(5000);
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
  });
});
