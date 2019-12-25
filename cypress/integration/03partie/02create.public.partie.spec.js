describe("Create Public Partie", () => {

  before(function () {
      cy.SignIn()
      cy.fixture('vars.json').as('vars')
   })
 

  //create randon parity numbers
 const partieNumber = Math.floor(Math.random() * 1000);
 const finalPostText = "This is Public Partie Number " + partieNumber;

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

  it("Creating Partie", () => {
      cy.get(goToPartieLink).contains('Partie').click();
      cy.get(createPatie).click();
      cy.get(clickGameImage).click();
      cy.get(supllyPartieName).type(finalPostText);
      cy.get(selectPartieTags).click();
      cy.get('select').select('Any').should('have.value', 'Any');
      cy.get(supllyObjective).type('this is objective');
     // cy.get(selectPrivacyOption).click();
      cy.get(selectTermsandConditions).click();
      cy.wait(1000);
      cy.get(submithotstPartiy).click();
      cy.wait(1000);
      
      
      cy.get('@vars').then((items) => { 
        const item = items[0].PARTIES_LOUBY_URL 
        cy.log(item)
        cy.visit(item);
      })

      cy.wait(1000);
      cy.get(selectPartieTitle).contains(finalPostText).should("be.visible");;
 
  });


  
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
