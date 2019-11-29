import 'cypress-file-upload';



Cypress.Commands.add("SignIn", () => {
        cy.visit("https://app-dev.partie.com/");
        const loginBtn = "section.btn-group > a.btn.btn-outline";
        const userNameField = 'input[type="text"]';
        const passwordField = 'input[type="password"]';
        const loginFormBtn = ".bg-blue";


        cy.get(loginBtn).click();
        cy.get(userNameField)
        .type("kashifn4")
        .get(passwordField)
        .type("!1234567aA");
        cy.get(loginFormBtn).click();
        cy.wait(3000);
      
         
})



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
