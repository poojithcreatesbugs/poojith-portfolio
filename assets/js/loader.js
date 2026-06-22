/* ==========================================================
   POOJITH PORTFOLIO V2
   loader.js
   Premium Page Loader
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    createLoader();

});

function createLoader() {

    const loader = document.createElement("div");

    loader.className = "page-loader";

    loader.innerHTML = `

        <div class="loader-content">

            <div class="loader-logo">PP</div>

            <div class="loader-line"></div>

        </div>

    `;

    document.body.appendChild(loader);

    document.body.style.overflow = "hidden";

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("loader-hidden");

            document.body.style.overflow = "";

            setTimeout(() => {

                loader.remove();

            }, 900);

        }, 1200);

    });

}