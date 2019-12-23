describe("Friend/User Related Test ", () => {
  before(() => {
    cy.SignIn();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.fixture("vars.json").as("vars");
  });

  afterEach(() => {
    // cy.saveLocalStorage();
    //cy.SignIn()
  });

  var myArray = [
    "bread.jpg",
    "bridge.jpg",
    "diving.jpg",
    "flowers_sunset.jpg",
    "forest.jpg",
    "giraffe.jpg",
    "golden_gate_bridge.jpg",
    "horses.jpg",
    "iphone_charging.jpg",
    "iphone_notes.jpg",
    "leaning_tower_of_pisa.jpg",
    "path_in_forest.jpg",
    "sea_beach.jpg",
    "sea_waves.jpg",
    "shoes.jpg",
    "sunset_sea.jpg",
    "tools.jpg",
    "tour_de_france.jpg"
  ];
  const post = myArray[Math.floor(Math.random() * myArray.length)];
  const finalPost = post;

  const postNumber = Math.floor(Math.random() * 100);
  const finalPostText = "This is Public post Number " + postNumber;

  it("Follow User from Post Test", () => {
    cy.get("a:nth-child(1) > span").should("contain", "Home");

    cy.get("@vars").then(items => {
      const item = items[0].USER_FOR_FEED;
      cy.log(item);
      cy.get("div.author-name")
        .contains(item.trim())
        .closest("partie-feed-item")
        .find("button.btn.btn-menu > img")
        .click();
      cy.wait(4000);
      cy.get("span.action-title")
        .contains("Follow")
        .click();
      cy.wait(2000);
      cy.get("div#toast-container div > div").should(
        "contain",
        "User successfully followed"
      ); // check toaster message
    });
  });

  it("Mute User from Post Test", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER_FOR_FEED;
      cy.log(item);
      cy.get("div.author-name")
        .contains(item.trim())
        .closest("partie-feed-item")
        .find("button.btn.btn-menu > img")
        .click();
      cy.wait(2000);
      cy.get("span.action-title")
        .contains("Mute")
        .click();
      cy.wait(2000);
      cy.get("div#toast-container div > div").should(
        "contain",
        "User successfully muted"
      ); // check toaster message
    });
  });

  it("Un-Mute User from Post Test", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER_FOR_FEED;
      cy.log(item);
      cy.get("div.author-name")
        .contains(item.trim())
        .closest("partie-feed-item")
        .find("button.btn.btn-menu > img")
        .click();
      cy.wait(2000);
      cy.get("span.action-title")
        .contains("Unmute")
        .click();
      cy.wait(2000);
      cy.get("div#toast-container div > div").should(
        "contain",
        "User successfully un-muted"
      ); // check toaster message
    });
  });

  it("Report Post Test", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER_FOR_FEED;
      cy.log(item);
      cy.get("div.author-name")
        .contains(item.trim())
        .closest("partie-feed-item")
        .find("button.btn.btn-menu > img")
        .click();
      cy.wait(2000);
      cy.get(".action-title")
        .contains("Report")
        .click(); /// check and click on report button in context menue
    });

    cy.wait(2000);
    cy.get("textarea#feedback").type("abuse post"); // type somethig in textarea
    cy.get("div#feedback-modal div.modal-content > button").click(); // click on report button
    cy.get("div#toast-container div > div").should(
      "contain",
      "Post reported successfully!"
    ); // check toaster messge Post reported successfully!
  });

  it("Share Post Test", () => {
    cy.get(
      "partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-menu > img"
    )
      .should("be.visible")
      .click(); // click three dots
    cy.get("span.action-title")
      .contains("Share")
      .click(); // check and click on share button in context men
    cy.get("div#feedback-modal div.modal-content > h2").should(
      "contain",
      "Share Your Post"
    );
    cy.get("div#feedback-modal img").click();
  });

  it("Unfollow User from Post Test", () => {
    cy.get("@vars").then(items => {
      const item = items[0].USER_FOR_FEED;
      cy.log(item);
      cy.get("div.author-name")
        .contains(item.trim())
        .closest("partie-feed-item")
        .find("button.btn.btn-menu > img")
        .click();
      cy.wait(4000);
      cy.get("span.action-title")
        .contains("Unfollow")
        .click();
      cy.wait(2000);
      cy.get("div#toast-container div > div").should(
        "contain",
        "User successfully un-followed"
      ); // check toaster message
    });
  });
});
