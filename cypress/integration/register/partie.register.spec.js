
describe('Partie Register', ()=> {

  

    it('Navigate To Register Page', () => {
        cy.visit('https://app-dev.partie.com/register', { timeout: 30000 });
       
    })

            it('Auth Server', ()=> {
            cy.get('.form > :nth-child(1)')
            .type('kashifn11')
            cy.get('.form > :nth-child(2)')
            .type('kashifn11')
            cy.get('.form > :nth-child(3)')
            .type('kashifn11')
            cy.get('.form > :nth-child(4)')
            .type('kashifn11@kashifn11.com')
            cy.get('.form > :nth-child(5)')
            .type('102000')
            cy.get('.form > :nth-child(6)')
            .type('31232321312312')
            cy.get('.form > :nth-child(7)')
            .type('!1234567aA')
            cy.get('.form > :nth-child(8)')
            .type('!1234567aA')
            cy.get('button.bg-blue').click();
            }) 

    
})