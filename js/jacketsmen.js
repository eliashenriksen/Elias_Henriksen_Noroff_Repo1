const productPageProductsHolder = document.querySelector(".productPageProductsHolder");
const productPageProductsMobile = document.querySelector(".productsmen-contentformobile1");

const apiLink = "https://ehtoday.one/assignments/cmsCA/wp-json/wc/store/products";

async function jackyJackets(inputAPI) {
    
    try {

        const firstProductCall = await fetch(inputAPI);
        const firstProductResponse = await firstProductCall.json();

        for (let i = 0; i < firstProductResponse.length; i++) {
            console.log(firstProductResponse[i]);

            productPageProductsHolder.innerHTML += `
            <div class="productblock-picture hidden">
                <img src="${firstProductResponse[i].images[0].src}" alt="Picture of Rainydays 3 Layer Jacket Men" href="index.html">
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
                <img src="${firstProductResponse[i].images[0].src}" alt="Picture of Rainydays 3 Layer Jacket Men" href="index.html">
                <div class="productblock-title">
                    <a href="productspecificpage.html?product_id=${firstProductResponse[i].id}">
                        <h3>${firstProductResponse[i].name}</h3>
                    </a>
                    <h3 class="productblock-price">${firstProductResponse[i].prices.price},-</h3>
                </div>
            </div>
            `;

            console.log(firstProductResponse[i].name);
        }

    } catch (error) {
        console.log("errrororrrr");
        productPageProductsHolder.innerHTML = `placeholder error message`;
        productPageProductsMobile.innerHTML = `placeholder error message`;
    }

};

console.log("dog");

jackyJackets(apiLink);