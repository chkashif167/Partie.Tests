describe('Edit Profile Page Test', ()=> {

    before(function () {
        cy.SignIn();
        cy.fixture('vars.json').as('vars')
     })

    it('Edit Profile', ()=> {

        const phoneNumber = Math.floor(Math.random() * 1000);
        const FinalPhone = "6267564526262"+phoneNumber;

   const profileBtn                     =      'div.actions--left > button > img';
   const followingsTab1counts           =      'div:nth-child(1) > span.quick-stat-figure';
   const followingsTab1                 =      '.profile-quick-stats > :nth-child(1)';
   const modalList                      =      '.person-listing';
   const closeModal                     =      'div.modal-header > button > img';



       
        cy.wait(3000);
        cy.get(profileBtn).click(); 
        cy.wait(5000);
        cy.get('div.actions--right > button:nth-child(1) > img').click();
        cy.wait(4000);
        cy.get('.action-title').contains('Edit').should('be.visible').click();

        // fields
        cy.get('input[name="firstName"]').clear();
        cy.get('input[name="firstName"]').type('UserFirstName'); // first name

        cy.get('input[name="lastName"]').clear();
        cy.get('input[name="lastName"]').type('UserLastName'); // lastname

        cy.get('form[name="profile"] span:nth-child(2) > label').click(); // play style

        // cy.get('input[name="phoneNumber"]').clear();
        // cy.get('input[name="phoneNumber"]').type(FinalPhone)  // phone number

        cy.wait(2000);
        cy.get("textarea#bio").clear();
        cy.wait(2000);
        cy.get("textarea#bio").type('This is bio of the page');
        
       
        cy.get('input[name="profileLink"]').clear();  // website url
        cy.wait(2000);
        cy.get('input[name="profileLink"]').type('www.gmail.com'); 

        // cy.get('input[name="platforms"]').click();

        // cy.get('div:nth-child(6) > partie-multi-select-list-item > div > label > span').click();

        // cy.get('div.modal-header > button').click();
        
        cy.get('a > span.btn-inner').click();

        
   
   
     }) 

    
})




