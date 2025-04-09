import { fetchProducts } from "./fetch-products.js";

document
    .getElementById("productForm")
    .addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        let id = formData.get("id");
        formData.delete("id");
        let price = formData.get("price");
        let name = formData.get("name");
        let description = formData.get("description");

        console.log(id, price, name, description, "dataaa");
        console.log(formData);

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
                fetchProducts();
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
                fetchProducts();
            }
        }
    });

