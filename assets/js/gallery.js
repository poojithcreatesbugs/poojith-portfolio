/* ==========================================================
   POOJITH PORTFOLIO V2 — gallery.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initGallery();
    initLightbox();
});

function initGallery() {
    const images = document.querySelectorAll(".speaking-card img, .ev-photo img, .dest-card img");
    if (!images.length) return;
    images.forEach(img => { img.style.cursor = "zoom-in"; });
}

// Global lightbox: data-lb-group + data-lb-src attributes
let lbGroups = {};
let lbCurrent = null;
let lbIdx = 0;

function initLightbox() {
    const overlay = document.createElement("div");
    overlay.className = "gallery-overlay";
    overlay.id = "lb-overlay";
    overlay.innerHTML = `
        <div class="gallery-container">
            <img class="gallery-image" id="lb-img">
            <button class="gallery-close" onclick="closeLightbox()">&times;</button>
            <button class="gallery-nav gallery-prev" onclick="lbNav(-1)">&#8249;</button>
            <button class="gallery-nav gallery-next" onclick="lbNav(1)">&#8250;</button>
            <div class="gallery-counter" id="lb-counter"></div>
        </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", e => { if (e.target === overlay) closeLightbox(); });
    document.addEventListener("keydown", e => {
        if (!overlay.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") lbNav(-1);
        if (e.key === "ArrowRight") lbNav(1);
    });
    document.getElementById("lb-img").style.transition = "opacity .15s";
}

function openLightbox(groupId, idx) {
    const srcs = lbGroups[groupId];
    if (!srcs || !srcs.length) return;
    lbCurrent = groupId; lbIdx = idx;
    const img = document.getElementById("lb-img");
    img.src = srcs[idx];
    document.getElementById("lb-counter").textContent = (idx + 1) + " / " + srcs.length;
    document.getElementById("lb-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    document.getElementById("lb-overlay").classList.remove("open");
    document.body.style.overflow = "";
}

function lbNav(dir) {
    if (!lbCurrent) return;
    const srcs = lbGroups[lbCurrent];
    lbIdx = (lbIdx + dir + srcs.length) % srcs.length;
    const img = document.getElementById("lb-img");
    img.style.opacity = "0";
    setTimeout(() => {
        img.src = srcs[lbIdx];
        img.style.opacity = "1";
        document.getElementById("lb-counter").textContent = (lbIdx + 1) + " / " + srcs.length;
    }, 130);
}
