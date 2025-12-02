document.addEventListener('DOMContentLoaded', () => {
    // 1. Dapatkan parameter ID dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        document.getElementById('product-name-heading').textContent = 'Produk tidak ditemukan.';
        return;
    }

    // 2. Cari produk berdasarkan ID
    let selectedProduct = null;

    // Gabungkan array OTC dan RESEP untuk pencarian
    const allProducts = [...productsData.otc, ...productsData.resep];
    
    selectedProduct = allProducts.find(product => product.id === productId);

    // 3. Tampilkan data jika produk ditemukan
    if (selectedProduct) {
        // Update Title dan Heading
        document.getElementById('detail-title').textContent = `Detail Produk - ${selectedProduct.name}`;
        document.getElementById('product-name-heading').textContent = selectedProduct.name;
        
        // Update Gambar
        document.getElementById('product-image').src = `img/${selectedProduct.image}`;
        document.getElementById('product-image').alt = `Gambar ${selectedProduct.name}`;

        // Update Spesifikasi
        document.getElementById('product-kategori').textContent = selectedProduct.kategori;
        document.getElementById('product-netto').textContent = selectedProduct.netto;
        document.getElementById('product-kandungan').textContent = selectedProduct.kandungan;
        
        // Update Deskripsi
        document.getElementById('product-description').textContent = selectedProduct.deskripsi;
        
    } else {
        document.getElementById('product-name-heading').textContent = 'Produk tidak ditemukan.';
    }
});