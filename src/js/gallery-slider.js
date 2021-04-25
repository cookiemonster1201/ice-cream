$(document).ready(function () {
  $('.gallery__list').slick({
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 680,
        settings: 'unslick', // destroys slick
      },
    ],
  });
});
