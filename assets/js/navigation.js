/* ==========================================================
   POOJITH PORTFOLIO V2
   navigation.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const allNavLinks = document.querySelectorAll(".nav-links a");

    // Navbar scroll
    function updateNavbar() {
        if (!navbar) return;
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
    updateNavbar();
    window.addEventListener("scroll", updateNavbar);

    // Mobile menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Smooth scroll (only for # links on index)
    allNavLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                if (navLinks) navLinks.classList.remove("active");
            });
        }
    });

    // Scroll progress bar
    const bar = document.querySelector(".scroll-progress") || (() => {
        const b = document.createElement("div");
        b.className = "scroll-progress";
        document.body.appendChild(b);
        return b;
    })();
    window.addEventListener("scroll", () => {
        const p = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = p + "%";
    });
});
