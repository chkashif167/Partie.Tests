describe("Send Follow Request Test", () => {

    before(function () {
        cy.SignIn()
        cy.fixture('vars.json').as('vars')
     })
   
  
    //create random parity numbers
   const EditMSG = Math.floor(Math.random() * 1000);
   const FinalMSG = " Edit Mesage Number " + EditMSG;
   const partiName = 'cypresssendfollowRequest1';
   // const to get html elements
   const goToPartieLink              =              'nav > a:nth-child(2)';
   const checkToasterMessage          =               'div#toast-container div > div ';

    it("Creating Partie", () => {
        cy.get(goToPartieLink).contains('Partie').click();
        //cy.get('.partie-title').contains(partiName).click() 

        cy.wait(3000); 
        cy.get('@vars').then((items) => { 
            const item = items[0] 
            cy.log(item.SEND_FOLLOW_REQUEST_IN_DIALOG_BOX_NAME);
            cy.get('input#search').type(item.SEND_FOLLOW_REQUEST_IN_DIALOG_BOX_NAME)  
            cy.wait(5000); 
            cy.get('.partie-title').contains(item.SEND_FOLLOW_REQUEST_IN_DIALOG_BOX_NAME).click();
          })

        cy.get('div#join-modal div.person-listing.partie-host > button').should('contain', 'Follow').click()
        cy.get(checkToasterMessage).should('contain', 'Follow request has sent successfully')
               
        });
     
  });
  