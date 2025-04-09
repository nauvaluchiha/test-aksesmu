import { fetchProducts } from "./fetch-products.js";

async function deleteProduct(product) {
    const productId = product.dataset.productId;
    const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
        headers: {
            "X-CSRF-TOKEN": "{{ csrf_token() }}",
        },
    });

    if (document.getElementById("id").value == productId) {
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = "";
        document.getElementById("stock").value = "";
    }

    // const product = document.getElementsByClassName("product");
    // const loading = document.getElementById("products-loading");

    for (let el of product) {
        el.classList.add("hidden");
    }
    loading?.classList.remove("hidden");

    const result = await response.json();

    if (result.message) {
        fetchProducts().then(() => {
            for (let el of product) {
                el.classList.remove("hidden");
            }
            loading?.classList.add("hidden");
        });
    }
}

window.deleteProduct = deleteProduct;
