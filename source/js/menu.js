'use strict';
(function () {
  var header = document.querySelector(".main-header");
  var mainNav = document.querySelector(".main-nav__wrapper");
  var introduction = document.querySelector(".introduction");
  var menu = header.querySelector(".main-nav");
  var button = menu.querySelector(".main-nav__button");

  var height = mainNav.offsetHeight + mainNav.offsetTop;

  menu.classList.remove("main-nav--nojs");
  introduction .style.marginTop = -height + 'px';

  button.addEventListener("click", function() {

    if (menu.classList.contains("main-nav--closed")) {

      menu.classList.remove("main-nav--closed");
      menu.classList.add("main-nav--opened");

      introduction .style.marginTop = '0px';

    } else {
      menu.classList.add("main-nav--closed");
      menu.classList.remove("main-nav--opened");

      introduction .style.marginTop = -height + 'px';
    }
  });
})();
