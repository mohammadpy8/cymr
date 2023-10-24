/// <reference types="Cypress" />

describe("", () => {
  const base_url = "https://stage1.qhami.com";

  // let username;

  it("", () => {
    cy.visit(base_url);
    cy.wait(750);
    cy.get('#profile > [href="/"] > :nth-child(1)').click();
    // cy.get('#username').click().type(prompt("enter your username:"))
    // const username = prompt("enter your username:");
    // console.log(username);
    cy.get("#username").then(($input) => {
      // تابع cy.window() را صدا بزنید تا به صفحه وب دسترسی داشته باشید
      cy.window().then((win) => {
        // تابع cy.stub() را برای window.prompt() ایجاد کنید
        // cy.stub(win, 'prompt').returns('مقداری که می‌خواهید وارد شود');
        const username = Number(window.prompt("mm"));
        cy.get("#username").type(username);
      });
    });
    cy.InputType("#password", String, "enter your password")
  });
});
