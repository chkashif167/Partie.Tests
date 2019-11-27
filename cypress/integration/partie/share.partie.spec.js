describe("Share Partie Test", () => {

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

    it("Share Partie Test", () => {
        cy.get(goToPartieLink).contains('Partie').click();
      
        cy.get('partie-room-list-item:nth-child(1) > div > div.content-block > span.partie-title').click();
        cy.wait(3000); 
        cy.get('div.actions--right > button:nth-child(1) > img').click();
        cy.get('button:nth-child(1) > div > span.action-title').should('contain', 'Share').click();
        cy.get('div#feedback-modal share-button:nth-child(1) > button > div > div > div').click();

        // cy.wait(3000); 
        // cy.get('@vars').then((items) => { 
        //     const item = items[0] 
        //     cy.log(item.JOIN_PARTIE_IN_DIALOG_BOX_NAME);
        //     cy.get('input#search').type(item.JOIN_PARTIE_IN_DIALOG_BOX_NAME)  
        //     cy.get('.partie-title').contains(item.JOIN_PARTIE_IN_DIALOG_BOX_NAME).click();
        //   })

      
               
        });
     
  });
  