/* ==========================================================
   POOJITH PORTFOLIO V2
   reveal.js
   Scroll Reveal Animations
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeRevealAnimations();

});

function initializeRevealAnimations() {

    const revealElements = document.querySelectorAll(
        ".section-header, .feature-card, .timeline-item, .speaking-card, .book, .contact-box"
    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15,

            rootMargin: "0px 0px -80px 0px"

        }

    );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}