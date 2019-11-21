describe("Send Follow Request Test", () => {

    before(function () {
        cy.SignIn()
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
        cy.get('.partie-title').contains(partiName).click() 
        cy.get('div#join-modal div.person-listing.partie-host > button').should('contain', 'Follow').click()
        cy.get(checkToasterMessage).should('contain', 'Follow request has sent successfully')
               
        });
     
  });
  