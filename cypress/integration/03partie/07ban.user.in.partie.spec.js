describe("Ban User From The Partie Partie", () => {

  before(function () {
      cy.SignIn();
      cy.fixture('vars.json').as('vars')
   })
 

  //create randon parity numbers
 const partieNumber =   Math.floor(Math.random() * 1000);
 const finalPostText =  "This is Public Partie Number " + partieNumber;
 const PartieNumber =   'This is Public Partie Number 332';

 // const to get html elements
 const goToPartieLink              =                'nav > a:nth-child(2)';
 const checkToasterMessage          =               'div#toast-container div > div ';
 const patcipantsModal              =               'div.users > span';
 const removeUserButton             =               'button#removeButton > img';
 const closeModalButton             =               'div.modal-header > button > img';

  it("Ban User From The Partie Partie", () => {
      cy.get(goToPartieLink).should('contain', 'Partie').click(); 
      //cy.get(selectPartieTitle).contains('(Host)').click();

      cy.get('@vars').then((items) => { 
        const item = items[0] 
        cy.log(item.BAN_USER_PARTIE_LINK);
        cy.visit(item.BAN_USER_PARTIE_LINK);
      })

      cy.wait(1000);
      cy.get(patcipantsModal).click(); 
      cy.wait(1000); 
      cy.get(removeUserButton).click(); 
      cy.wait(1000);
      cy.get('select').select('Inappropriate chat conduct');
      cy.get('div#DivremoveDialog div:nth-child(2) > button').click();
      cy.get(checkToasterMessage).should('contain', 'User is Successfully Banned');
      cy.wait(1000); 
      cy.get(closeModalButton).click(); 
      
 
  });
});


