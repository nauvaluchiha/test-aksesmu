import { fetchProducts } from "./fetch-products.js";

let product = document.getElementsByClassName("product");

async function addEditProduct() {

    document
        .getElementById("productForm")
        .addEventListener("submit", async function (e) {
            e.preventDefault();

            document.getElementById("products-loading").classList.remove("hidden");
            for (let el of product) {
                el.classList.add("hidden");
            }

            const formData = new FormData(this);
            let id = formData.get("id");
            formData.delete("id");

            if (id) {
                formData.append("_method", "PUT");

                const response = await fetch(`/api/products/${id}`, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "X-CSRF-TOKEN": "{{ csrf_token() }}",
                    },
                });

                const result = await response.json();

                if (result.id) {
                    fetchProducts().then(() => {
                        for (let el of product) {
                            el.classList.remove("hidden");
                        }
                        document.getElementById("products-loading").classList.add("hidden");
                    });
                }
            } else {
                const response = await fetch("/api/products", {
                    method: "POST",
                    body: formData,
                    headers: {
                        "X-CSRF-TOKEN": "{{ csrf_token() }}",
                    },
                });

                const result = await response.json();

                if (result.id) {
                    fetchProducts().then(() => {
                        for (let el of product) {
                            el.classList.remove("hidden");
                        }
                        document.getElementById("products-loading").classList.add("hidden");
                    });
                }
            }
        });
}

window.addEditProduct = addEditProduct;
addEditProduct();
