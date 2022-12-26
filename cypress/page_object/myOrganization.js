class MyOrganization{
    get addNewBtn(){
        return cy.get("[class='vs-c-list__btn vs-c-list-btn--add-new el-tooltip']")
    }

    get addBoardBtn(){
        return cy.contains(" Add Board ")
    }
}

export const myOrganization = new MyOrganization()