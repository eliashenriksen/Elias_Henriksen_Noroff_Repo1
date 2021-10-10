const buyNowButtons = document.querySelectorAll(".buy-now-button");




let cartItems = [];

if (sessionStorage.getItem("sessionStorageCartItems")) {
    cartItems = JSON.parse(sessionStorage.getItem("sessionStorageCartItems"));
}

for (let i = 0; i < buyNowButtons.length; i++) {
    buyNowButtons[i].addEventListener("click", cartItemNumberHandler);
}

function cartItemNumberHandler() {
    cartItems.push(jacketOne);
    sessionStorage.setItem("sessionStorageCartItems", JSON.stringify(cartItems));
    window.location.href = "shoppingcart.html";
};