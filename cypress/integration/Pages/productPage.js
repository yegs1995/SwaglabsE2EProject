class ProductPage{
    
    static getProductTitle(productTitle){
        cy.get('[class="title"]').invoke('text').then((productTitle1)=>{
            expect(productTitle1.trim()).to.equal(productTitle)
        })
    }

    static addItem(itemName){
        let newItemName = itemName.split(" ").join("-")
        cy.get(`#add-to-cart-sauce-labs-${newItemName.toLowerCase()}`).click()
    }
    static getTotalItemsAdded(totalItems){
        cy.get('[class="shopping_cart_badge"]').invoke('text').then((total)=>{
            expect(total.trim()).to.equal(totalItems)
        })
    }

}
export default ProductPage;