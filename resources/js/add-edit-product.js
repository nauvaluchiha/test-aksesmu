import { fetchProducts } from "./fetch-products.js";

async function addEditProduct() {
    const product = document.getElementsByClassName("product");
    const loading = document.getElementById("products-loading");

    document
        .getElementById("productForm")
        .addEventListener("submit", async function (e) {
            e.preventDefault();

            for (let el of product) {
                el.classList.add("hidden");
            }
            loading?.classList.remove("hidden");

            const formData = new FormData(this);
            let id = formData.get("id");
            formData.delete("id");

            if (id) {
                formData.append("_method", "PUT"); // Tambahkan override method

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
                        loading?.classList.add("hidden");
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
                        loading?.classList.add("hidden");
                    });
                }
            }
        });
}

window.addEditProduct = addEditProduct;
addEditProduct();
