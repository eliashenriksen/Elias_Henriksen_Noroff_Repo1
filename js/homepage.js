const buyNowButtons = document.querySelectorAll(".buy-now-button");
const featured1Image = document.querySelector(".homepage-content1-part2ofx");
const featured1NamePrice = document.querySelector(".featured1NamePrice");
const featured2Image = document.querySelector(".homepage-content4-part1ofx");
const featured2NamePrice = document.querySelector(".featured2NamePrice");
const featured2Description = document.querySelector(".homepage-content4-part3ofx");
const popularPicksSection = document.querySelector(".homepage-content3-part2ofx");
const popularPicksMobile = document.querySelector(".popularPicksMobile");




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


const apiLink = "https://ehtoday.one/assignments/cmsCA/wp-json/wc/store/products";
const apiLinkFeatured ="https://ehtoday.one/assignments/cmsCA/wp-json/wc/store/products?featured=true";


async function featuredJackets(inputAPI) {
    const firstProductCall = await fetch(inputAPI);
    const firstProductResponse = await firstProductCall.json();

    featured1Image.innerHTML = `
    <a href="productspecificpage.html?product_id=${firstProductResponse[1].id}">
        <img src="${firstProductResponse[1].images[4].src}" class="homepage-images"
          alt="Picture of ${firstProductResponse[1].name}">
    </a>
    `;

    featured1NamePrice.innerHTML = `
    <a href="productspecificpage.html?product_id=${firstProductResponse[1].id}">
          <h2 class="normal-header">${firstProductResponse[1].name}</h2>
        </a>
    <h2 class="sale">${firstProductResponse[1].prices.sale_price},- <i class="flaticon-discount vertical-middle" aria-hidden="true"></i></h2>
    `;

    featured2Image.innerHTML = `
    <a href="productspecificpage.html?product_id=${firstProductResponse[0].id}">
        <img src="${firstProductResponse[0].images[4].src}" class="homepage-images" alt="Picture of ${firstProductResponse[0].name}">
    </a>
    `;

    featured2NamePrice.innerHTML = `
    <a href="productspecificpage.html?product_id=${firstProductResponse[0].id}">
          <h2 class="normal-header no-margins">${firstProductResponse[0].name}</h2>
        </a>
    <h2 class="sale">${firstProductResponse[0].prices.sale_price},- <i class="flaticon-discount vertical-middle" aria-hidden="true"></i></h2>
    `;

    featured2Description.innerHTML = `
    ${firstProductResponse[0].description}
    `;
}

async function popularPicks(inputAPI) {

    const firstProductCall = await fetch(inputAPI);
    const firstProductResponse = await firstProductCall.json();

    popularPicksSection.innerHTML = "";

    for (let i = 0; i < 5; i++) {

      popularPicksSection.innerHTML += `
        <a href="productspecificpage.html?product_id=${firstProductResponse[i].id}">
        <div class="productblock-picture hidden">
          <img src="${firstProductResponse[i].images[0].src}" alt="picture of ${firstProductResponse[i].name}">
          <div class="productblock-title hidden">
            <a href="productspecificpage.html?product_id=${firstProductResponse[i].id}">
              <h3>${firstProductResponse[i].name}</h3>
            </a>
            <h3 class="productblock-price">${firstProductResponse[i].prices.price},-</h3>
          </div>
        </div>
        </a>
      `;

    }

    popularPicksMobile.innerHTML = `
    <a href="productspecificpage.html?product_id=${firstProductResponse[0].id}">
        <div class="productblock-picture">
          <img src="${firstProductResponse[0].images[0].src}" alt="picture of ${firstProductResponse[0].name}">
          <div class="productblock-title">
            <a href="productspecificpage.html?product_id=${firstProductResponse[0].id}">
              <h3>${firstProductResponse[0].name}</h3>
            </a>
            <h3 class="productblock-price">${firstProductResponse[0].prices.price},-</h3>
          </div>
        </div>
        </a>
    `;
}

featuredJackets(apiLinkFeatured);
popularPicks(apiLink);