const productPageCartItemNumberTargeter = document.querySelector(".cart-item-number");
const addToCartButton = document.querySelector(".add-to-cart");
const cartIcon = document.querySelector(".flaticon-shopping-cart");


let cartItemNumberHolder = 0;

const cartItems = [];

addToCartButton.addEventListener("click", cartItemNumberHandler);
addToCartButton.addEventListener("click", cartIconFeedback);

function cartItemNumberHandler() {
    cartItems.push(jacketOne);
    sessionStorage.setItem("sessionStorageCartItems", JSON.stringify(cartItems));
    cartItemNumberHolder++;
    productPageCartItemNumberTargeter.innerHTML = cartItemNumberHolder;
    //alert("Added to cart!");
};

function cartIconFeedback() {
    cartIcon.style.fontSize = "35px";
    setTimeout(function() {cartIcon.style.fontSize = "27px"}, 100);
};

