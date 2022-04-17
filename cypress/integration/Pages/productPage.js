class ProductPage{

    static selectItemByName(itemName){
        cy.get('.inventory_list').find('.inventory_item').invoke('text').then((item)=>{
            expect('Sauce Labs '+itemName.trim()).to.equal(item)
        })
    }
    static addItem(itemName){
        cy.get(`#add-to-cart-sauce-${naitemNameme}`).click()
    }
    static getTotalItemsAdded(totalItems){
        cy.get('[class="shopping_cart_badge"]').invoke('text').then((total)=>{
            expect(total.trim()).to.equal(totalItems)
        })
    }

}
export default ProductPage;