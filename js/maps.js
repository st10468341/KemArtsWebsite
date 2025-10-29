var map = L.map('map', {
    zoomControl: false // disable default top-left zoom
}).setView([-34.5326, 20.0406], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

L.marker([-34.5326, 20.0406]).addTo(map)
    .bindPopup("Issie's Kitchen Cafe")
    .openPopup();

// Add zoom control to bottom-right
L.control.zoom({
    position: 'bottomright'
}).addTo(map);
