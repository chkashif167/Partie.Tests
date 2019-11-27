describe("Join Partie In Dialog Box Test", () => {

    before(function () {
        cy.SignIn()
        cy.fixture('vars.json').as('vars')
     })
   
  
    //create randon parity numbers
   const EditMSG = Math.floor(Math.random() * 1000);
   const FinalMSG = " Edit Mesage Number " + EditMSG;
   const partiName = 'Join Partie Request 1';
   // const to get html elements
   const goToPartieLink              =              'nav > a:nth-child(2)';

    it("Join Partie In Dialog Box Test", () => {
        cy.get(goToPartieLink).contains('Partie').click();


        cy.get('@vars').then((items) => { 
            const item = items[0] 
            cy.log(item.JOIN_PARTIE_IN_DIALOG_BOX_NAME);
            cy.wait(1000); 
            cy.get('.partie-title').contains(item.JOIN_PARTIE_IN_DIALOG_BOX_NAME).click();
          })

        //cy.get('.partie-title').contains(partiName).click() 
        cy.get('div#join-modal div.modal-content > button').should('contain', 'Join Room').click()
               
        });
     
  });
  