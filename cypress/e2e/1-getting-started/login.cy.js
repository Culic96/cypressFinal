/// <reference types="cypress" />

import { homePage } from "../../page_object/homePage"
import { loginForm } from "../../page_object/loginForm"

describe("Login user with valid credentials", () => {

    it("Login user", () => {
        cy.viewport(1200,1200)
        cy.visit("https://cypress-api.vivifyscrum-stage.com/")
    homePage.loginBtn.click()
    cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/login").as("login")
    loginForm.loginUser("nikola.culic96@gmail.com", "vindovs7")
    cy.wait("@login").then((req) => {
        expect(req.response.statusCode).to.eql(200)
    })
    loginForm.emailInput.should('be.visible').and("have.value", "nikola.culic96@gmail.com")
    loginForm.passwordInput.should('be.visible')
    })
    
})