describe('My first Cypress Test', ()=> {

    it('Navigate To Partie Site', () => {
        cy.visit('https://app-dev.partie.com/');
       
    })
    
    it('Auth Server', ()=> {
    cy.get('section.btn-group > a.btn.btn-outline').click()
    cy.get('input[type="text"]')
    .type('kashifn1')
    .get('input[type="password"]')
    .type('!1234567aA')
    cy.get('.bg-blue').click();
    cy.get('div.actions--left > button > img').click(); 
  
   
    cy.wait(['@profile-quick-stats > :nth-child(1)']).click();
    //cy.get('.profile-quick-stats > :nth-child(1)').click(); 
      //cy.get('div.actions--right > button:nth-child(1) > img').click(); 
   
     }) 



   
   

    // it('Navigate to Public Profile', () => {
    //     cy.wait(1000);
    //     cy.get('div.actions--left > button > img').click(); 
    //     cy.wait(500);
    //     cy.get('div.profile-quick-stats > div:nth-child(1)').click();
    
    //  })
    
    // it('LogOut', ()=> {
    // cy.get('div.actions--left > button > img').click();
    // cy.get('div.actions--right > button:nth-child(1) > img').click()
    // cy.get('button:nth-child(2) > div > span.action-description').click();
    // }) 
    
})




