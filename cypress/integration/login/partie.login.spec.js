describe('My first Cypress Test', ()=> {

    before(function () {
        cy.SignIn()
     })

    it('Auth Server', ()=> {

   const profileBtn         =      'div.actions--left > button > img';
   const profilePageStats   =       '.profile-quick-stats';

       
        cy.wait(3000);
        cy.get(profileBtn).click(); 
        cy.wait(3000);
        cy.get(profilePageStats).should('be.visible');
 
     }) 

    
})




