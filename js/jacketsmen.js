const productPageProductsHolder = document.querySelector(".productPageProductsHolder");
const productPageProductsMobile = document.querySelector(".productsmen-contentformobile1");

const apiLink = "https://ehtoday.one/assignments/cmsCA/wp-json/wc/store/products";

async function jackyJackets(inputAPI) {
    
    try {

        const firstProductCall = await fetch(inputAPI);
        const firstProductResponse = await firstProductCall.json();

        productPageProductsHolder.innerHTML = "";
        productPageProductsMobile.innerHTML = "";

        for (let i = 0; i < firstProductResponse.length; i++) {

            productPageProductsHolder.innerHTML += `
            <a href="productspecificpage.html?product_id=${firstProductResponse[i].id}" class="productblock-picture hidden">
                <div">
                    <img src="${firstProductResponse[i].images[0].src}" alt="picture of ${firstProductResponse[i].name}">
                    <div class="productblock-title hidden">
                        <h3>${firstProductResponse[i].name}</h3>
                        <h3 class="productblock-price">${firstProductResponse[i].prices.price},-</h3>
                    </div>
                </div>
            </a>
            `;

            productPageProductsMobile.innerHTML += `
            <a href="productspecificpage.html?product_id=${firstProductResponse[i].id}" class="productblock-picture">
                <div">
                    <img src="${firstProductResponse[i].images[0].src}" alt="picture of ${firstProductResponse[i].name}">
                    <div class="productblock-title">
                        <h3>${firstProductResponse[i].name}</h3>
                        <h3 class="productblock-price">${firstProductResponse[i].prices.price},-</h3>
                    </div>
                </div>
            </a>
            `;
        }

    } catch (error) {
        productPageProductsHolder.innerHTML = `<div class="errorMessage1"><p>There was an error fetching the product list. Please try again. If the problem persists please contact support.</p></div>`;
        productPageProductsMobile.innerHTML = `<div class="errorMessage1"><p>There was an error fetching the product list. Please try again. If the problem persists please contact support.</p></div>`;
    }

};

jackyJackets(apiLink);