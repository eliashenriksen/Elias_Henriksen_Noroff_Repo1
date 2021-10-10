
const shoppingCartItemNumberTargeter = document.querySelector(".cart-item-number");

if (sessionStorage.getItem("sessionStorageCartItems")) {
    shoppingCartItemNumberTargeter.innerHTML = JSON.parse(sessionStorage.getItem("sessionStorageCartItems")).length;
} else {
    shoppingCartItemNumberTargeter.innerHTML = 0;
}

if (shoppingCartItemNumberTargeter.innerHTML == 0) {
    shoppingCartItemNumberTargeter.innerHTML = "";
}
