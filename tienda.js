const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});


const shoppingCartItemsContainer = document.querySelector('.container');

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.card');

    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemSize = item.querySelector('.item-size').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemSize);

}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemSize) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6 align-center">
            <div class="d-flex justify-content-sm-around shopping-cart-item align-items-center h-100 border-bottom border-top pb-2 pt-3">
                <img src="${itemImage}" class="shopping-cart-image" width="150px" height="200px">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate mb-0">${itemTitle}</h6>
                <div>
                   <button type="button" class="item-size btn btn-outline-secondary">${itemSize}</button>
                </div>
            </div>
      </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom border-top pb-2 pt-3">
         <p class="item-price nb-8 shoppingCartItemPrice">${itemPrice}</p>
        </div>
    </div>
    <div class="col-4">
        <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom border-top pb-2 pt-3">
         <input class="shopping-cart-quantity-input shoppingCartItemQuantity type="number" value="1">
        <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>
    `;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow)

    updateShoppingCartTotal()
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shoppingCartItemPrice'
        );
        const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('€','')
        );
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            '.shoppingCartItemQuantity'
        );
        const shoppingCartItemQuantity = Number(
            shoppingCartItemQuantityElement.value
        );
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;

    });
}