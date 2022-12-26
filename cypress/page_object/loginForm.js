class LoginForm{
    get emailInput(){
        return cy.get("[type='email']")
    }
    get passwordInput(){
        return cy.get("[type='password']")
    }

    get submitBtn(){
        return cy.get("[type='submit']")
    }

    loginUser(email, password){
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitBtn.click()
    }
}

export const loginForm = new LoginForm()