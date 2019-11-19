describe("Ban User From The Partie Partie", () => {

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
 const patcipantsModal              =               'div.users > span';
 const removeUserButton             =               'button#removeButton > img';
 const closeModalButton             =               'div.modal-header > button > img';

  it("Creating Partie", () => {
      cy.get(goToPartieLink).should('contain', 'Partie').click(); 
      cy.get(selectPartieTitle).contains(PartieNumber).click();
      cy.wait(1000);
      cy.get(patcipantsModal).click(); 
      cy.wait(3000); 
      cy.get(removeUserButton).click(); 
      cy.wait(1000);
      cy.get('select').select('Inappropriate chat conduct');
      cy.get('div#DivremoveDialog div:nth-child(2) > button').click();
      cy.get(checkToasterMessage).should('contain', 'User is Successfully Banned');
      cy.wait(3000); 
      cy.get(closeModalButton).click(); 
      
 
  });
});


