describe('Profile Page Followrs Count Test', ()=> {

    before(function () {
        cy.SignIn()
     })

    it('Auth Server', ()=> {

   const profileBtn                     =      'div.actions--left > button > img';
   const followersTab1counts           =      'div:nth-child(2) > span.quick-stat-figure';
   const followersTab2                  =      '.profile-quick-stats > :nth-child(2)';
   const modalList                      =      '.person-listing';
   const closeModal                     =      'div.modal-header > button > img';
   const expectedVal1                   =       17;


       


        cy.wait(3000);
        cy.get(profileBtn).click(); 
        cy.wait(3000);
        cy.get(followersTab1counts).contains(expectedVal1).should('be.visible');
        cy.wait(2000);
        cy.get(followersTab2).click(); 
        cy.wait(2000);
        cy.get(modalList).should('have.length', expectedVal1)
        cy.wait(2000);
        cy.get(closeModal).click(); 
        
   
   
     }) 

    
})




