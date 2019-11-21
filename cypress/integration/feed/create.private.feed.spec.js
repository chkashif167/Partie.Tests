describe("Create Private Post", () => {

    before(function () {
        cy.SignIn()
     })

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

  it("Uploading File and Creating Post", () => {
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
  cy.get(
    "div.status-body > div.status-text > p"
  ).first()
    .contains(finalPostText)
    .should("be.visible");
    // cy.get("partie-feed-item:nth-child(1) > div > div > div.status-body > div:nth-child(1) > img").contains(finalPost)
    cy.get("partie-feed-item:nth-child(1) > div > div > div.status-body > div:nth-child(1) > img").should('have.attr', 'src').should('include', finalPost)
});
});
