$(document).ready(function() {

    // Navbar Burger Event
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    //Search Event
    $(".search-button").click(function() {
        //Toggle "is-active" class on seachbar
        $(".search-button").toggleClass("is-active");
        $(".search-field").toggleClass("is-active");

    });

    //Responsive event
    if($(window).width() < 1024) {
        $('.popular-shelf').addClass('is-vertical');
        $('.popular-shelf .is-parent').removeClass('is-6');
        $('.recent-articles .is-parent').addClass('is-vertical');
        $('.recent-articles .is-child').removeClass('is-6');
        $('.author-tiles .is-parent').addClass('is-vertical');
    }

    $(window).on('resize', function() {
        if($(window).width() < 1024) {
            $('.popular-shelf').addClass('is-vertical');
            $('.popular-shelf .is-parent').removeClass('is-6');
            $('.recent-articles .is-parent').addClass('is-vertical');
            $('.recent-articles .is-child').removeClass('is-6');
            $('.author-tiles .is-parent').addClass('is-vertical');
        }
        else {
            $('.popular-shelf').removeClass('is-vertical');
            $('.popular-shelf .is-parent').addClass('is-6');
            $('.recent-articles .is-parent').removeClass('is-vertical');
            $('.recent-articles .is-child').addClass('is-6');
            $('.author-tiles .is-parent').removeClass('is-vertical');
        }
    });

  });