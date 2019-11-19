describe("Accept Pending Request to Join Partie", () => {

  before(function () {
      cy.SignIn()
   })
 

  //create randon parity numbers
 const partieNumber =   Math.floor(Math.random() * 1000);
 const finalPostText =  "This is Public Partie Number " + partieNumber;
 const PartieNumber =   'This is Public Partie Number 332';

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
 const checkToasterMessage          =               'div#toast-container div > div ';
 const clickOpenPendingModal       =               'div.user-actions > button:nth-child(2) > img';
 const AcceptPedingRequestButton    =               'div#join-modal div.btn-group.request-actions > button > img';
 const closeModalButton             =               'div.modal-header > button > img';

  it("Creating Partie", () => {
      cy.get(goToPartieLink).should('contain', 'Partie').click(); 
    //   cy.get(createPatie).click();
    //   cy.get(clickGameImage).click();
    //   cy.get(supllyPartieName).type(finalPostText);
    //   cy.get(selectPartieTags).click();
    //   cy.get('select').select('Any').should('have.value', 'Any');
    //   cy.get(supllyObjective).type('this is objective');
    //   cy.get(selectTermsandConditions).click();
    //   cy.wait(2000);
    //   cy.get(submithotstPartiy).click();
    //   cy.wait(2000);
    //   cy.visit("https://app-dev.partie.com/partie/all");
      cy.wait(2000);
    //   cy.get(selectPartieTitle).contains(finalPostText).should("be.visible");
      cy.get(selectPartieTitle).contains(PartieNumber).click();
      cy.wait(1000);
      cy.get(clickOpenPendingModal).click(); 
      cy.wait(3000); 
      cy.get(AcceptPedingRequestButton).click(); 
      cy.wait(1000);
      cy.get(checkToasterMessage).should('contain', 'Request accepted successfully');
      cy.wait(3000); 
      cy.get(closeModalButton).click(); 
      
 
  });
});


