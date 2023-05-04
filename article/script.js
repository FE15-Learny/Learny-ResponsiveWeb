// ==================== HAMBURGER MENU ============================

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navbar.classList.toggle("show-menu");
  navLinks.classList.toggle("show-menu");
});