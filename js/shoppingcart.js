const cartItemHolder = document.querySelector(".cart-item-holder");
const cartItemQuantity = document.querySelector(".number-of-items");
const cartItemTotalPrice = document.querySelector(".total-price");
const checkoutButtonHolder = document.querySelector(".checkout-button-holder");
const cartRemoveButton = document.querySelector(".cart-remove-button");
const shoppingCartMain = document.querySelector("#shoppingcart-main");


const cartItems = JSON.parse(sessionStorage.getItem("sessionStorageCartItems"));


if (cartItems) {
    for (let i = 0; i < cartItems.length; i++) {
        cartItemHolder.innerHTML += jacketObjectToHtml(cartItems[i]);
    }

    cartItemQuantity.innerHTML = `Number of items : ${cartItems.length}`;
    cartItemTotalPrice.innerHTML = `Total : ${totalPriceCalculator(cartItems)}-,`;
    checkoutButtonHolder.innerHTML = `<a href="checkoutpage.html?quantity=${cartItems.length}&total=${totalPriceCalculator(cartItems)}" class="cta-button">to checkout</a>`;
}

shoppingCartMain.addEventListener("click", cartItemRemove);

function jacketObjectToHtml(inputJacketObject) {
    const spitOutHtml = `
        <div class="checkout-section1-producttitle">
            <a href="productspecificpage.html">
                <h3 class="checkout-product-light-title">${inputJacketObject.name}</h3>
            </a>
            <p>Size: ${inputJacketObject.size}</p>
            <p>Colour: ${inputJacketObject.colour}</p>
            <h3 class="productblock-price">${inputJacketObject.price}</h3>
            <button type="button" class="cart-remove-button">( Remove Item )</button>
        </div>
    `;
    return spitOutHtml;
};

function totalPriceCalculator(inputCartItems) {
    let totalPrice = 0;
    for (let i = 0; i < inputCartItems.length; i++) {
        totalPrice += inputCartItems[i].price; 
    }
    return totalPrice;
};

function cartItemRemove(click) {
    if (click.target.classList.contains("cart-remove-button")) {
        cartItems.pop();
        sessionStorage.setItem("sessionStorageCartItems", JSON.stringify(cartItems));
        window.location.reload();
    }
};