/// <reference types="Cypress" />


describe("", () => {
  const base_url = "https://stage1.qhami.com";

  // let username;

  it("", () => {
    cy.visit(base_url);
    cy.get(
      '.slick-active > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .bg-Unblur > .justify-content-between > :nth-child(1) > .sc-gtcAbF'
    )
      .invoke("text")
      .then((text) => {
        if (text === "ورود به ام رسالت") {
          console.log(true);
        } else {
          alert("error")
        }
      });
  });
});
