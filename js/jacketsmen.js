const productPageProductsHolder = document.querySelector(".productPageProductsHolder");
const productPageProductsMobile = document.querySelector(".productsmen-contentformobile1");

const apiLink = "https://ehtoday.one/assignments/cmsCA/wp-json/wc/store/products";

async function jackyJackets(inputAPI) {
    
    try {

        const firstProductCall = await fetch(inputAPI);
        const firstProductResponse = await firstProductCall.json();

        console.log(firstProductResponse);

        productPageProductsHolder.innerHTML = "";
        productPageProductsMobile.innerHTML = "";

        for (let i = 0; i < firstProductResponse.length; i++) {

            productPageProductsHolder.innerHTML += `
            <div class="productblock-picture hidden">
                <img src="${firstProductResponse[i].images[0].src}" alt="Picture of ${firstProductResponse[i].name}" href="index.html">
                <div class="productblock-title hidden">
                    <a href="productspecificpage.html?product_id=${firstProductResponse[i].id}">
                        <h3>${firstProductResponse[i].name}</h3>
                    </a>
                    <h3 class="productblock-price">${firstProductResponse[i].prices.price},-</h3>
                </div>
            </div>
            `;

            productPageProductsMobile.innerHTML += `
            <div class="productblock-picture">
                <img src="${firstProductResponse[i].images[0].src}" alt="Picture of ${firstProductResponse[i].name}" href="index.html">
                <div class="productblock-title">
                    <a href="productspecificpage.html?product_id=${firstProductResponse[i].id}">
                        <h3>${firstProductResponse[i].name}</h3>
                    </a>
                    <h3 class="productblock-price">${firstProductResponse[i].prices.price},-</h3>
                </div>
            </div>
            `;
        }

    } catch (error) {
        productPageProductsHolder.innerHTML = `<div class="errorMessage1"><p>There was an error fetching the product list. Please try again. If the problem persists please contact support.</p></div>`;
        productPageProductsMobile.innerHTML = `<div class="errorMessage1"><p>There was an error fetching the product list. Please try again. If the problem persists please contact support.</p></div>`;
    }

};

jackyJackets(apiLink);