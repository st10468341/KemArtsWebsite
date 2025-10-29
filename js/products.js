// js/products.js

// Array of artworks with dates every 2 weeks on Tuesday
const artworks = [
    { name: "Crocodile", price: 1200, image: "images/crocodile.webp", status: "Available", date: "2025-10-28" },
    { name: "Eagle", price: 1200, image: "images/Eagle.webp", status: "Available", date: "2025-10-14" },
    { name: "Hyena", price: 1200, image: "images/Hyena.webp", status: "Available", date: "2025-09-30" },
    { name: "Hippo", price: 1200, image: "images/Hippo.webp", status: "Available", date: "2025-09-16" },
    { name: "Warthog", price: 1200, image: "images/Warthog.webp", status: "Available", date: "2025-09-02" },
    { name: "Rhino", price: 1200, image: "images/Rhino.webp", status: "Available", date: "2025-08-19" },
    { name: "Baboon", price: 1200, image: "images/Baboon.webp", status: "Available", date: "2025-08-05" },
    { name: "Lion", price: 1200, image: "images/Lion.webp", status: "Available", date: "2025-07-22" },
    { name: "Buffalo", price: 1200, image: "images/Buffalo.webp", status: "Available", date: "2025-07-08" },
    { name: "Cheetah", price: 1200, image: "images/Cheetah.webp", status: "Available", date: "2025-06-24" },
    { name: "Zebra", price: 1200, image: "images/Zebra.webp", status: "Available", date: "2025-06-10" },
    { name: "Elephant", price: 1200, image: "images/Elephant.webp", status: "Available", date: "2025-05-27" },

    { name: "Lioness", price: 0, image: "images/Lioness-Old.webp", status: "Sold", date: "2025-05-13" },
    { name: "Kudu", price: 0, image: "images/Kudu-Old.webp", status: "Sold", date: "2025-04-29" },
    { name: "Wild Dog", price: 0, image: "images/Wild-Dog-Old.webp", status: "Sold", date: "2025-04-15" },
    { name: "Giraffe", price: 0, image: "images/Giraffe-Old.webp", status: "Sold", date: "2025-04-01" },
    { name: "Rhino-Old", price: 0, image: "images/Rhino-Old.webp", status: "Sold", date: "2025-03-18" },
    { name: "Rhino-Old-2", price: 0, image: "images/Rhino-Old-2.webp", status: "Sold", date: "2025-03-04" },
    { name: "Rhino-Old-3", price: 0, image: "images/Rhino-Old-3.webp", status: "Sold", date: "2025-02-18" },
    { name: "Lion and Lioness", price: 0, image: "images/Lion-and-Lioness-Old.webp", status: "Sold", date: "2025-02-04" },
    { name: "Lion-Old", price: 0, image: "images/Lion-Old.webp", status: "Sold", date: "2025-01-21" },
    { name: "Zebra-Old", price: 0, image: "images/Zebra-Old.webp", status: "Sold", date: "2025-01-07" },
    { name: "Face", price: 0, image: "images/Main-Face.jpg", status: "Sold", date: "2024-12-24" },
    { name: "Face2", price: 0, image: "images/face2.webp", status: "Sold", date: "2024-12-10" },
    { name: "Elephant-Old", price: 0, image: "images/Elephant-Old.webp", status: "Sold", date: "2024-11-26" }
];

// Function to render artworks dynamically
function renderArtworks(artworksArray) {
    const container = document.querySelector(".artworks-container");
    container.innerHTML = "";

    artworksArray.forEach(art => {
        const artCard = document.createElement("div");
        artCard.className = "art-card";

        artCard.innerHTML = `
            <img src="${art.image}" alt="${art.name}">
            <h3>${art.name}</h3>
            <p class="price ${art.status === "Sold" ? "price-sold" : ""}">
                ${art.status === "Sold" ? "Sold" : "R " + art.price.toLocaleString()}
            </p>
            <a href="contact.html" class="contact-btn">Contact</a>
        `;
        container.appendChild(artCard);
    });
}

// Search function
function searchArtworks(query) {
    const filtered = artworks.filter(art =>
        art.name.toLowerCase().includes(query.toLowerCase())
    );
    renderArtworks(filtered);
}

// Sort function
function sortArtworks(criteria) {
    let sorted = [...artworks];
    if (criteria === "oldest") {
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (criteria === "newest") {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === "name-asc") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "name-desc") {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    renderArtworks(sorted);
}

// Initialize gallery
document.addEventListener("DOMContentLoaded", () => {
    // Default sort: newest → oldest
    sortArtworks("newest");

    // Make the dropdown match the default
    document.getElementById("sort-select").value = "newest";

    // Event listeners
    document.getElementById("search-input").addEventListener("input", e => searchArtworks(e.target.value));
    document.getElementById("sort-select").addEventListener("change", e => sortArtworks(e.target.value));
});




