describe('Create Public Feed', ()=> {

    it('Visit Website', () => {
        cy.visit('https://app-dev.partie.com/');
       
    })
    
    const loginBtn          =   'section.btn-group > a.btn.btn-outline';
    const userNameField     =   'input[type="text"]';
    const passwordField     =   'input[type="password"]';
    const loginFormBtn      =   '.bg-blue';
    const createPost        =   'partie-feed-list > div > a';

    var myArray = ['bread.jpg', 'bridge.jpg', 'diving.jpg','flowers_sunset.jpg', 'forest.jpg', 'giraffe.jpg','golden_gate_bridge.jpg', 'horses.jpg', 'iphone_charging.jpg',
    'iphone_notes.jpg', 'leaning_tower_of_pisa.jpg', 'path_in_forest.jpg','sea_beach.jpg', 'sea_waves.jpg', 'shoes.jpg',' ', 'tools.jpg', 'tour_de_france.jpg',]; 
    var post = myArray[Math.floor(Math.random() * myArray.length)];  
    const postNumber = Math.floor(Math.random() * 100);

    it('Login To Website', ()=> {
    cy.get(loginBtn).click()
    cy.get(userNameField)
    .type('kashifn4')
    .get(passwordField)
    .type('!12345678aA')
    cy.get(loginFormBtn).click();
    cy.wait(3000);
    cy.get(createPost).click(); 

    // upload file
    const fileName = 'feed_images/'+post;
    cy.fixture(fileName).then(fileContent => {
        cy.get('form > input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/jpg' });
    })
    cy.get('textarea#post-content').type('This is Public post Number '+postNumber);
    cy.get('a#post > img').click()
      
     }) 

    
})









