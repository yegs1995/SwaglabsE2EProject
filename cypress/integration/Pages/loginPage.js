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
    static getProductTitle(productTitle){
        cy.get('[class="title"]').invoke('text').then((productTitle1)=>{
            expect(productTitle1.trim()).to.equal(productTitle)
        })
    }



}
export default LoginPage;