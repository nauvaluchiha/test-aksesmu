export async function fetchProducts() {
    const productList = document.getElementById("products-list");

    const res = await fetch("/products/partial");
    const html = await res.text();

    productList.innerHTML = html;
}

window.fetchProducts = fetchProducts;
