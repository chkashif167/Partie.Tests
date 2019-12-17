import "cypress-file-upload";
import "cypress-localstorage-commands";


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
  cy.setLocalStorage("jwt", "this is token");
  cy.setCookie('foo', 'bar')
  Cypress.Cookies.preserveOnce('foo', 'remember_token')
  
  
});

// Cypress.Commands.add("loggedInAs", id => {
//   window.localStorage.setItem("authority", "https://auth-dev.partie.com");
//   window.localStorage.setItem("client_id", "partie.webapp.client");
//   window.localStorage.setItem("created", 1575365764);
//   window.localStorage.setItem("data", "https://app-dev.partie.com/profile/3411d971-64f5-4352-b29a-8707ae5072f9");
//   window.localStorage.setItem(id, "1791ed643200467e931138cf631c");
//   window.localStorage.setItem("nonce", "db3da9a0017e47afbc6b9a0b2b83b12b");
//   window.localStorage.setItem("redirect_uri", "https://app-dev.partie.com/auth-callback");
//   cy.visit("https://app-dev.partie.com/profile/3411d971-64f5-4352-b29a-8707ae5072f9");
// });

// npx cypress open
//npx cypress run --spec 'cypress/integration/02profile/**/*.spec.js' --browser chrome
//npx cypress run --spec 'cypress/integration/01feed/**/*.spec.js' --browser chrome

// cy.fixture('vars.json').as('vars')
// cy.get('@vars').then((items) => { const item = items[0]; cy.log(item.FOLLOWRSCOUNTS) })

// it("Follow User from Post Test", () => {
//   const array = ["string1", "string2", "string3"];
//   cy.get("div.author-name").then($els => {
//     $els.filter((i, el) => {
//       //cy.log(i, el)
//       const textContent = Cypress.$(el).text();
//       //cy.log(textContent)
//       if (textContent !== " KashifN4") {
//         cy.log(el, textContent);
//         cy.get(el)
//           .closest("partie-feed-item")
//           .find("button.btn.btn-menu > img")
//           .click();
//         cy.wait(4000);
//         cy.get("span.action-title")
//           .contains("Follow")
//           .click();
//         cy.wait(2000);
//         cy.get("div#toast-container div > div").should(
//           "contain",
//           "User successfully followed"
//         ); // check toaster message
//       }
//     });
//   });
// });

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
