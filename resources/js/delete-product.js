import { fetchProducts } from "./fetch-products.js";

let product = document.getElementsByClassName("product");

async function deleteProduct(data) {
    document.getElementById("products-loading").classList.remove("hidden");
    for (let el of product) {
        el.classList.add("hidden");
    }

    const productId = data.dataset.productId;
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

    const result = await response.json();

    if (result.message) {
        fetchProducts().then(() => {
            for (let el of data) {
                el.classList.remove("hidden");
            }
            document.getElementById("products-loading").classList.add("hidden");
        });
    }
}

window.deleteProduct = deleteProduct;
