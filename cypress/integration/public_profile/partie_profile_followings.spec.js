describe('My first Cypress Test', ()=> {

    before(function () {
        cy.SignIn()
     })

    it('Auth Server', ()=> {

   const profileBtn                     =      'div.actions--left > button > img';
   const followingsTab1counts           =      'div:nth-child(1) > span.quick-stat-figure';
   const followingsTab1                 =      '.profile-quick-stats > :nth-child(1)';
   const modalList                      =      '.person-listing';
   const closeModal                     =      'div.modal-header > button > img';
   const expectedVal1                   =       3;


       
        cy.wait(3000);
        cy.get(profileBtn).click(); 
        cy.wait(3000);
        cy.get(followingsTab1counts).contains(expectedVal1).should('be.visible');
        cy.wait(2000);
        cy.get(followingsTab1).click(); 
        cy.wait(2000);
        cy.get(modalList).should('have.length', expectedVal1)
        //cy.get('div:nth-child(1) > span.quick-stat-figure').should('have.length', 3)
        //cy.get('div:nth-child(1) > span.quick-stat-figure').find('tr').its('length').should('eq', 3)
        cy.wait(2000);
        cy.get(closeModal).click(); 
        
   
   
     }) 

    
})




