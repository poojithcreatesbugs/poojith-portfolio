/* transitions.js — page transition overlay */
document.addEventListener("DOMContentLoaded", () => {
  // Fade in on load
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity .5s ease";
  setTimeout(() => { document.body.style.opacity = "1"; }, 60);
});

function navigateTo(url) {
  const overlay = document.getElementById("page-overlay");
  if (overlay) {
    overlay.style.transformOrigin = "bottom";
    overlay.style.transform = "scaleY(1)";
    overlay.style.transition = "transform .5s cubic-bezier(.76,0,.24,1)";
    overlay.style.pointerEvents = "auto";
    setTimeout(() => { window.location.href = url; }, 510);
  } else {
    window.location.href = url;
  }
}
