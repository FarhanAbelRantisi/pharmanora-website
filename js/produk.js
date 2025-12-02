document.addEventListener('DOMContentLoaded', () => {
    const otcGrid = document.getElementById('otc-product-grid');
    const resepGrid = document.getElementById('resep-product-grid');

    // Fungsi untuk membuat elemen kartu produk
    function createProductCard(product) {
        const productLink = document.createElement('a');
        // Link diarahkan ke produk-detail.html dengan parameter ID
        productLink.href = `produk-detail.html?id=${product.id}`;
        productLink.classList.add('product-card');

        productLink.innerHTML = `
            <img src="img/${product.image}" alt="${product.name}">
            <div class="product-card-content">
                <h3>${product.name}</h3>
            </div>
        `;
        return productLink;
    }

    // Memuat produk OTC
    productsData.otc.forEach(product => {
        otcGrid.appendChild(createProductCard(product));
    });

    // Memuat produk Resep
    productsData.resep.forEach(product => {
        resepGrid.appendChild(createProductCard(product));
    });
});