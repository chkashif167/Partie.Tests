describe('Profile Page Badges Count Test', ()=> {

    before(function () {
        cy.SignIn();
        cy.fixture('vars.json').as('vars')
     })

    it('Auth Server', ()=> {

   const profileBtn                     =      'div.actions--left > button > img';
   const BadgesTAb                      =      'div:nth-child(4) > span.quick-stat-figure';
   const partiesTab3                    =      '.profile-quick-stats > :nth-child(4)';
   const modalList                      =      '.partie-title';
   const closeModal                     =      'div.modal-header > button > img';



       
        cy.wait(3000);
        cy.get(profileBtn).click(); 
        cy.wait(1000);

        cy.get('@vars').then((items) => {
            const item = items[0].BADGES_COUNTS;
            cy.log(item);
            cy.get(BadgesTAb).should('contain', item);
        })
       
        cy.get(partiesTab3).click(); 
        cy.wait(1000);
        cy.get(closeModal).click(); 
        
   
   
     }) 

    
})




