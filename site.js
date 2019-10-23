$(function() {
  function init() {
    // Toggle bg colour on and off
    $('.js-sm-colour').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('sm-colour--on');
    })

    // Toggle bg colour on and off
    $('.js-sm-position').on('click', function (e) {
      e.preventDefault();
      $('.mouseimg').toggleClass('sm-position--on');
    })

    // Toggle bg colour on and off
    $('.js-sm-move').on('click', function (e) {
      e.preventDefault();
      $('.amp').toggleClass('sm-move--on');
    })
  }

  init();
});
