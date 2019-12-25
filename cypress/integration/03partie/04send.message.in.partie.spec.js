describe("Send Message In Partie", () => {

  before(function () {
      cy.SignIn()
      cy.fixture('vars.json').as('vars')
   })
 

  //create randon parity numbers
 const partieNumber = Math.floor(Math.random() * 2000);
 const finalPartietText = "This is Partie Number " + partieNumber;

 const messaenumber = Math.floor(Math.random() * 2000);
 const finalmessage = "This is message after commence partie " + messaenumber;

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
 const inputField                   =               'input#message-input';
 const clickSubmitButton            =               'div > button[type="submit"]';
 const varifiyMessage               =               'div > div.chat-message-content'
 

  it("Send Message In Partie", () => {
      cy.get(goToPartieLink).contains('Partie').click();
      cy.get(createPatie).click();
      cy.get(clickGameImage).click();
      cy.get(supllyPartieName).type(finalPartietText);
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
      cy.get(selectPartieTitle).contains(finalPartietText).should("be.visible");
      cy.get(selectPartieTitle).contains(finalPartietText).click();
      cy.wait(2000);
      cy.get(clickOnThreeDots).click(); 
      cy.wait(2000);
      cy.get(clickCommencebuttonMenu).click();
        cy.wait(2000);
      cy.get(checkToasterMessage).should('contain', 'Partie successfully commenced!')
       cy.wait(2000);
       cy.get(inputField).type(finalmessage);
  
       cy.get(clickSubmitButton).click()
       cy.scrollTo('500px')
       cy.get(varifiyMessage).contains(finalmessage).should("be.visible");
    
 
  });
});
