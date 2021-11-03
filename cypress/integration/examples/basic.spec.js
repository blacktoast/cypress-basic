import { BASE_URL } from "./base";

context("Location", () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it("테스트를 테스트", () => {
    // https://on.cypress.io/hash
    expect(true).to.equal(true);
  });
});
