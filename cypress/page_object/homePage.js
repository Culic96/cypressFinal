class HomePage{
    get loginBtn(){
        return cy.get("[href='https://cypress.vivifyscrum-stage.com/login']")
    }

    get configurationBtn(){
        return cy.get("[data-cy='organization-configuration']")
    }

    get deleteBtn(){
        return cy.get("[class='vs-c-btn vs-c-btn--warning vs-c-btn--spaced']")
    }

    get confirmDeleteBtn(){
        return cy.get("[name='save-btn']")
    }
}

export const homePage = new HomePage()