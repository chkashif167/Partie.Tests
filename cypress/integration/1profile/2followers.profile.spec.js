describe('Followrs Count Profile Page Test', ()=> {

    before(function () {
        cy.SignIn();
        cy.fixture('vars.json').as('vars')
     })

    it('Followrs Count', ()=> {

   const profileBtn                     =      'div.actions--left > button > img';
   const followersTab1counts           =      'div:nth-child(2) > span.quick-stat-figure';
   const followTabLabel                 =          "div:nth-child(2) > span.quick-stat-label";
   const followersTab2                  =      '.profile-quick-stats > :nth-child(2)';
   const modalList                      =      '.person-listing';
   const closeModal                     =      'div.modal-header > button > img';


       


        cy.wait(1000);
        cy.get(profileBtn).click(); 
        cy.wait(1000);

        cy.get('@vars').then((items) => {
            const item = items[0].FOLLOWERS_COUNTS
            cy.log(item)
            cy.get(followersTab2).should('contain', item);

        })
       
        cy.wait(1000);
        cy.get(followersTab2).click(); 
        cy.wait(1000);
        cy.get('@vars').then((items) => {
            const item = items[0].FOLLOWERS_COUNTS
            cy.log(item)
            cy.get(modalList).should('have.length', item)
        })
      
        cy.wait(1000);
        cy.get(closeModal).click(); 
        
   
   
     }) 

    
})




