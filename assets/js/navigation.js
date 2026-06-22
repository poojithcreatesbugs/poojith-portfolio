/* ==========================================================
   POOJITH PORTFOLIO V2
   navigation.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");

    const navLinks = document.querySelectorAll(".nav-links a");

    // ==========================
    // Navbar background on scroll
    // ==========================

    function updateNavbar() {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);

    // ==========================
    // Smooth Scroll
    // ==========================

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

});