/* ==========================================================
   POOJITH PORTFOLIO V2
   Premium Gallery
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeGallery();

});

function initializeGallery() {

    const images = document.querySelectorAll(".speaking-card img");

    if (!images.length) return;

    const overlay = document.createElement("div");

    overlay.className = "gallery-overlay";

    overlay.innerHTML = `

        <div class="gallery-container">

            <img class="gallery-image">

            <button class="gallery-close">&times;</button>

        </div>

    `;

    document.body.appendChild(overlay);

    const galleryImage = overlay.querySelector(".gallery-image");

    const closeButton = overlay.querySelector(".gallery-close");

    images.forEach(image => {

        image.style.cursor = "zoom-in";

        image.addEventListener("click", () => {

            galleryImage.src = image.src;

            galleryImage.alt = image.alt;

            overlay.classList.add("open");

            document.body.style.overflow = "hidden";

        });

    });

    function closeGallery() {

        overlay.classList.remove("open");

        document.body.style.overflow = "";

    }

    closeButton.addEventListener("click", closeGallery);

    overlay.addEventListener("click", e => {

        if (e.target === overlay) {

            closeGallery();

        }

    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeGallery();

        }

    });

}