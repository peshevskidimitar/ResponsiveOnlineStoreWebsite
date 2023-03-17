(function ($) {
  "use strict";
  initTimer();
  initFavorite();
  initIsotopeFiltering();

  function initTimer() {
    if ($('.timer').length) {
      var target_date = (new Date('August 27, 2021')).getTime();

      // var date = new Date();
      // date.setDate(date.getDate() + 5);
      // var target_date = date.getTime();

      // Variables For Time Units

      var days, hours, minutes, seconds;
      var d = $('#day');
      var h = $('#hour');
      var m = $('#minute');
      var s = $('#second');

      setInterval(function () {
        // Find The Amount Of "seconds" between now and target

        var current_date = (new Date()).getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // Some Time Calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // Display Result

        d.text(days);
        h.text(hours);
        m.text(minutes);
        s.text(seconds);
      }, 1000);
    }
  }

  function initFavorite() {
    if ($('.favorite').length) {
      var favs = $('.favorite');


      favs.each(function () {
        var fav = $(this);
        var active = false;
        if (fav.hasClass('active')) {
          active = true;
        }
        fav.on('click', function () {
          if (active) {
            fav.removeClass('active');
            active = false;
          }
          else {
            fav.addClass('active');
            active = true;
          }
        });
      });
    }
  }

  function initIsotopeFiltering() {
    if ($('.grid-sorting-button').length) {
      $('.grid-sorting-button').click(function () {
        $('.grid-sorting-button.active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.product-grid').isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });

        return false;
      });
    }
  }

  $('.preloader').delay(1000).fadeOut('slow');
  setTimeout(function () {
    $('body').removeClass('no-scroll'); // After 1s, the no-scroll class of the body will be removed
  }, 1000); // Here you can change preloader time

  jQuery(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass("sticky");
    } else {
      $('.header').removeClass("sticky");
    }
  });

  $('input[id*="color"]').change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().addClass('active');
    } else {
      $(this).parent().removeClass('active');
    }
  });

})(jQuery);