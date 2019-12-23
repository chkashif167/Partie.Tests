describe("Feed 1", () => {
  before(() => {
    cy.SignIn();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
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
  const finalPostText = "This is Private post Number " + postNumber;
  const createPost = "partie-feed-list > div > a";
  const privatePost = "main > div > button";

  it("Create Private Post", () => {
    cy.get(createPost).click();
    cy.get(privatePost).click();

    // upload file
    const fileName = "feed_images/" + finalPost;
    cy.fixture(fileName).then(fileContent => {
      cy.get('form > input[type="file"]').upload({
        fileContent,
        fileName,
        mimeType: "application/jpg"
      });
    });
    cy.get("textarea#post-content")
      .should("be.visible")
      .type(finalPostText);
    cy.get("a#post > img").click();
    cy.log(finalPostText);
    cy.wait(2000);

    cy.get("div#toast-container div > div").should(
      "contain",
      "Post successfully created"
    ); // check toaster message
    cy.get(
      "div.status-body > div.status-text > p"
    )
    //.first()
    .should('contain', finalPostText)
     // .contains(finalPostText)
      //.should("be.visible");
   // cy.get("partie-feed-item:nth-child(1) > div > div > div.status-body > div:nth-child(1) > img").contains(finalPost)
     cy.wait(2000);

  });



  it("Create Public Post", () => {
   
    // upload file
  
    cy.get(createPost).click();
    const fileName = "feed_images/" + finalPost;
    cy.fixture(fileName).then(fileContent => {
      cy.get('form > input[type="file"]').upload({
        fileContent,
        fileName,
        mimeType: "application/jpg"
      });
    });
    cy.get("textarea#post-content")
      .should("be.visible")
      .type(finalPostText);
    cy.get("a#post > img").click();
    cy.wait(2000);
    cy.get("div#toast-container div > div").should(
      "contain",
      "Post successfully created"
    ); // check toaster message
    cy.get(
      "div.status-body > div.status-text > p"
    )
    //.first()
    .should('contain', finalPostText)
     // .contains(finalPostText)
      //.should("be.visible");
      //cy.get("partie-feed-item:nth-child(1) > div > div > div.status-body > div:nth-child(1) > img").should('have.attr', 'src').should('include', finalPost)
      cy.wait(5000);
  });




  it("Like Post Test", () => {
    cy.get(
      "partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(2)"
    ).should("not.have.class", "hidden");
    cy.get(
      "partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(2)"
    ).click();
    cy.wait(2000);
  });

  it("Unlike Post Test", () => {
    cy.get(
      "partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(1)"
    ).should("not.have.class", "hidden");
    cy.get(
      "partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(1)"
    ).click();
    cy.wait(2000);
  });

  it("Remove Post Test", () => {
  
    cy.get(
      "partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-menu > img"
    )
      .should("be.visible")
      .click(); // click three dots
    cy.get("span.action-title")
      .contains("Remove")
      .click(); // check remove button and click on it in context menu
  });


});
