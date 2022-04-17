class CartPage{
    
    static clickOnCartButton(){
        cy.get(".shopping_cart_link").click();
    }

    static ClickOnItemToEliminate(itemName){
        cy.get(`[data-test="remove-sauce-labs-${itemName}"]`).click()      
    }

    static ClickOnCheckoutButton(){
        cy.get('#checkout').click()
    }

}
export default CartPage;