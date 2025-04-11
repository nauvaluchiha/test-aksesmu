function scrollToTop(productId) {
    if (
        window.innerWidth < 768 &&
        document.getElementById("product-" + productId).textContent == "Batal"
    ) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}

window.scrollToTop = scrollToTop;
