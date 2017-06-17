var el = document.querySelector(".main-nav__burger");
var show = document.querySelector(".main-nav__toggler");
var menu = document.querySelector(".main-nav__list");
var head = document.querySelector(".page-header");
var logo = document.querySelector(".main-nav__logo");
el.addEventListener("click", function (event) {
    event.preventDefault();
  el.classList.add("hidden");
  show.classList.remove("hidden");
  menu.classList.remove("hidden");
  head.classList.add("page-header--small");
  logo.classList.add("main-nav__logo--large");
});
show.addEventListener("click", function (hide) {
  hide.preventDefault();
  el.classList.remove("hidden");
  show.classList.add("hidden");
  menu.classList.add("hidden");
  head.classList.remove("page-header--small");
  logo.classList.remove("main-nav__logo--large");
});
