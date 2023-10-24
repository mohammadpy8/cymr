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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password, captchaValue) => {
  cy.get("#profile > [href='/']").click({ force: true });
  cy.wait(750);

  cy.url().should("include", "/sso/login");
  cy.wait(750);

  cy.get("#username").click({ force: true }).type(username);
  cy.wait(750);

  cy.get("#password").click({ forec: true }).type(password);
  cy.wait(750);

  cy.get("#captchaValue").click({ force: true }).type(captchaValue);
  cy.wait(750);

  cy.get(".login100-form-btn").click({ force: true });

  cy.wait(750);
});

Cypress.Commands.add("InputType", (element, typeInput, textPropmt) => {
  cy.get(element).then(() => {
    cy.window().then(() => {
      const password = typeInput(window.prompt(textPropmt));
      cy.get(element).type(password);
    });
  });
});

// cy.wrap(Promise.all(promises));
// });
