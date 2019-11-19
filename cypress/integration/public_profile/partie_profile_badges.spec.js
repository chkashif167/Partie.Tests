describe('Profile Page Badges Count Test', ()=> {

    before(function () {
        cy.SignIn()
     })

    it('Auth Server', ()=> {

   const profileBtn                     =      'div.actions--left > button > img';
   const partiesTabCounts               =      'div:nth-child(4) > span.quick-stat-figure';
   const partiesTab3                    =      '.profile-quick-stats > :nth-child(4)';
   const modalList                      =      '.partie-title';
   const closeModal                     =      'div.modal-header > button > img';
   const expectedVal1                   =       9;


       
        cy.wait(3000);
        cy.get(profileBtn).click(); 
        cy.wait(3000);
        cy.get(partiesTabCounts).contains(expectedVal1).should('be.visible');
        cy.wait(2000);
        cy.get(partiesTab3).click(); 
        cy.wait(2000);
        // cy.get(modalList).should('have.length', expectedVal1)
        cy.wait(2000);
        cy.get(closeModal).click(); 
        
   
   
     }) 

    
})




