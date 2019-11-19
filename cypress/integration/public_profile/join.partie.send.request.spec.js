describe("Edit Partie Test", () => {

    before(function () {
        cy.SignIn()
     })
   
  
    //create randon parity numbers
   const EditMSG = Math.floor(Math.random() * 1000);
   const FinalMSG = " Edit Mesage Number " + EditMSG;
  
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
  
    it("Creating Partie", () => {
        cy.get(goToPartieLink).contains('Partie').click();


        
      //   cy.get(createPatie).click();
      //   cy.get(clickGameImage).click();
      //   cy.get(supllyPartieName).type(finalPostText);
      //   cy.get(selectPartieTags).click();
      //   cy.get('select').select('Any').should('have.value', 'Any');
      //   cy.get(supllyObjective).type('this is objective');
      //  // cy.get(selectPrivacyOption).click();
      //   cy.get(selectTermsandConditions).click();
      //   cy.wait(2000);
      //   cy.get(submithotstPartiy).click();
      //   cy.wait(2000);
      //   cy.visit("https://app-dev.partie.com/partie/all");
      //   cy.wait(2000);
      //   cy.get(selectPartieTitle).contains(finalPostText).should("be.visible");
      //   cy.get(selectPartieTitle).contains(finalPostText).click();
      //   cy.wait(2000);
      //   cy.get(clickOnThreeDots).click(); 
      //   cy.wait(2000);
      //   cy.get(clickCommencebuttonMenu).click();
      //   //div#toast-container div > div --- Partie successfully commenced!
      //   cy.wait(2000);
      //   cy.get(checkToasterMessage).should('contain', 'Partie successfully commenced!')
      //   cy.wait(2000);
    //     cy.get('partie-room-list-item:nth-child(1) > div > div.content-block > span.partie-title').should('contain', '(Commenced)').click();
    //     //cy.get(clickOnThreeDots).click(); 
    //     cy.wait(1000);
    //     //cy.get(clickOnThreeDots).invoke('attr', 'alt').should('include', 'More Icon').click();
    //     cy.get(clickOnThreeDots).click();
    //      cy.wait(1000);
    //     cy.get(CheckSettingExisit).should('contain', 'Partie Settings').click();
    //     cy.wait(1000);
    //     cy.get('input[name="displayName"]').focus().clear();
    //     //cy.get('input[name="displayName"]').invoke('val', '');
    //    // cy.get('input[name="displayName"]').type({selectall}{backspace})
    //     cy.get('input[name="displayName"]').type(FinalMSG);
    //     cy.get('form[name="room"] div > div:nth-child(3)').click(); 
    //     cy.get('input[name="description"]').focus().clear();
    //     cy.get('input[name="description"]').type(FinalMSG)
    //     cy.get('.switch.icons-lg span').click()
    //    // cy.get('.switch.icons-lg img').invoke('attr', 'src').should('include', 'lock-green.svg').click();
    //    // cy.get('form[name="room"] img:nth-child(3)').click();
    //     cy.get('div#partie-settings-modal div.modal-fixed-bottom > button').click()
    //     cy.reload();
    //     cy.get('div.content > h1').should('contain', FinalMSG)

        
       
   
    });
  });
  