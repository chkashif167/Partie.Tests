describe("Like/Unlike Post Test", () => {
  before(function() {
    //cy.SignIn();
    cy.loggedInAs();
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
  it("Ready To Test Like Unlike", () => {
    cy.get("a:nth-child(1) > span").should("contain", "Home");
    cy.wait(5000)
    
    cy.get('partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(1)').then(($btn) => {
      if ($btn.hasClass('hidden')) {
       cy.log("not liked")
      } else {
      cy.get("partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(1)").click()
      }
      cy.wait(2000)
    })
      
  });

  it("Like Post Test", () => {
    cy.get("partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(2)").should('not.have.class', 'hidden')
   cy.get("partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(2)").click()
   cy.wait(2000)
 
  });
  
  it("Unlike Post Test", () => {
    cy.get("partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(1)").should('not.have.class', 'hidden')
   cy.get("partie-feed-item:nth-child(1) > div > div > div.status-meta > button.btn.btn-likes > img:nth-child(1)").click()
   cy.wait(2000)
 
  });




  function checkfailtest () {
    
  }


  


});
