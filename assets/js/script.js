var myLoader = document.querySelector(".myLoader");
var nPage = document.querySelector("#n-page");

// setTimeout(() => {
//     spinnerX.style.display = 'none';
//     pageX.style.display = 'block';
// }, 2000);

window.addEventListener("load", function () {
  myLoader.style.display = "none";
  nPage.style.display = "block";
  console.log("All assets are loaded");
});

$(function () {
  // $(window).stellar();

  // Helper function for add element box list in WOW
  WOW.prototype.addBox = function (element) {
    this.boxes.push(element);
  };

  // Init WOW.js and get instance
  var wow = new WOW();
  wow.init();

  // Attach scrollSpy to .wow elements for detect view exit events,
  // then reset elements and add again for animation
  $(".wow")
    .on("scrollSpy:exit", function () {
      $(this)
        .css({
          visibility: "hidden",
          "animation-name": "none",
        })
        .removeClass("animated");
      wow.addBox(this);
    })
    .scrollSpy();
});
//-------Owl Carousel JS:
$(document).ready(function () {
  $(".carousel").owlCarousel({
    items: 3,
    autoplay: true,
    loop: true,
    // rewind: true,
    // autoplayTimeout: 2000,
    autoplayTimeout: 2000,
    smartSpeed: 1980,
    animateIn: "linear",
    animateOut: "linear",
    slideTransition: "linear",
    autoplayHoverPause: "true",
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 3,
      },
    },
  });
});
//-------------------------------------------------
