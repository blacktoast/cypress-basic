import { BASE_URL } from "./base";

context("Location", () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it("값 초기화 테스트", () => {
    cy.get(".count-display").should("have.value", "10");
  });

  it("숫자증가 테스트", () => {
    cy.get(".count-display").then((result) => {
      let count = Number(result.val());

      cy.get(".plus-button").click();
      cy.get(".count-display").should("have.value", count + 1);
    });
  });
});
