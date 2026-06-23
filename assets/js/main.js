/* main.js */
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initActiveNav();
});

function initScrollProgress() {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  window.addEventListener("scroll", () => {
    const p = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = p + "%";
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");
  if (!links.length) return;
  window.addEventListener("scroll", () => {
    let cur = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 130) cur = s.id;
    });
    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + cur);
    });
  });
}
