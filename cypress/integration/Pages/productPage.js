class ProductPage{
    
    static getProductTitle(productTitle){
        cy.get('[class="title"]').invoke('text').then((productTitle1)=>{
            expect(productTitle1.trim()).to.equal(productTitle)
        })
    }

    static addItem(itemName){
        cy.get(`[data-test="add-to-cart-sauce-labs-${itemName}"]`).click()
      
    }
    static getTotalItemsAdded(totalItems){
        cy.get('[class="shopping_cart_badge"]').invoke('text').then((total)=>{
            expect(total.trim()).to.equal(totalItems)
        })
    }

}
export default ProductPage;