describe("Like Post Test", () => {
  
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
    const finalPostText = "This is Public post Number " + postNumber;
    it("Like Post Test", () => {
   cy.get('a:nth-child(1) > span').should('contain', 'Home');
   cy.get('button.btn.btn-likes:nth-child(1) img').should('be.visible').click();
 
   

    });


  });
  