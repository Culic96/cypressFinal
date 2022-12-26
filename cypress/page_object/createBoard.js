class CreateBoard{
    get titleInput(){
        return cy.get("[name='name']")
    }

    get nextBtn(){
        return cy.get("[name='next_btn']")
    }

    get scrumBtn(){
        return cy.get("[name='type_scrum']")
    }

    createBoard(title){
        this.titleInput.type(title)
        this.nextBtn.click()
        this.scrumBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
    }

}

export const createBoard = new CreateBoard()