
const shoppingCartItemNumberTargeter = document.querySelector(".cart-item-number");

const cartItemGlobalNumber = JSON.parse(sessionStorage.getItem("sessionStorageCartItems"));

shoppingCartItemNumberTargeter.innerHTML = cartItemGlobalNumber.length;