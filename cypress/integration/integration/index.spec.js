describe("My First Test", function() {
  it("visits the kitchen Sink", () => {
    cy.visit("http://localhost:8000/");
  });
});
