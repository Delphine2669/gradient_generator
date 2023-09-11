describe("user path", () => {
  it("it should show the site homepage", () => {
    cy.visit("http://localhost:5174/");
    cy.get(".top-button").should("have.text", "Top").click();
    cy.get(".color-button1").click();
    cy.get(".color-button1").click("center");
    cy.get(".color-button1-label").should("have.text", "#000000");
    cy.get(".generate-button").should("have.text", "Generate").click();
  });
});
