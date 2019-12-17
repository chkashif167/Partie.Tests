describe('11 Unfollow User On Profile Test', ()=> {

    before(function () {
        cy.SignIn();
        cy.fixture('vars.json').as('vars')
     })

    it('Unfollow', ()=> {



       
        cy.get('@vars').then((items) => {
            const item = items[0].USER1_PROFILE
            cy.log(item)
            cy.visit(item)
        })
       cy.get('div.actions--right > button:nth-child(1) > img').click()  // click on three dots
        cy.wait(6000)
        cy.get('span.action-title').contains('Unfollow').click()
        cy.get('div#toast-container div > div ').should('contain', 'User successfully un-followed')

        
   
   
     }) 

    
})




