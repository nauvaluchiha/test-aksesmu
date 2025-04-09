import { fetchProducts } from "./fetch-products.js";

async function deleteProduct(product) {
    const productId = product.dataset.productId;
    const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
        headers: {
            "X-CSRF-TOKEN": "{{ csrf_token() }}",
        },
    });

    if(document.getElementById("id").value == productId) {
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = "";
        document.getElementById("stock").value = "";
    }

    const result = await response.json();

    if (result.message) {
        fetchProducts();
    }
}

window.deleteProduct = deleteProduct;
