describe("Follow User from Post Test", () => {
  before(function() {
    cy.SignIn();
    cy.fixture("vars.json").as("vars");
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
      cy.get('span.action-title').contains('Follow').click();
      cy.wait(2000);
      cy.get("div#toast-container div > div").should(
        "contain",
        "User successfully followed"
      ); // check toaster message
    });
  });


});
