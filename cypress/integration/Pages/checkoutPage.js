class CheckoutPage{    

    static getCheckoutTitle(checkoutTitle){
        cy.get('[class="title"]').invoke('text').then((title)=>{
            expect(title.trim()).to.equal('Checkout: Your Information')
        })
    }
    static sendFirstName(firstName){
        cy.get('#first-name').type(firstName)
    }
    static sendlastName(lastName){
        cy.get('#last-name').type(lastName)
    }
    static sendZipCode(zipCode){
        cy.get('#postal-code').type(zipCode)
    }
    static clickOnContinueButton(){
        cy.get('#continue').click()
    }
    static clickOnFinishButton(){
        cy.get('#finish').click()
    }
    static verifyItem(itemName){
        cy.get('.cart_list').each(element => {
            cy.wrap(element).invoke('text').then(text => {
                expect(text).to.contain('Sauce Labs '+itemName)
            })
            
        })
    }

    static verifyTotalValue(){
        cy.get('[class="summary_total_label"]').invoke('text').then((total)=>{
            expect(total.trim()).to.equal('Total: $32.39')
        })        
    }

    static verifySuccessMessage(message){
        cy.get('[class="complete-header"]').invoke('text').then((total)=>{
            expect(total.trim()).to.equal(message)
        })        
    }
    static verifyDetailSuccessMessage(message){
        cy.get('[class="complete-text"]').invoke('text').then((total)=>{
            expect(total.trim()).to.equal(message)
        })        
    }

}
export default CheckoutPage;