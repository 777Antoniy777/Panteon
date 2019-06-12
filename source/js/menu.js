var main_menu = document.querySelector(".main-nav");
var button_menu = document.querySelector(".main-nav__button");
var main_header = document.querySelector(".main-header__wrapper");

main_menu.classList.remove("main-nav--nojs");

if (main_menu.classList.contains("main-nav--closed")) {
  main_header.style.paddingTop = '132px';
  main_header.style.backgroundPosition = '0 0';
}

button_menu.addEventListener("click", function() {

  if (main_menu.classList.contains("main-nav--closed")) {
    main_menu.classList.remove("main-nav--closed");
    main_menu.classList.add("main-nav--opened");
    main_header.style.paddingTop = '79px';
    main_header.style.backgroundPosition = '0 -53px';
  } else {
    main_menu.classList.add("main-nav--closed");
    main_menu.classList.remove("main-nav--opened");
    main_header.style.paddingTop = '132px';
    main_header.style.backgroundPosition = '0 0';
  }
});
