describe('Partie Logout', ()=> {

  

    it('Perfarm Logout Task', () => {
        cy.visit('https://app-dev.partie.com/feed');
       
    })
    
    it('LogOut', ()=> {
    cy.get('div.actions--right > button:nth-child(1) > img').click()
    cy.get('button:nth-child(2) > div > span.action-description').click();
    }) 

    
})




