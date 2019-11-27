describe('Profile Page Partie Counts', ()=> {

      before(function () {
       cy.SignIn()
       cy.fixture('vars.json').as('vars')

       })
   
  
      it('Auth Server', ()=> {
  
     const profileBtn                     =      'div.actions--left > button > img';
     const modalList                      =      '.partie-title';
     const closeModal                     =      'div.modal-header > button > img';

            


                    cy.wait(3000);
                    cy.get(profileBtn).click(); 
                    cy.wait(1000);

                    cy.get('@vars').then((items) => {
                        const item = items[0].PARTIE_COUNTS
                        cy.log(item)
                        cy.get('div:nth-child(3) > span.quick-stat-figure').should('contain', item);                    
                    })


                    cy.get('div:nth-child(3) > span.quick-stat-figure').click();
                    cy.wait(2000);


                    cy.get('@vars').then((items) => {
                        const item = items[0].PARTIE_COUNTS
                        cy.log(item)
                        cy.get(modalList).should('have.length', item)
                   
                    })
        
                    cy.wait(2000);
                    cy.get(closeModal).click(); 

/////////////////////////////////////////////////////////////////////////////////////////////////

                    // cy.request({
                    //     method: 'GET',
                    //     followRedirect: false, log: true,
                    //     //url: 'https://api-dev.partie.com/api/v1/room/getUserRooms/d23eef09-e4e1-455d-a74c-03dfc61bde11',
                    //     url: 'https://my-json-server.typicode.com/typicode/demo/posts',
    
                    //     headers: {
                    //     'accept': 'application/json'
                    //     },
                    //     response: []
    
                    //      })
                    //     .then((response => {
                    //     cy.log(response.body)
                    //     assert.equal(response.status, 200);
                    //     expect(response.body).to.not.be.null;
    
                    //     }))

/////////////////////////////////////////////////////////////////////////////////////////////////

                    // cy.server()
                    // cy.route({
                    //   method: 'GET',
                    //   url: '/typicode/demo/posts',
                    //  response: {}
                    // }).as('apiCheck')
                    // cy.visit('https://my-json-server.typicode.com/')
                    // cy.wait('@apiCheck').then((xhr) => {
                    //   assert.isNotNull(xhr.response.body.data, 'Post')
                    // })
                 
    
     
       }) 


  
      
      })  
    

  
  
  
  
  