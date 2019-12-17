describe('6 Follow User From Profile Page', ()=> {

    before(function () {
        cy.SignIn();
        cy.fixture('vars.json').as('vars')
     })

    it('Follow User', ()=> {



       
        cy.get('@vars').then((items) => {
            const item = items[0].USER1_PROFILE
            cy.log(item)
            cy.visit(item)
     
        })
       
    
        cy.get('button:nth-child(1) > span').contains('Follow').click()
        cy.get('div#toast-container div > div ').should('contain', 'User successfully followed')

        
   
   
     }) 

    
})




