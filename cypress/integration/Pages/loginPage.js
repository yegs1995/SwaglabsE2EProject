class LoginPage{

    static loginOnTheApplication(){
        cy.visit('https://www.saucedemo.com/');
    }

    static typeUserName(username){
        cy.get('#user-name').type(username)
    }

    static typePassword(password){
        cy.get('#password').type(password)
    }

    static clickOnLoginButton(){
        cy.get('#login-button').click()
    }

}
export default LoginPage;