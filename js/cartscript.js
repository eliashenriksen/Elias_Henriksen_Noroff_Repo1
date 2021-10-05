const shoppingCartItemNumberTargeter = document.querySelector(".cart-item-number");
const addToCartButton = document.querySelector(".add-to-cart");
const buyNowButton = document.querySelector(".buy-now-button");


let cartItemNumberHolder = 0;

function cartItemNumberHandler() {
    console.log("Add to cart pressed.");
    cartItemNumberHolder++;
    console.log(cartItemNumberHolder);
    sessionStorage.setItem("savedCartNumber", cartItemNumberHolder);
    shoppingCartItemNumberTargeter.innerHTML = sessionStorage.getItem("savedCartNumber");
};

shoppingCartItemNumberTargeter.innerHTML = sessionStorage.getItem("savedCartNumber");

addToCartButton.addEventListener("click", cartItemNumberHandler);
buyNowButton.addEventListener("click", cartItemNumberHandler);


