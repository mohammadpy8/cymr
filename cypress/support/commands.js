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

Cypress.Commands.add('concurrentLogins', (user) => {
    // const promises = users.map(user => {
    cy.visit('/');//باز کردن وب سایت
    cy.get('#profile > [href="/"]').click()//رفتن به صفحه لاگین 

    cy.url().should('include', '/sso/login')// چک کردن وارد شدن در صفحه لاگین
    cy.get('#username').type(user.username)//وارد کردن نام کاربری
    cy.get('#password').type(user.password)//وارد کردن پسور
    cy.get('#captchaValue').type('111111')//وارد کردن کد کپچا
    cy.get('.login100-form-btn').click()//انجام عملیات لاگین

    // cy.url().should('include', 'qhami.com')//چک کردن بازگشت به صفحه اصلی بعد از لاگین 
});

    // cy.wrap(Promise.all(promises));
// });