const hamburger = document.querySelector("#img-hamburger");
const menu = document.querySelector("#mobile-menu");

hamburger.addEventListener("click", () => {
  if (menu.classList.contains("show-menu")) {
    menu.classList.add("hide-menu");
    menu.classList.remove("show-menu");
  } else {
    menu.classList.add("show-menu");
    menu.classList.remove("hide-menu");
  }
});
