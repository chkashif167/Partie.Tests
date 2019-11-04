describe('My first Cypress Test', ()=> {

    it('Navigate To Partie Site', () => {
        cy.visit('https://app-dev.partie.com/');
       
    })
    
    const loginBtn          =   'section.btn-group > a.btn.btn-outline';
    const userNameField     =   'input[type="text"]';
    const passwordField     =   'input[type="password"]';
    const loginFormBtn      =   '.bg-blue';
    const profileBtn        =   'div.actions--left > button > img';

    it('Auth Server', ()=> {
    cy.get(loginBtn).click()
    cy.get(userNameField)
    .type('kashifn4')
    .get(passwordField)
    .type('!12345678aA')
    cy.get(loginFormBtn).click();
    cy.wait(3000);
    cy.get(profileBtn).click(); 

 
   const followingsTab1     =      '.profile-quick-stats > :nth-child(1)';
   const followersTab2      =      '.profile-quick-stats > :nth-child(2)';
   const partiesTab3        =      '.profile-quick-stats > :nth-child(3)';
   const badgesTab4         =      '.profile-quick-stats > :nth-child(4)';
   const closeModal         =      'div.modal-header > button > img';

    
        cy.wait(5000);
        cy.get(followingsTab1).click(); 
        cy.get('.person-listing').should('have.length', 3)
        // cy.get('.datatable').find('tr').its('length').should('eq', 4)
        cy.wait(5000);
        cy.get(closeModal).click(); 
        
        
        cy.wait(5000);
        cy.get(followersTab2).click(); 
        cy.get('.person-listing').should('have.length', 16)
        cy.wait(5000);
        cy.get(closeModal).click(); 


        cy.wait(5000);
        cy.get(partiesTab3).click(); 
        cy.get('.partie-item').should('have.length', 32)
        cy.wait(5000);
        cy.get(closeModal).click(); 


        cy.wait(5000);
        cy.get(badgesTab4).click(); 
        cy.get('.quick-stat-figure').contains('9')
        cy.wait(5000);
        cy.get(closeModal).click(); 
       
   
     }) 

    
})




