function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const heroElements = document.querySelectorAll(
    ".hero h1, .hero p, .hero .call-to-action, .hero .social-links, .hero img"
  );
  heroElements.forEach((el) => el.classList.add("loaded"));
});

window.addEventListener("scroll", () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
