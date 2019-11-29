describe('Partie Counts Profile Page Test', ()=> {

      before(function () {
       cy.SignIn()
       cy.fixture('vars.json').as('vars')

       })
   
  
      it('Partie Counts', ()=> {
  
     const profileBtn                     =      'div.actions--left > button > img';


            
                    ///// I want to get lenght of the parties from the url response and want check with counts in UI
                    cy.wait(3000);
                    cy.get(profileBtn).click(); 
                    cy.wait(1000);
                    
                    cy.request('api/v1/room/getUserRooms/d23eef09-e4e1-455d-a74c-03dfc61bde11')
                        .then((response => {
                        cy.log(response.body)
                        assert.equal(response.status, 200);
                        expect(response.body).to.not.be.null;
                        cy.log( response.body.length);
                        cy.get('div:nth-child(3) > span.quick-stat-figure').should('contain', response.body.length); 

                        }))

               

              
    
     
       }) 


  
      
      })  
    

  
  
  
  
  