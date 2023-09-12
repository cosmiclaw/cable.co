(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".active-slider").owlCarousel({
      items: 1,
      loop: true,
      nav: true,

      animateOut: "fadeOut",
      autoplay: false,

      navText: ["<h1> < </h1>", "<h1> > </h1>"],
    });
  });
})(jQuery);
