// https://docs.cypress.io/api/table-of-contents

describe("App run test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Multi Step Form");
  });
});

describe("Test form previous btn", () => {
  it("Check Form previous btn work", () => {
    cy.visit("/");
    cy.get("#firstName").should("be.visible").type("John");
    cy.wait(1000);
    cy.get("#lastName").should("be.visible").type("Doe");
    cy.wait(1000);
    cy.get("#submitFormStepOne").should("be.visible").click();
    cy.wait(2000);
    cy.get("#middleName").should("be.visible").type("Biden");
    cy.get("#submitFormStepTwo").should("be.visible").click();
    cy.wait(2000);
    cy.get("#goPrevious").should("be.visible").click();
    cy.wait(2000);
    cy.get("#goPrevious").should("be.visible").click();
  });
});

describe("Form submission", () => {
  it("Check form submission", () => {
    cy.visit("/");
    cy.get("#firstName").should("be.visible").type("John");
    cy.wait(1000);
    cy.get("#lastName").should("be.visible").type("Doe");
    cy.wait(1000);
    cy.get("#submitFormStepOne").should("be.visible").click();
    cy.get("#middleName").should("be.visible").type("Biden");
    cy.wait(2000);
    cy.get("#submitFormStepTwo").should("be.visible").click();
    cy.get("#dob").should("be.visible").type("2022-09-30");

    cy.get("#submitFormStepFinal").should("be.visible").click();
    cy.wait(3000);
  });
});

describe("Test Try Again button action", () => {
  it("Test once again", () => {
    cy.get("#testAgain").should("be.visible").click();
  });
});
