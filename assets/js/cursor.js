/* ==========================================================
   POOJITH PORTFOLIO V2
   cursor.js
   Mouse Spotlight
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if ("ontouchstart" in window) return;

    const spotlight = document.createElement("div");

    spotlight.className = "mouse-spotlight";

    document.body.appendChild(spotlight);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    function animate() {

        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;

        spotlight.style.transform =
            `translate(${currentX}px, ${currentY}px)`;

        requestAnimationFrame(animate);

    }

    animate();

});