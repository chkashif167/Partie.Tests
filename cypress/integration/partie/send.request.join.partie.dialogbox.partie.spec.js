describe("Send Request to Join Partie Test", () => {

    before(function () {
        cy.SignIn()
        cy.fixture('vars.json').as('vars')
     })
   
  
    //create randon parity numbers
   const EditMSG = Math.floor(Math.random() * 1000);
   const FinalMSG = " Edit Mesage Number " + EditMSG;
   //const partiName = 'cypresssendfollowRequest1';
   // const to get html elements
   const goToPartieLink              =              'nav > a:nth-child(2)';

    it("Send Request to Join Partie Test", () => {
        cy.get(goToPartieLink).contains('Partie').click();
      
        cy.wait(3000); 
        cy.get('@vars').then((items) => { 
            const item = items[0] 
            cy.log(item.SEND_REQUEST_TO_JOIN_PARTIE_IN_DIALOG_BOX_NAME);
            cy.get('input#search').type(item.SEND_REQUEST_TO_JOIN_PARTIE_IN_DIALOG_BOX_NAME)  
            cy.wait(5000); 
            cy.get('.partie-title').contains(item.SEND_REQUEST_TO_JOIN_PARTIE_IN_DIALOG_BOX_NAME).click();
          })

        cy.get('div#join-modal div.modal-content > button').should('contain', 'Send Request').click()
               
        });
     
  });
  