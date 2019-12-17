describe("4 Badges Count Profile Page Test", () => {
  before(function() {
   // cy.SignIn();
    //cy.fixture("vars.json").as("vars");
  });

  it.skip("Badges Count", () => {
    const profileBtn = "div.actions--left > button > img";

    const modalList = ".partie-title";
    const closeModal = "div.modal-header > button > img";

    cy.wait(3000);
    cy.get(profileBtn).click();
    cy.wait(4000);
     
    cy.get("div:nth-child(4) > span.quick-stat-figure").then($el => {

      cy.get('div.profile-quick-stats > div:nth-child(4)').click(); // click on badges tab
        //debugger;
        cy.wait(2000);
        const totalBadges = $el.get(0).textContent;
        cy.log("Total Badges", totalBadges);
        //cy.get(modalList).should("have.length", totalBages);
        
        cy.get('.badge-group').find('.token-value').then(() => {     
          var sum = 0;
          Cypress.$('.token-value span').each(function() {
            sum += +Cypress.$(this).text()||0;
          });
          cy.log(sum);
        
          })
          var inCompleteAcheivement;
          cy.get('.section-header + .badge-group').find('.achievement.incomplete').then(($els) => {     
            inCompleteAcheivement = Cypress.$($els).length;
            cy.log('incomplete AchievMents', inCompleteAcheivement);
           })
          

           var completeAchievemnets;
           cy.get('.section-header + .badge-group').find('.achievement').then(($els) => {     
            completeAchievemnets = Cypress.$($els).length;
            cy.log('AchievMents', completeAchievemnets);
            })
           
  



      });


        

      
   


    // cy.server();
    // cy.route({
    //   method: "GET",
    //   url: "api/v1/badges/stats/d23eef09-e4e1-455d-a74c-03dfc61bde11"
    // }).as("get_badges");
    
    // cy.wait("@get_badges").then((xhr) => {
    //   cy.log('Active Badges and Achievments', xhr.response.body.hasWon);
    //   //cy.get("div:nth-child(3) > span.quick-stat-figure").should("contain", xhr.response.body.length );
    // });

    // cy.get("div:nth-child(4) > span.quick-stat-figure").then($el => {
    //   const totalBadges = $el.get(0).textContent;
    //   cy.log("Total Badges", totalBadges);
    //   cy.get(totalBadges).should("have.length", totalBadges);
    // });
   
    cy.wait(1000);
    cy.get(closeModal).click();
  });
});



