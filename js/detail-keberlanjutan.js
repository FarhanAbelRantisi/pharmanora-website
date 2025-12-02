document.addEventListener('DOMContentLoaded', () => {
    // 1. Dapatkan parameter ID dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const activityId = urlParams.get('id');

    if (!activityId) {
        document.getElementById('activity-title-heading').textContent = 'Kegiatan tidak ditemukan.';
        return;
    }

    // 2. Cari kegiatan berdasarkan ID
    const selectedActivity = csrActivities.find(activity => activity.id === activityId);

    // 3. Tampilkan data jika kegiatan ditemukan
    if (selectedActivity) {
        // Update Title dan Heading
        document.getElementById('detail-title').textContent = `Detail Kegiatan - ${selectedActivity.title}`;
        document.getElementById('activity-title-heading').textContent = selectedActivity.title;

        // Update Deskripsi
        document.getElementById('activity-description').textContent = selectedActivity.description;

        // Update Galeri Gambar
        const gallery = document.getElementById('activity-gallery');
        
        // Tambahkan gambar utama
        const mainImg = document.createElement('img');
        mainImg.src = `img/${selectedActivity.mainImage}`;
        mainImg.alt = selectedActivity.title;
        gallery.appendChild(mainImg);

        // Tambahkan gambar detail
        selectedActivity.detailImages.forEach(imageName => {
            const detailImg = document.createElement('img');
            detailImg.src = `img/${imageName}`;
            detailImg.alt = selectedActivity.title + ' Detail';
            gallery.appendChild(detailImg);
        });
        
    } else {
        document.getElementById('activity-title-heading').textContent = 'Kegiatan tidak ditemukan.';
    }
});