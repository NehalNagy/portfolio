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
    $('.wow').on('scrollSpy:exit', function () {
        $(this).css({
            'visibility': 'hidden',
            'animation-name': 'none'
        }).removeClass('animated');
        wow.addBox(this);
    }).scrollSpy();
});
//-------Owl Carousel JS:
$(document).ready(function () {

    $(".carousel").owlCarousel({
        items: 3,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 2000,
        slideTransition: "linear",
        responsive: {
            0: {
                items: 1,

            },
            750: {
                items: 3,

            }
        }
    });

});
//-------------------------------------------------
