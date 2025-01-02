const map = L.map('map').setView([19.2437, 73.1350], 13);

// Tile Layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// On Map Click - Fetch Representatives
map.on('click', async function (e) {
    const lat = e.latlng.lat;
    const lon = e.latlng.lng;

    const response = await fetch(`/representatives?lat=${lat}&lon=${lon}`);
    const data = await response.json();

    if (response.ok) {
        data.forEach(rep => {
            L.marker([rep.lat, rep.lon])
            .addTo(map)
            .bindPopup(`
                <b>${rep.name}</b><br>
                ${rep.designation}<br>
                📞 ${rep.phone}<br>
                ✉️ ${rep.email}
            `);
        });
    } else {
        alert(data.detail || 'No representatives found.');
    }
});
