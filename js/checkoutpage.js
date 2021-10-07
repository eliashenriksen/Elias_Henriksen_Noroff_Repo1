const checkoutItemQuantityTarget = document.querySelector(".number-of-items");
const checkoutTotalPriceTarget = document.querySelector(".total-price");
const finishPurchaseButton = document.querySelector(".finish-purchase-button");


const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);

const checkoutQuantityOfItemsQuery = parameters.get("quantity");
const checkoutTotalQuery = parameters.get("total");



checkoutItemQuantityTarget.innerHTML = `Number of items : ${checkoutQuantityOfItemsQuery}`;
checkoutTotalPriceTarget.innerHTML = `Total : ${checkoutTotalQuery},-`;

finishPurchaseButton.addEventListener("click", cartCleaner);

function cartCleaner() {
    sessionStorage.clear();
};