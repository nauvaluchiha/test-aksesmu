let productSelected = false;
let productSelectedId = null;

function selectProduct(product) {
    if (!productSelected) {
        productSelected = true;
        document.getElementById("id").value = product.dataset.productId;
        document.getElementById("name").value = product.dataset.productName;
        document.getElementById("description").value =
            product.dataset.productDescription;
        document.getElementById("price").value = product.dataset.productPrice;
        document.getElementById("stock").value = product.dataset.productStock;
        if (productSelectedId) {
            document.getElementById(
                `product-${productSelectedId}`,
            ).textContent = "Ubah";
            document.getElementById(
                `product-${productSelectedId}`,
            ).style.opacity = "1";
            document
                .getElementById(`product-${productSelectedId}`)
                .classList.remove("drop-shadow-2xl");
        } else if (productSelectedId != product.dataset.productId) {
            document.getElementById(
                `product-${product.dataset.productId}`,
            ).textContent = "Batal";
            document.getElementById(
                `product-${product.dataset.productId}`,
            ).style.opacity = "0.75";
            document
                .getElementById(`product-${product.dataset.productId}`)
                .classList.add("drop-shadow-2xl");
        }
        productSelectedId = product.dataset.productId;
    } else {
        if (productSelectedId == product.dataset.productId) {
            productSelected = false;
            document.getElementById("id").value = "";
            document.getElementById("name").value = "";
            document.getElementById("description").value = "";
            document.getElementById("price").value = "";
            document.getElementById("stock").value = "";
            document.getElementById(
                `product-${product.dataset.productId}`,
            ).textContent = "Ubah";
            document.getElementById(
                `product-${product.dataset.productId}`,
            ).style.opacity = "1";
            document
                .getElementById(`product-${product.dataset.productId}`)
                .classList.remove("drop-shadow-2xl");
            productSelectedId = null;
        } else {
            document.getElementById("id").value = product.dataset.productId;
            document.getElementById("name").value = product.dataset.productName;
            document.getElementById("description").value =
                product.dataset.productDescription;
            document.getElementById("price").value =
                product.dataset.productPrice;
            document.getElementById("stock").value =
                product.dataset.productStock;
            document.getElementById(
                `product-${productSelectedId}`,
            ).textContent = "Ubah";
            document.getElementById(
                `product-${productSelectedId}`,
            ).style.opacity = "1";
            document
                .getElementById(`product-${productSelectedId}`)
                .classList.remove("drop-shadow-2xl");
            document.getElementById(
                `product-${product.dataset.productId}`,
            ).textContent = "Batal";
            document.getElementById(
                `product-${product.dataset.productId}`,
            ).style.opacity = "0.75";
            document
                .getElementById(`product-${product.dataset.productId}`)
                .classList.add("drop-shadow-2xl");
            productSelectedId = product.dataset.productId;
            productSelected = true;
        }
    }
}

window.selectProduct = selectProduct;
