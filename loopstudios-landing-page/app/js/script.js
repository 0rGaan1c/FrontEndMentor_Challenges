const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("hero__mobile-menu-show");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hero__mobile-menu-show");
});
