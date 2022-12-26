/// <reference types="cypress" />

import { createBoard } from "../../page_object/createBoard"
import { homePage } from "../../page_object/homePage"
import { loginForm } from "../../page_object/loginForm"
import { myOrganization } from "../../page_object/myOrganization"

describe("Adding new board", () => {

    it("Add board", () => {
        cy.viewport(1200,1200)
        cy.visit("https://cypress-api.vivifyscrum-stage.com/")
        homePage.loginBtn.click()
        loginForm.loginUser("nikola.culic96@gmail.com", "vindovs7")
        cy.wait(5000)
        myOrganization.addNewBtn.eq(1).click({multiple: true})
        myOrganization.addBoardBtn.should("be.visible").click()
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/boards").as("addBoard")
        createBoard.createBoard("my board")
        cy.wait("@addBoard").then((req) => {
            expect(req.response.statusCode).to.eql(201)
            expect(req.response.body.status).to.eql("active")
        })
    })
})