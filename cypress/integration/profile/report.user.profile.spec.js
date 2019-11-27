describe('Profile Page Badges Count Test', ()=> {

    before(function () {
        cy.SignIn();
        cy.fixture('vars.json').as('vars')
     })

    it('Auth Server', ()=> {

   const profileBtn                     =      'div.actions--left > button > img';
   const BadgesTAb                      =      'div:nth-child(4) > span.quick-stat-figure';
   const partiesTab3                    =      '.profile-quick-stats > :nth-child(4)';
   const modalList                      =      '.partie-title';
   const closeModal                     =      'div.modal-header > button > img';



       
        cy.get('@vars').then((items) => {
            const item = items[0].USER1_PROFILE
            cy.log(item)
            cy.visit(item)
     
        })
       
        cy.get('div.actions--right > button:nth-child(1) > img').click()  // click on three dots
        cy.get('.action-title').contains('Report').click()
        cy.get('textarea#report').type('Reprting This User');
        cy.get('div#feedback-modal div.modal-content > button').click();
        cy.get('div#toast-container div > div ').should('contain', 'User successfully reported')

        
   
   
     }) 

    
})




