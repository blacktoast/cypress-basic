import { BASE_URL } from "./base";

context("Location", () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it("값 초기화 테스트", () => {
    cy.get(".count-display").should("have.value", "10");
  });
});
