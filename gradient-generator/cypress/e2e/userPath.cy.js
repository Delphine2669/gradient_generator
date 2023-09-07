describe("user path", () => {
  it("it should show the site homepage", () => {
    cy.visit("http://localhost:5174/");
    cy.get("#root > :nth-child(1) > :nth-child(1)")
      .should("have.text", "Top")
      .click();
    cy.get(".color-button1").click().click("center");
    cy.get(".color-button1-label").should("have.text", "#ffffff");
    cy.get(".generate-button").should("have.text", "Generate").click();
  });
});
