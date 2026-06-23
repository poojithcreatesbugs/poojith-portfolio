/* reveal.js — scroll reveal */
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(
    ".section-header, .feature-card, .timeline-item, .speaking-card, .book, .contact-box, .reveal, .skill-item, .cert-row, .why-item, .paper-item, .vol-item, .event-block, .dest-card, .stat-box"
  );
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });
  els.forEach((el, i) => {
    if (!el.classList.contains("skill-item") && !el.classList.contains("cert-row") && !el.classList.contains("why-item") && !el.classList.contains("paper-item") && !el.classList.contains("vol-item") && !el.classList.contains("event-block") && !el.classList.contains("stat-box")) {
      el.classList.add("reveal");
    }
    el.style.transitionDelay = Math.min(i % 4 * 0.08, 0.32) + "s";
    obs.observe(el);
  });
});
