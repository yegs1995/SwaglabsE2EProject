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
    static clickOnSortByName(){
        cy.get('[data-test="product_sort_container"]').invoke('text').then((item)=>{
            expect(item.trim()).to.contain('Name (Z to A)')
        })
    }

    static ClickSortByNameAndVerifySortered(){
        let unsortedItems;
        let sortedItems;

        cy.get('.inventory_list').each(element => {
            unsortedItems =element.map((index, html) => Cypress.$(html).text()).get();           
        })

        cy.get('[data-test="product_sort_container"]').select('za')    

        cy.get('.inventory_list').each(element => {      
            sortedItems = element.map((index, html) => Cypress.$(html).text()).get();
            expect(unsortedItems, 'Items are sorted').to.not.equal(sortedItems);
        })
       
    }

    static clickOnSortByPrice(){
        cy.get('[data-test="product_sort_container"]').invoke('text').then((item)=>{
            expect(item.trim()).to.contain('Price (high to low)')
        })
    }
    
    static ClickSortByPriceAndVerifySortered(){
        let unsortedItems;
        let sortedItems;

        cy.get('.inventory_list').each(element => {
            unsortedItems =element.map((index, html) => Cypress.$(html).text()).get();           
        })

        cy.get('[data-test="product_sort_container"]').select('hilo')
        cy.get('.inventory_list').each(element => {      
            sortedItems = element.map((index, html) => Cypress.$(html).text()).get();
            expect(unsortedItems, 'Items are sorted').to.not.equal(sortedItems);
        })
       
    }



}
export default ProductPage;