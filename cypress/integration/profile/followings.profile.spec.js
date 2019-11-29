describe('Followings Count Profile Page Test', ()=> {

    before(function () {
        cy.SignIn();
        cy.fixture('vars.json').as('vars')
     })

    it('Followings Count', ()=> {

   const profileBtn                     =      'div.actions--left > button > img';
   const followingsTab1counts           =      'div:nth-child(1) > span.quick-stat-figure';
   const followingsTab1                 =      '.profile-quick-stats > :nth-child(1)';
   const modalList                      =      '.person-listing';
   const closeModal                     =      'div.modal-header > button > img';



       
        cy.wait(3000);
        cy.get(profileBtn).click(); 
        cy.wait(3000);
        

        cy.get('@vars').then((items) => {
            const item = items[0].FOLLOWINGS_COUNTS
            cy.log(item)
            cy.get(followingsTab1counts).should('contain', item);
        })
        
        cy.wait(2000);
        cy.get(followingsTab1).click(); 
        cy.wait(2000);

            cy.get('@vars').then((items) => {
            const item = items[0].FOLLOWINGS_COUNTS
            cy.log(item)
            cy.get(modalList).should('have.length', item)

            })
        cy.wait(2000);
        cy.get(closeModal).click(); 
        
   
   
     }) 

    
})




