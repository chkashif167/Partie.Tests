describe("Privacy & Safety", () => {
  before(function() {
    cy.SignIn();
  });

  it("Privacy & Safety Options", () => {
    cy.get("nav > button > img").click();
    cy.get("main > div:nth-child(4) > span").click();
    cy.wait(5000);
    // first checkbox
    let FirstSettingInput =
      'div:nth-child(1) > div > div.toggle-main > label > input[type="checkbox"]';
    let FirstSettingLabel =
      "div:nth-child(1) > div > div.toggle-main > label > span";
    //cy.get(FirstSettingInput).should("not.be.visible");
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
  });
});
