class CartPage{
    
    static clickOnCartButton(){
        cy.get(".shopping_cart_link").click();
    }
    static ClickOnItemToEliminate(itemName){
        let newItemName = itemName.split(" ").join("-")
        cy.get(`#remove-sauce-labs-${newItemName.toLowerCase()}`).click()
    }
    static ClickOnCheckoutButton(){
        cy.get('#checkout').click()
    }

}
export default CartPage;