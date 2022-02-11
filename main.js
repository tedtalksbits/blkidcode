const spaceship = document.getElementById("spaceship");
const headerImg = document.getElementById("header-img");
window.addEventListener("scroll", function () {
   let value = window.scrollY;
   if (value >= 0 && value <= 1000) {
      spaceship.style.bottom = value / 2 + "px";
   }
});

ScrollOut({
   targets: ".bkc__grid-card, .bkc__content-img, .in-left, .in-right",
});
