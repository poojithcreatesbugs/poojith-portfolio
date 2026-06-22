/* ==========================================================
   POOJITH PORTFOLIO V2
   main.js
   Global App Initialization
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initHeroParallax();
    initActiveNavigation();
    initScrollProgress();

});

/* ==========================================================
   HERO PARALLAX
========================================================== */

function initHeroParallax() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        hero.style.transform = `translateY(${scroll * 0.18}px)`;

        hero.style.opacity = Math.max(
            1 - scroll / 900,
            0
        );

    });

}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function initActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-links a");

    function updateNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                currentSection = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    updateNavigation();

    window.addEventListener("scroll", updateNavigation);

}

/* ==========================================================
   SCROLL PROGRESS BAR
========================================================== */

function initScrollProgress() {

    const progressBar = document.createElement("div");

    progressBar.className = "scroll-progress";

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / pageHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}