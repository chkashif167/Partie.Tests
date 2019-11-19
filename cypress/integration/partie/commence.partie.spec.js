describe("Commence Partie", () => {

  before(function () {
      cy.SignIn()
   })
 

  //create randon parity numbers
 const partieNumber = Math.floor(Math.random() * 100);
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
 const clickOnThreeDots           =                 'div.actions--right > button:nth-child(1) > img';
 const clickCommencebuttonMenu     =                'button:nth-child(2) > div > span.action-title';
 const checkToasterMessage          =               'div#toast-container div > div ';
 const checkEndPartieButtonExist    =               'button:nth-child(2) > div > span.action-title';
 const hideContextMenu              =                'div#overlayDiv';

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
      cy.wait(2000);
      cy.get(submithotstPartiy).click();
      cy.wait(2000);
      cy.visit("https://app-dev.partie.com/partie/all");
      cy.wait(2000);
      cy.get(selectPartieTitle).contains(finalPostText).should("be.visible");
      cy.get(selectPartieTitle).contains(finalPostText).click();
      cy.wait(2000);
      cy.get(clickOnThreeDots).click(); 
      cy.wait(2000);
      cy.get(clickCommencebuttonMenu).click();
        cy.wait(2000);
      cy.get(checkToasterMessage).should('contain', 'Partie successfully commenced!')
      cy.wait(2000);
      cy.get(clickOnThreeDots).click(); 
      cy.wait(2000);
      cy.get(checkEndPartieButtonExist).should('contain', 'End Partie');
      cy.get(hideContextMenu).click();
 
  });
});
