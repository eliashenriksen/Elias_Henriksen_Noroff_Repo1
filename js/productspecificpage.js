const productPageCartItemNumberTargeter = document.querySelector(".cart-item-number");
const addToCartButton = document.querySelector(".add-to-cart");


let cartItemNumberHolder = 0;

const cartItems = [];

function cartItemNumberHandler() {
    cartItems.push(jacketOne);
    sessionStorage.setItem("sessionStorageCartItems", JSON.stringify(cartItems));
    cartItemNumberHolder++;
    productPageCartItemNumberTargeter.innerHTML = cartItemNumberHolder;
    //alert("Added to cart!");
};

addToCartButton.addEventListener("click", cartItemNumberHandler);

