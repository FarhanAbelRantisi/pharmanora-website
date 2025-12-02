document.addEventListener('DOMContentLoaded', () => {
    const csrGrid = document.getElementById('csr-activity-grid');

    function createCsrCard(activity) {
        const activityLink = document.createElement('a');
        // Link diarahkan ke keberlanjutan-detail.html dengan parameter ID
        activityLink.href = `keberlanjutan-detail.html?id=${activity.id}`;
        activityLink.classList.add('csr-card');
        activityLink.style.textDecoration = 'none'; /* Hapus garis bawah link */
        activityLink.style.color = 'inherit';

        activityLink.innerHTML = `
            <img src="img/${activity.mainImage}" alt="${activity.title}">
            <div class="csr-card-content">
                <h3>${activity.title}</h3>
                </div>
        `;
        return activityLink;
    }

    // Memuat kegiatan CSR
    csrActivities.forEach(activity => {
        csrGrid.appendChild(createCsrCard(activity));
    });
});