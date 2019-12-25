describe("Edit Partie Test", () => {

    before(function () {
        cy.SignIn()
     })
   
  
    //create randon parity numbers
   const EditMSG = Math.floor(Math.random() * 1000);
   const FinalMSG = " Edit Partie Number " + EditMSG;
  

  
    it("Edit Partie Test", () => {
        cy.get('nav > a:nth-child(2)').contains('Partie').click();
        cy.get('span.partie-title').contains('(Host)').click();

        cy.wait(1000);
        cy.get('div.actions--right > button:nth-child(1) > img').click();
         cy.wait(1000);
        cy.get('button:nth-child(3) > div > span.action-title').should('contain', 'Partie Settings').click();
        cy.wait(1000);
        cy.get('input[name="displayName"]').focus().clear();
        cy.get('input[name="displayName"]').type(FinalMSG);
        cy.get('form[name="room"] div > div:nth-child(3)').click(); 
        cy.get('input[name="description"]').focus().clear();
        cy.get('input[name="description"]').type(FinalMSG)
        cy.get('.switch.icons-lg span').click()
        cy.get('div#partie-settings-modal div.modal-fixed-bottom > button').click()
  //      cy.reload();
        cy.get('div.content > h1').should('contain', FinalMSG)
     
   
    });
  });
  