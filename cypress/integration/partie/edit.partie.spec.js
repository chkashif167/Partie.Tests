describe("Edit Partie Test", () => {

    before(function () {
        cy.SignIn()
     })
   
  
    //create randon parity numbers
   const EditMSG = Math.floor(Math.random() * 1000);
   const FinalMSG = " Edit Partie Number " + EditMSG;
  
   // const to get html elements
   const goToPartieLink              =              'nav > a:nth-child(2)';
   const createPatie                 =              'partie-room-list > div > a';
   const clickGameImage              =              'div:nth-child(1) > partie-game > div > img';
   const supllyPartieName            =              'input[name="displayName"]';
   const selectPartieTags           =               'form[name="room"] partie-room-tags > div > div:nth-child(1)';
   const supllyObjective            =               'input[name="description"]';
   const selectPrivacyOption        =               'form[name="room"] div.switch-group > label > img:nth-child(4)';
   const selectTermsandConditions   =               'form[name="room"] div:nth-child(6) > div > label > span';
   const submithotstPartiy          =               'form[name="room"] > button[type="submit"]'; 
   const selectPartieTitle          =                'span.partie-title';
   const clickOnThreeDots           =                'div.actions--right > button:nth-child(1) > img';
   const clickCommencebuttonMenu     =               'button:nth-child(2) > div > span.action-title';
   const checkToasterMessage          =              'div#toast-container div > div ';
  const CheckSettingExisit           =               'button:nth-child(3) > div > span.action-title';
  
    it("Edit Partie", () => {
        cy.get(goToPartieLink).contains('Partie').click();
        cy.get('span.partie-title').contains('(Host)').click();

        cy.wait(1000);
        cy.get(clickOnThreeDots).click();
         cy.wait(1000);
        cy.get(CheckSettingExisit).should('contain', 'Partie Settings').click();
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
  