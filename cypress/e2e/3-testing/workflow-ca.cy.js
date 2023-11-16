describe("Social Media App: Unauthorized user", () => {
    it("CANNOT submit the log in form", () => {
    cy.visit("index.html");
    cy.get("#registerModal");
    cy.wait(1000);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").dblclick();
    cy.get("#loginEmail")
      .type("fake@stud.noroff.no", { force: true, delay: 100 })
      .should("have.value", "fake@stud.noroff.no");
    cy.get("#loginPassword").type("fakepassword", { force: true, delay: 100 });

    cy.get("#loginForm").submit();
    cy.wait(1000);
    cy.on("window:alert", (t) => {
      expect(t).to.contains(
        "Either your username was not found or your password is incorrect"
      );
    });
  });

  describe("Social Media App: authorized user", () => {
   
    it("CAN submit the log in form and access profile page", () => {
      cy.visit("index.html");
      cy.get("#registerModal");
      cy.wait(1000);
      cy.get("#registerForm > .modal-footer > .btn-outline-success").dblclick();
      cy.get("#loginEmail").type("klay@noroff.no", { force: true, delay: 100 });
      cy.get("#loginPassword").type("password", { force: true, delay: 100 });

      cy.get("#loginForm").submit();
       cy.visit("index.html");
      );
    });

    it("CAN logout the website", () => {
      cy.get("#registerModal");
      cy.wait(1000);
      cy.get("#registerForm > .modal-footer > .btn-outline-success").dblclick();
      cy.get("#loginEmail").type("klay@noroff.no", { force: true, delay: 100 });
      cy.get("#loginPassword").type("password", { force: true, delay: 100 });
      cy.get("#loginForm").submit();
      cy.wait(1000);
      cy.visit("index.html");
      );
      cy.wait(1000);
      cy.get(".btn-outline-warning").dblclick();
    });
  });
});
