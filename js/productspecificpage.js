const productPageCartItemNumberTargeter = document.querySelector(".cart-item-number");
const addToCartButton = document.querySelector(".add-to-cart");
const cartFeedbackMessage = document.querySelector(".cartFeedbackMessage");
const productSpecificCurrent = document.querySelector(".productSpecificCurrent");
const productSpecificH1 = document.querySelector(".productSpecificH1");
const productSpecificH3 = document.querySelector(".productSpecificH3");
const productSpecificPrice = document.querySelector(".productSpecificPrice");
const productSpecificImg = document.querySelector(".productSpecificImg");
const productSpecificPicturesOther = document.querySelector(".productSpecificPicturesOther");
const productSpecificDescription = document.querySelector(".productSpecificDescription");


const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const productId = parameters.get("product_id");

const productSpecificApiLink = `https://ehtoday.one/assignments/cmsCA/wp-json/wc/store/products/${productId}`;

async function jacketSpecificApiCaller(inputAPI) {

    try {

        const firstProductSpecificCall = await fetch(inputAPI);
        const firstProductSpecificResponse = await firstProductSpecificCall.json();

        productSpecificCurrent.innerHTML = firstProductSpecificResponse.name;
        productSpecificH1.innerHTML = firstProductSpecificResponse.name;
        productSpecificH3.innerHTML = firstProductSpecificResponse.name;
        productSpecificPrice.innerHTML = `${firstProductSpecificResponse.prices.price},-`;
        productSpecificImg.innerHTML = `<img src="${firstProductSpecificResponse.images[0].src}" alt="Picture of the ${firstProductSpecificResponse.name}">`;
        productSpecificPicturesOther.innerHTML = `
            <div class="productspecificpage-section3-pictures">
                <img src="${firstProductSpecificResponse.images[1].src}" alt="Picture of the ${firstProductSpecificResponse.name}">
            </div>
            <div class="productspecificpage-section3-pictures">
                <img src="${firstProductSpecificResponse.images[2].src}" alt="Picture of the ${firstProductSpecificResponse.name}">
            </div>
            <div class="productspecificpage-section3-pictures">
                <img src="${firstProductSpecificResponse.images[3].src}" alt="Picture of the ${firstProductSpecificResponse.name}">
            </div>
        `;
        productSpecificDescription.innerHTML = `
            <h3>More about ${firstProductSpecificResponse.name}</h3>
            ${firstProductSpecificResponse.description}
        `;

        console.log(firstProductSpecificResponse);


    } catch (error) {

        console.log("error111");
        productSpecificImg.innerHTML = `<div class="errorMessage1"><p>There was an error fetching the product information. Please try again. If the problem persists please contact support.</p></div>`;

    }
};

jacketSpecificApiCaller(productSpecificApiLink);

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

