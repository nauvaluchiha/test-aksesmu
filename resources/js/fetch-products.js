export async function fetchProducts() {
    const list = document.getElementById("products-list");
    const list2 = document.getElementsByClassName("products-list");
    const loading = document.getElementById("products-loading");

    for (let el of list2) {
        el.classList.add("hidden");
    }

    loading?.classList.remove("hidden");

    const res = await fetch("/products/partial");
    const html = await res.text();

    list.innerHTML = html;
    loading?.classList.add("hidden");

    for (let el of list2) {
        el.classList.remove("hidden");
    }
}

window.fetchProducts = fetchProducts;
