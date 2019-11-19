describe("Edit Partie Test", () => {

    before(function () {
        cy.SignIn()
     })
   
  
    //create randon parity numbers
   const EditMSG = Math.floor(Math.random() * 1000);
   const FinalMSG = " Edit Mesage Number " + EditMSG;
   const partiName = 'cypresssendfollowRequest1';
  
   // const to get html elements
   const goToPartieLink              =              'nav > a:nth-child(2)';

  
    it("Creating Partie", () => {
        cy.get(goToPartieLink).contains('Partie').click();
        cy.get('input#search').type('cypresssendfollowRequest1');
        cy.wait(4000);
        cy.get('partie-room-list-item > div > div.content-block > span.partie-title').should('contain', partiName).click();
        cy.wait(1000);


        
       
   
    });
  });
  