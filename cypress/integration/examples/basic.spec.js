/// <reference types="cypress" />

context("Location", () => {
  beforeEach(() => {
    cy.visit("http://132.226.18.9:5500");
  });

  it("테스트를 테스트", () => {
    // https://on.cypress.io/hash
    expect(true).to.equal(true);
  });
});
