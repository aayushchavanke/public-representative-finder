const map = L.map('map').setView([20.5937, 78.9629], 5); // Default view: India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Handle click on map to fetch representative data
map.on('click', async (e) => {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    try {
        const response = await fetch(`/representative?ward=${encodeURIComponent(lat + ',' + lng)}`);
        const data = await response.json();

        // Display data
        if (data.length > 0) {
            alert(`Representative: ${data[0].name}\nWard: ${data[0].ward}\nParty: ${data[0].party}`);
        } else {
            alert('No representative found for this location.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
