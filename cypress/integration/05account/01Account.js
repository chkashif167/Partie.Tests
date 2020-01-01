describe("Accounts", () => {
  before(() => {
    cy.SignIn();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.fixture("vars.json").as("vars");
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    // cy.saveLocalStorage();
    //cy.SignIn()
  });
  //////////////////////////////////////////////////////////////////////////////////////////
  it.skip("Preferences", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
      cy.visit(item.SEVER_URL + "/account");
    });
    cy.log("Preferences");
    cy.get("main > div:nth-child(2) > span").click();
    cy.wait(3000);
    cy.get("div:nth-child(1) > span.preference-current").click();

    cy.get(
      'div:nth-child(7) > partie-multi-select-list-item > div > label > input[type="checkbox"]'
    )
      .invoke("show")
      .then($elm => {
        const inputStatus = $elm.get(0).checked;
        cy.log("inputStatus", inputStatus);
        if (inputStatus === false) {
          cy.get(
            'div:nth-child(7) > partie-multi-select-list-item > div > label > input[type="checkbox"]'
          ).should("not.be.checked");
          cy.get(
            "div:nth-child(7) > partie-multi-select-list-item > div > label > span"
          ).click();
          cy.log("optin 7 is checked");
        } else {
          cy.get(
            'div:nth-child(7) > partie-multi-select-list-item > div > label > input[type="checkbox"]'
          ).should("be.checked");
          cy.get(
            "div:nth-child(7) > partie-multi-select-list-item > div > label > span"
          ).click();
          cy.log("optin 7 is not check");
        }
      });

    cy.get(
      "div:nth-child(5) > partie-multi-select-list-item > div > label > span"
    ).click();
    cy.wait(3000);
    cy.get("div.modal-header > button").click({ force: true });

    cy.wait(3000);

    cy.get("div:nth-child(2) > span.preference-label").click();

    cy.get(
      "div:nth-child(2) > partie-multi-select-list-item > div > label input"
    )
      .invoke("show")
      .then($elm => {
        cy.log($elm);
        const inputStatus = $elm.get(0).checked;
        cy.log("inputStatus", inputStatus);
      });
  });
  //////////////////////////////////////////////////////////////////////////////////////////
  it("Notifications Setting", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
      cy.visit(item.SEVER_URL + "/account");
    });
    cy.log("Notifications Setting");
    cy.get("main > div:nth-child(3) > span").click(); //  click on notificatin settigs

    // cy.get("div:nth-child(1) > div > div > button:nth-child(1)").then(($btn) => {
    //   cy.log($btn);
    //   if ($btn.hasClass('enabled')) {
    //    cy.log("yes")
    //    cy.get("div:nth-child(1) > div > div > button:nth-child(1)").should("have.class", "enabled" )
    //    cy.get("div:nth-child(1) > div > div > button:nth-child(1)").click();
    //    cy.log("Disabled")
    //   } else {
    //     cy.log("no")
    //     cy.get("div:nth-child(1) > div > div > button:nth-child(1)").should("not.have.class", "enabled" )
    //     cy.get("div:nth-child(1) > div > div > button:nth-child(1)").click();
    //     cy.log("Enabled")
    //   }
    // });

    cy.get(".page-preferences .preference-item").each(($el, index, $list) => {
      var getButtons = Cypress.$($el).find("button");
      cy.get(getButtons).each(($btn, i, $btlist) => {
        cy.log("aaaaaaaaaa",i)
        cy.log("bbbbbbbbbbb",index)
       cy.log("ddddddddddddddddd", $btn.get(index[i]));
        if ($btn.hasClass("enabled")) {
          cy.get($btn).should("class", "enabled");
          cy.get($btn.get(index[i])).click();
          cy.log("Disable");
        } else {
          cy.get($btn).should("not.have.class", "enabled");
         cy.get($btn.get(index[i])).click();
          cy.log("Enabled");
        }
      });
    });
  });
  //////////////////////////////////////////////////////////////////////////////////////////
  it.skip("Privacy & Safety Options", () => {
    cy.get("@vars").then(items => {
      const item = items[0];
      cy.visit(item.SEVER_URL + "/account");
    });

    cy.log("Privacy & Safety");
    cy.wait(5000);
    cy.get("main > div:nth-child(4) > span").click();

    let FirstSettingInput =
      'div:nth-child(1) > div > div.toggle-main > label > input[type="checkbox"]';
    let FirstSettingLabel =
      "div:nth-child(1) > div > div.toggle-main > label > span";
    cy.get(FirstSettingInput).should("not.be.visible");
    cy.get(FirstSettingInput)
      .invoke("show")
      .then($elm => {
        const inputStatus = $elm.get(0).checked;
        cy.log("inputStatus", inputStatus);
        if (inputStatus === false) {
          cy.get(FirstSettingInput).should("not.be.checked");
          cy.get(FirstSettingLabel).click();
          cy.log("Allow Direct messages: Enabled");
        } else {
          cy.get(FirstSettingInput).should("be.checked");
          cy.get(FirstSettingLabel).click();
          cy.log("Allow Direct messages: Disabled");
        }
      });

    cy.log("3rd Setting ");
    // second checkbox
    let ThirdSettingInput =
      'div:nth-child(3) > div > div.toggle-main > label > input[type="checkbox"]';
    let ThirdSettingLabel =
      "div:nth-child(3) > div > div.toggle-main > label > span";
    //cy.get(ThirdSettingInput).should("not.be.visible");
    cy.get(ThirdSettingInput)
      .invoke("show")
      .then($elm => {
        const inputStatus = $elm.get(0).checked;
        cy.log("inputStatus", inputStatus);
        if (inputStatus === false) {
          cy.get(ThirdSettingInput).should("not.be.checked");
          cy.get(ThirdSettingLabel).click();
          cy.log("Content Age Screening : Enabled");
        } else {
          cy.get(ThirdSettingInput).should("be.checked");
          cy.get(ThirdSettingLabel).click();
          cy.log("Content Age Screening : Disabled");
        }
      });
    cy.get("div.actions--left > button > img").click();
  });
  //////////////////////////////////////////////////////////////////////////////////////////
  // it("Privacy & Safety > Post Visibility", () => {
  // // cy.get('div:nth-child(4) > div > div.toggle-main > div > span')
  // });
  //////////////////////////////////////////////////////////////////////////////////////////
});
