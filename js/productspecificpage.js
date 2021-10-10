const productPageCartItemNumberTargeter = document.querySelector(".cart-item-number");
const addToCartButton = document.querySelector(".add-to-cart");
const cartFeedbackMessage = document.querySelector(".cartFeedbackMessage");


let cartItemNumberHolder = 0;
let cartItems = [];


if (sessionStorage.getItem("sessionStorageCartItems")) {
    cartItemNumberHolder = JSON.parse(sessionStorage.getItem("sessionStorageCartItems")).length;
    cartItems = JSON.parse(sessionStorage.getItem("sessionStorageCartItems"));

}

addToCartButton.addEventListener("click", cartItemNumberHandler);
addToCartButton.addEventListener("click", cartFeedback);

function cartItemNumberHandler() {
    cartItems.push(jacketOne);
    sessionStorage.setItem("sessionStorageCartItems", JSON.stringify(cartItems));
    cartItemNumberHolder++;
    productPageCartItemNumberTargeter.innerHTML = cartItemNumberHolder;
};

function cartFeedback() {
    cartFeedbackMessage.style.display ="flex";
    setTimeout(function() {
        cartFeedbackMessage.style.display = "none";
    }, 1500);
};

