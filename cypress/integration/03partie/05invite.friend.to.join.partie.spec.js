describe("Invite Friend To Join Partie", () => {

  before(function () {
      cy.SignIn()
      cy.fixture('vars.json').as('vars')
   })
 

  //create randon parity numbers
 const partieNumber = Math.floor(Math.random() * 1000);
 const finalPostText = "This is Public Partie Number to send join request" + partieNumber;

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
 const clickPlusButtonToOpenPopup =                 'div.user-actions > button:nth-child(1) > img';
 const checkToasterMessage          =               'div#toast-container div > div ';
 const clickonInviteButton        =                 'div.modal-content > div > div:nth-child(1) > button';
 const clickOnModalCloseButton    =                 'div.modal-header > button > img';

  it("Creating Partie", () => {
      cy.get(goToPartieLink).should('contain','Partie').click();
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
     
      cy.get('@vars').then((items) => { 
        const item = items[0] 
        cy.log(item.PARTIES_LOUBY_URL)
        cy.visit(item.PARTIES_LOUBY_URL);
      })


      cy.wait(2000);
      cy.get(selectPartieTitle).contains(finalPostText).should("be.visible");
      cy.get(selectPartieTitle).contains(finalPostText).click();
      cy.wait(1000);
      cy.get(clickPlusButtonToOpenPopup).click(); 
      cy.wait(3000); 
      cy.get(clickonInviteButton).click(); 
      cy.wait(2000); 
      cy.get(checkToasterMessage).should('contain', 'User is invited')
        cy.get(clickOnModalCloseButton).click(); 
     
      
 
  });
});

