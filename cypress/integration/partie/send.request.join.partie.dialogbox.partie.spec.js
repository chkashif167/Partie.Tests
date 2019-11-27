describe("Send Request to Join Partie Test", () => {

    before(function () {
        cy.SignIn()
     })
   
  
    //create randon parity numbers
   const EditMSG = Math.floor(Math.random() * 1000);
   const FinalMSG = " Edit Mesage Number " + EditMSG;
   const partiName = 'cypresssendfollowRequest1';
   // const to get html elements
   const goToPartieLink              =              'nav > a:nth-child(2)';

    it("Send Request to Join Partie Test", () => {
        cy.get(goToPartieLink).contains('Partie').click();
        cy.get('.partie-title').contains(partiName).click() 
        cy.get('div#join-modal div.modal-content > button').should('contain', 'Send Request').click()
               
        });
     
  });
  