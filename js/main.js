var menuMobile = document.querySelector(".header__navMobile");
var iconMenu = document.querySelector(".header__iconMenu");
var iconClose = document.querySelector(".header__closeMenu");

iconMenu.addEventListener("click", function() {
  menuMobile.classList.add("is-visible");
});

iconClose.addEventListener("click", function() {
  menuMobile.classList.remove("is-visible");
});
