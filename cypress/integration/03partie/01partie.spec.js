describe("Partie 1", () => {
  before(() => {
    cy.SignIn();
     cy.saveLocalStorage();checkToasterMessage
  });

  beforeEach(() => {
    cy.fixture("vars.json").as("vars");
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    // cy.saveLocalStorage();
    //cy.SignIn()
  });

  //create randon parity numbers
  const partieNumber = Math.floor(Math.random() * 2000);

  const FinalPrivatePartieMessage = "This is message of Private Partie Number " + partieNumber;
  const FinalPublicPartieMessage = "This is message of Pubic Partie Number " + partieNumber;
  const finalSendMessagePartie = "This is message of Public Partie Number " + partieNumber;
  const finalCommencePartieNumber = "This is Commence Partie Number " + partieNumber;
  const FinalEndPartieNumber = "This is End Partie Number " + partieNumber;

  const FinalPartieNumber = "This is partie number " + partieNumber;
  


 

  // const to get html elements
  const goToPartieLink = "nav > a:nth-child(2)";
  const createPatie = "partie-room-list > div > a";
  const clickGameImage = "div:nth-child(1) > partie-game > div > img";
  const supllyPartieName = 'input[name="displayName"]';
  const selectPartieTags =  'form[name="room"] partie-room-tags > div > div:nth-child(1)';
  const supllyObjective = 'input[name="description"]';

  const selectPrivacyOption       = 'form[name="room"] div.switch-group > label > img:nth-child(4)';
  const selectTermsandConditions  = 'form[name="room"] div:nth-child(6) > div > label > span';
  
  const submithotstPartiy = 'form[name="room"] > button[type="submit"]';
  const selectPartieTitle = "span.partie-title";
  const clickonInviteButton        =                 'div.modal-content > div > div:nth-child(1) > button';
  const clickPlusButtonToOpenPopup =                 'div.user-actions > button:nth-child(1) > img';
  const clickOnModalCloseButton    =                 'div.modal-header > button > img';
  const clickOpenPendingModal       =               'div.user-actions > button:nth-child(2) > img';
  const AcceptPedingRequestButton    =               'div#join-modal div.btn-group.request-actions > button > img';
  const closeModalButton             =               'div.modal-header > button > img';
  const patcipantsModal              =               'div.users > span';
  const removeUserButton             =               'button#removeButton';
  const hideContextMenu              =                'div#overlayDiv';
  const clickonYesBottInDialog        =               'div > button.btn.btn-outline';
  const partiePageTitle              =                'div > h1';

  /////////////////////////////////////////////////////////////////////

 

  const clickOnThreeDots = "div.actions--right > button:nth-child(1) > img";
  const clickCommencebuttonMenu =
    "span.action-title";
  const checkToasterMessage = "div#toast-container div > div ";
  const checkEndPartieButtonExist =
    "button:nth-child(2) > div > span.action-title";
  const inputField = "input#message-input";
  const clickSubmitButton = 'div > button[type="submit"]';
  const varifiyMessage = "div > div.chat-message-content";
  /////////////////////////////////////////////////////////////////////////////////////////
 

  it("Create Private Partie Test", () => {
    cy.get(goToPartieLink)
      .contains("Partie")
      .click();
    cy.get(createPatie).click();
    cy.get(clickGameImage).click();
    cy.get(supllyPartieName).type(FinalPrivatePartieMessage);
    cy.get(selectPartieTags).click();
    cy.get("select")
      .select("Any")
      .should("have.value", "Any");
    cy.get(supllyObjective).type("this is objective");
    cy.get(selectPrivacyOption).click();
    cy.get(selectTermsandConditions).click();
    cy.get(submithotstPartiy).click();

    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.PARTIES_LOUBY_URL);
      cy.visit(item.PARTIES_LOUBY_URL);
    });

    cy.get(selectPartieTitle)
      .contains(FinalPrivatePartieMessage)
      .should("be.visible");
  });
  /////////////////////////////////////////////////////////////////////////
  it("Create Public Partie", () => {
    cy.get(goToPartieLink)
      .contains("Partie")
      .click();
    cy.get(createPatie).click();
    cy.get(clickGameImage).click();
    cy.get(supllyPartieName).type(FinalPublicPartieMessage);
    cy.get(selectPartieTags).click();
    cy.get("select")
      .select("Any")
      .should("have.value", "Any");
    cy.get(supllyObjective).type("this is objective");
    // cy.get(selectPrivacyOption).click();
    cy.get(selectTermsandConditions).click();
    cy.wait(1000);
    cy.get(submithotstPartiy).click();
    cy.wait(1000);

    cy.get("@vars").then(items => {
      const item = items[0].PARTIES_LOUBY_URL;
      cy.log(item);
      cy.visit(item);
    });

    cy.wait(1000);
    cy.get(selectPartieTitle)
      .contains(FinalPublicPartieMessage)
      .should("be.visible");
  });
  /////////////////////////////////////////////////////////////////////////////
  it("Send Message In Partie", () => {
    cy.get(goToPartieLink)
      .contains("Partie")
      .click();
    cy.get(createPatie).click();
    cy.get(clickGameImage).click();
    cy.get(supllyPartieName).type(finalSendMessagePartie);
    cy.get(selectPartieTags).click();
    cy.get("select")
      .select("Any")
      .should("have.value", "Any");
    cy.get(supllyObjective).type("this is objective");
    // cy.get(selectPrivacyOption).click();
    cy.get(selectTermsandConditions).click();

    cy.wait(2000);
    cy.get(submithotstPartiy).click();
    cy.wait(2000);

    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.PARTIES_LOUBY_URL);
      cy.visit(item.PARTIES_LOUBY_URL);
    });

    cy.wait(2000);
    cy.get(selectPartieTitle)
      .contains(finalSendMessagePartie)
      .should("be.visible");
    cy.get(selectPartieTitle)
      .contains(finalSendMessagePartie)
      .click();
    cy.wait(2000);
    cy.get(clickOnThreeDots).click();
    cy.wait(2000);
    cy.get(clickCommencebuttonMenu).contains('Commence Partie').click();
    cy.wait(2000);
    cy.get(checkToasterMessage).should(
      "contain",
      "Partie successfully commenced!"
    );
    cy.wait(2000);
    cy.get(inputField).type(FinalPartieNumber);

    cy.get(clickSubmitButton).click();
    cy.scrollTo("500px");
    cy.get(varifiyMessage)
      .contains(FinalPartieNumber)
      .should("be.visible");
  });
    /////////////////////////////////////////////////////////////////////////////////////////
  it("Share Partie Test", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
        cy.visit(item.PARTIES_LOUBY_URL);
    });
    cy.get(createPatie).click();
    cy.get(clickGameImage).click();
    cy.get(supllyPartieName).type(finalSendMessagePartie);
    cy.get(selectPartieTags).click();
    cy.get("select")
      .select("Any")
      .should("have.value", "Any");
    cy.get(supllyObjective).type("this is objective");
    // cy.get(selectPrivacyOption).click();
    cy.get(selectTermsandConditions).click();
    cy.wait(1000);
    cy.get(submithotstPartiy).click();
    cy.wait(1000);

    cy.get("@vars").then(items => {
      const item = items[0].PARTIES_LOUBY_URL;
      cy.log(item);
      cy.visit(item);
    });

    cy.wait(1000);
    cy.get(selectPartieTitle)
      .contains(finalSendMessagePartie)
      .click();

      cy.wait(3000);
      cy.get("div.actions--right > button:nth-child(1) > img").click();
      cy.get("span.action-title")
        .contains("Share")
        .click();
      // cy.get("span.action-title"
      // ).first().click();
      cy.wait(3000);
      cy.get('div#feedback-modal').click()
  });

 /////////////////////////////////////////////////////////////////////////////////////
  it("Commence Partie", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
        cy.visit(item.PARTIES_LOUBY_URL);
    });
    cy.get(createPatie).click();
    cy.get(clickGameImage).click();
    cy.get(supllyPartieName).type(finalCommencePartieNumber);
    cy.get(selectPartieTags).click();
    cy.get("select")
      .select("Any")
      .should("have.value", "Any");
    cy.get(supllyObjective).type("this is objective");
    // cy.get(selectPrivacyOption).click();
    cy.get(selectTermsandConditions).click();
    cy.wait(1000);
    cy.get(submithotstPartiy).click();

    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.PARTIES_LOUBY_URL);
      cy.visit(item.PARTIES_LOUBY_URL);
    });

    cy.wait(3000);
    cy.get(selectPartieTitle)
      .contains(finalCommencePartieNumber)
      .should("be.visible");
    cy.get(selectPartieTitle)
      .contains(finalCommencePartieNumber)
      .click();

    cy.wait(3000);
    cy.get(clickOnThreeDots).click();
    cy.wait(3000);
    cy.get(clickCommencebuttonMenu).contains('Commence Partie').click();
    cy.wait(3000);
    cy.get(checkToasterMessage).should(
      "contain", "Partie successfully commenced!"
    );


  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  it("End Partie", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
        cy.visit(item.PARTIES_LOUBY_URL);
    });
    cy.get(createPatie).click();
    cy.get(clickGameImage).click();
    cy.get(supllyPartieName).type(FinalEndPartieNumber);
    cy.get(selectPartieTags).click();
    cy.get("select")
      .select("Any")
      .should("have.value", "Any");
    cy.get(supllyObjective).type("this is objective");
    // cy.get(selectPrivacyOption).click();
    cy.get(selectTermsandConditions).click();
    cy.get(submithotstPartiy).click();
    cy.wait(3000);
    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.PARTIES_LOUBY_URL);
      cy.visit(item.PARTIES_LOUBY_URL);
    });
    cy.wait(3000);
    cy.get(selectPartieTitle)
      .contains(FinalEndPartieNumber)
      .should("be.visible");
    cy.wait(2000);
    cy.get(selectPartieTitle)
      .contains(FinalEndPartieNumber)
      .click();
    cy.wait(2000);
    cy.get(clickOnThreeDots).click();
    cy.wait(2000);
    cy.get(clickCommencebuttonMenu).contains('Commence Partie').click();
    cy.wait(2000);
    cy.get(checkToasterMessage).should(
      "contain", "Partie successfully commenced!"
    );
    cy.wait(2000);
    cy.get(clickOnThreeDots).click();
    cy.wait(2000);
    cy.get(checkEndPartieButtonExist)
      .should("contain", "End Partie")
      .click();
      cy.wait(2000);
    //cy.get(hideContextMenu).click();
    cy.get(clickonYesBottInDialog).click();
     cy.wait(2000);
    cy.get(partiePageTitle).should("contain", "Partie");
  });

   ///////////////////////////////////////////////////////////////////////////////////////
   it("Invite Friend To Join Partie", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
        cy.visit(item.PARTIES_LOUBY_URL);
    });
    cy.get(createPatie).click();
    cy.get(clickGameImage).click();
    cy.get(supllyPartieName).type(FinalPartieNumber);
    cy.get(selectPartieTags).click();
    cy.get("select")
      .select("Any")
      .should("have.value", "Any");
    cy.get(supllyObjective).type("this is objective");
    // cy.get(selectPrivacyOption).click();
    cy.get(selectTermsandConditions).click();
    cy.wait(2000);
    cy.get(submithotstPartiy).click();
    cy.wait(2000);

    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.PARTIES_LOUBY_URL);
      cy.visit(item.PARTIES_LOUBY_URL);
    });

    cy.wait(2000);
    cy.get(selectPartieTitle)
      .contains(FinalPartieNumber)
      .should("be.visible");
    cy.get(selectPartieTitle)
      .contains(FinalPartieNumber)
      .click();
    cy.wait(1000);
    cy.get(clickPlusButtonToOpenPopup).click();
    cy.wait(3000);
    cy.get(clickonInviteButton).click();
    cy.wait(2000);
    cy.get(checkToasterMessage).should("contain", "User is invited");
    cy.get(clickOnModalCloseButton).click();
  });

  /////////////////////////////////////////////////////////////////////////////////////
  it("Accept Pending Request to Join Partie", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
        cy.visit(item.PARTIES_LOUBY_URL);
    });
    //cy.get(selectPartieTitle).contains('(Host)').click();

    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.ACCEPT_PENDING_REQUEST_TO_JOIN_PARTIE_LINK);
      cy.visit(item.ACCEPT_PENDING_REQUEST_TO_JOIN_PARTIE_LINK);
    });

    cy.wait(1000);
    cy.get(clickOpenPendingModal).click();
    cy.wait(3000);
    cy.get(AcceptPedingRequestButton).click();
    cy.wait(1000);
    cy.get(checkToasterMessage).should(
      "contain",
      "Request accepted successfully"
    );
    cy.wait(3000);
    cy.get(closeModalButton).click();
  });
  //////////////////////////////////////////////////////////////////////

  it("Ban User From The Partie Partie", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
        cy.visit(item.PARTIES_LOUBY_URL);
    });
    //cy.get(selectPartieTitle).contains('(Host)').click();

    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.BAN_USER_PARTIE_LINK);
      cy.visit(item.BAN_USER_PARTIE_LINK);
    });

    cy.wait(1000);
    cy.get(patcipantsModal).click();
    cy.wait(1000);
    cy.get(removeUserButton).first().click();
    cy.wait(1000);
    cy.get("select").select("Inappropriate chat conduct");
    cy.get("div#DivremoveDialog div:nth-child(2) > button").click();
    cy.get(checkToasterMessage).should(
      "contain",
      "User is Successfully Banned"
    );
    cy.wait(1000);
    cy.get(closeModalButton).click();
  });


  /////////////////////////////////////////////////////////////////////////////////////////
    it("Send Request to Join Partie Test", () => {
      cy.get("@vars").then(items => {
        const item = items[0];
          cy.visit(item.PARTIES_LOUBY_URL);
      });

    cy.wait(3000);
    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.SEND_REQUEST_TO_JOIN_PARTIE_IN_DIALOG_BOX_NAME);
      cy.get('input#search').clear();
      cy.get("input#search").type(
        item.SEND_REQUEST_TO_JOIN_PARTIE_IN_DIALOG_BOX_NAME
      );
      cy.wait(5000);
      cy.get(".partie-title")
        .contains(item.SEND_REQUEST_TO_JOIN_PARTIE_IN_DIALOG_BOX_NAME)
        .click();
    });

    cy.get("div#join-modal div.modal-content > button")
      .should("contain", "Send Request")
      .click();
      cy.get(checkToasterMessage).should(
            "contain",
            "Join room request sent successfully"
          );
  });


  //////////////////////////////////////////////////////////////////////////////////////////////

    it("Send Follow Request Test", () => {
      cy.get("@vars").then(items => {
        const item = items[0];
          cy.visit(item.PARTIES_LOUBY_URL);
      });
      //cy.get('.partie-title').contains(partiName).click()
  
      cy.wait(3000);
      cy.get("@vars").then(items => {
        const item = items[0];
        cy.log(item.SEND_FOLLOW_REQUEST_IN_DIALOG_BOX_NAME);
        cy.get('input#search').clear();
        cy.get("input#search").type(item.SEND_FOLLOW_REQUEST_IN_DIALOG_BOX_NAME);
        cy.wait(5000);
        cy.get(".partie-title")
          .contains(item.SEND_FOLLOW_REQUEST_IN_DIALOG_BOX_NAME)
          .click();
      });
  
      cy.get("div#join-modal div.person-listing.partie-host > button")
        .should("contain", "Follow")
        .click();

    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////

  it("Join Partie In Dialog Box Test", () => {
     cy.get("@vars").then(items => {
      const item = items[0];
        cy.visit(item.PARTIES_LOUBY_URL);
    });

    cy.wait(3000);
    cy.get("@vars").then(items => {
      const item = items[0];
      cy.log(item.JOIN_PARTIE_IN_DIALOG_BOX_NAME);
      cy.get("input#search").type(item.JOIN_PARTIE_IN_DIALOG_BOX_NAME);
      cy.wait(5000);
      cy.get(".partie-title")
        .contains(item.JOIN_PARTIE_IN_DIALOG_BOX_NAME)
        .click();
    });

    //cy.get('.partie-title').contains(partiName).click()
    cy.get("div#join-modal div.modal-content > button")
      .should("contain", "Join Room")
      .click();
    cy.scrollTo("500px");
  });
  ////////////////////////////////////////////////////////////////////////////////////////////



});
