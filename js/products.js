// js/products.js

// Array of artworks with dates every 2 weeks on Tuesday
const artworks = [
    { name: "Crocodile", price: 1200, image: "images/crocodile.webp", status: "Available", date: "2025-10-28", description: "A powerful semi-abstract acrylic painting capturing the raw strength of a crocodile." },
    { name: "Eagle", price: 1200, image: "images/Eagle.webp", status: "Available", date: "2025-10-14", description: "Majestic eagle rendered with textured palette knife techniques." },
    { name: "Hyena", price: 1200, image: "images/Hyena.webp", status: "Available", date: "2025-09-30", description: "Bold and expressive portrayal of the wild hyena." },
    { name: "Hippo", price: 1200, image: "images/Hippo.webp", status: "Available", date: "2025-09-16", description: "Textured acrylic artwork showcasing the hippo's massive presence." },
    { name: "Warthog", price: 1200, image: "images/Warthog.webp", status: "Available", date: "2025-09-02", description: "Characterful depiction of the iconic African warthog." },
    { name: "Rhino", price: 1200, image: "images/Rhino.webp", status: "Available", date: "2025-08-19", description: "Striking rhino painting with bold texture and movement." },
    { name: "Baboon", price: 1200, image: "images/Baboon.webp", status: "Available", date: "2025-08-05", description: "Dynamic portrayal of a baboon with expressive features." },
    { name: "Lion", price: 1200, image: "images/Lion.webp", status: "Available", date: "2025-07-22", description: "Regal lion captured in semi-abstract style with rich textures." },
    { name: "Buffalo", price: 1200, image: "images/Buffalo.webp", status: "Available", date: "2025-07-08", description: "Powerful buffalo painting showcasing strength and presence." },
    { name: "Cheetah", price: 1200, image: "images/Cheetah.webp", status: "Available", date: "2025-06-24", description: "Swift and graceful cheetah rendered with dynamic brushwork." },
    { name: "Zebra", price: 1200, image: "images/Zebra.webp", status: "Available", date: "2025-06-10", description: "Bold zebra painting with striking contrast and texture." },
    { name: "Elephant", price: 1200, image: "images/Elephant.webp", status: "Available", date: "2025-05-27", description: "Majestic elephant artwork with rich palette knife textures." },

    { name: "Lioness", price: 0, image: "images/Lioness-Old.webp", status: "Sold", date: "2025-05-13", description: "Beautiful lioness painting - now part of a private collection." },
    { name: "Kudu", price: 0, image: "images/Kudu-Old.webp", status: "Sold", date: "2025-04-29", description: "Elegant kudu artwork - sold to a collector." },
    { name: "Wild Dog", price: 0, image: "images/Wild-Dog-Old.webp", status: "Sold", date: "2025-04-15", description: "Wild dog painting - now in a private collection." },
    { name: "Giraffe", price: 0, image: "images/Giraffe-Old.webp", status: "Sold", date: "2025-04-01", description: "Graceful giraffe artwork - sold." },
    { name: "Rhino-Old", price: 0, image: "images/Rhino-Old.webp", status: "Sold", date: "2025-03-18", description: "Early rhino painting - sold to collector." },
    { name: "Rhino-Old-2", price: 0, image: "images/Rhino-Old-2.webp", status: "Sold", date: "2025-03-04", description: "Rhino artwork from earlier collection - sold." },
    { name: "Rhino-Old-3", price: 0, image: "images/Rhino-Old-3.webp", status: "Sold", date: "2025-02-18", description: "Classic rhino painting - now in private collection." },
    { name: "Lion and Lioness", price: 0, image: "images/Lion-and-Lioness-Old.webp", status: "Sold", date: "2025-02-04", description: "Paired lion and lioness artwork - sold." },
    { name: "Lion-Old", price: 0, image: "images/Lion-Old.webp", status: "Sold", date: "2025-01-21", description: "Early lion painting - sold to collector." },
    { name: "Zebra-Old", price: 0, image: "images/Zebra-Old.webp", status: "Sold", date: "2025-01-07", description: "Classic zebra artwork - now in private collection." },
    { name: "Face", price: 0, image: "images/Main-Face.jpg", status: "Sold", date: "2024-12-24", description: "Abstract face portrait - sold." },
    { name: "Face2", price: 0, image: "images/face2.webp", status: "Sold", date: "2024-12-10", description: "Expressive face painting - sold to collector." },
    { name: "Elephant-Old", price: 0, image: "images/Elephant-Old.webp", status: "Sold", date: "2024-11-26", description: "Early elephant artwork - now in private collection." }
];

let currentArtworks = [...artworks];

// Function to render artworks dynamically
function renderArtworks(artworksArray) {
    const container = document.querySelector(".artworks-container");
    container.innerHTML = "";

    // Update gallery images for lightbox
    if (typeof window.updateGalleryImages === 'function') {
        window.updateGalleryImages(artworksArray);
    }

    artworksArray.forEach((art, index) => {
        const artCard = document.createElement("div");
        artCard.className = "art-card";

        artCard.innerHTML = `
            <img src="${art.image}" alt="${art.name}" class="art-image">
            <h3>${art.name}</h3>
            <p class="price ${art.status === "Sold" ? "price-sold" : ""}">
                ${art.status === "Sold" ? "Sold" : "R " + art.price.toLocaleString()}
            </p>
            <a href="contact.html" class="contact-btn">Contact</a>
        `;

        // Add click event to image for lightbox
        const img = artCard.querySelector('.art-image');
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            if (typeof window.openLightbox === 'function') {
                window.openLightbox(index);
            }
        });

        container.appendChild(artCard);
    });
}

// Search function
function searchArtworks(query) {
    const filtered = artworks.filter(art =>
        art.name.toLowerCase().includes(query.toLowerCase())
    );
    currentArtworks = filtered;
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
    currentArtworks = sorted;
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