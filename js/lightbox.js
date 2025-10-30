// ================= LIGHTBOX FUNCTIONALITY =================

let currentImageIndex = 0;
let galleryImages = [];

// Initialize lightbox
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxDescription = document.querySelector('.lightbox-description');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Open lightbox
    window.openLightbox = function(index) {
        currentImageIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Update lightbox content
    function updateLightboxContent() {
        const artwork = galleryImages[currentImageIndex];
        if (artwork) {
            lightboxImage.src = artwork.image;
            lightboxImage.alt = artwork.name;
            lightboxTitle.textContent = artwork.name;
            lightboxDescription.textContent = artwork.description || 'A beautiful piece from the KEM Arts collection.';
        }
    }

    // Navigate to previous image
    function showPrevious() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxContent();
    }

    // Navigate to next image
    function showNext() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxContent();
    }

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevious();
        } else if (e.key === 'ArrowRight') {
            showNext();
        }
    });
}

// Update gallery images array (call this when rendering artwork cards)
window.updateGalleryImages = function(images) {
    galleryImages = images;
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLightbox);
} else {
    initializeLightbox();
}