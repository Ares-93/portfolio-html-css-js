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
