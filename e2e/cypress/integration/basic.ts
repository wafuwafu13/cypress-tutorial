describe("google search", () => {
  it("should work", () => {
    cy.visit("http://www.google.com");
    cy.title().should("include", "Google")
  });
});
