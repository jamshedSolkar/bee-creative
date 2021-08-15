$(function () {

  // Swipebox lightbox
  $( '.swipebox' ).swipebox();

  // Body Custome Scroll
  // $("body").niceScroll({
  //   cursorwidth: "10px",
  //   cursoropacitymin: 0.4,
  //   cursorcolor: '#ffca08',
  //   cursorborder: 'none',
  //   cursorborderradius: 0,
  //   autohidemode: 'leave'
  // });

  // scroll to top
  var btn = $('.scrollTop__wrap');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('active');
    } else {
      btn.removeClass('active');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  // onScroll fixed menu
  window.onscroll = function () {
    myFunction()
  };

  var header = document.getElementById("navbar__sub");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed-navbar");
    } else {
      header.classList.remove("fixed-navbar");
    }
  }

  /*One page scroll JS start here*/
  $(function () {

    var link = $('#navbar a.page-scroll');

    // Move to specific section when click on menu link
    link.on('click', function (e) {
      var target = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 600, 'swing');
      $(this).addClass('active');
      e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on('scroll', function () {
      scrNav();
    });

    // scrNav function
    // Change active dot according to the active section in the window
    function scrNav() {
      var sTop = $(window).scrollTop();
      $('section').each(function () {
        var id = $(this).attr('id'),
          offset = $(this).offset().top - 60,
          height = $(this).height();
        if (sTop >= offset && sTop < offset + height) {
          link.removeClass('active');
          $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
    }
    scrNav();
  });

  // Mobile humburger
  $(".navbar__humburger").click(function () {
    $(this).toggleClass("active");
    $('.navbar__menu').toggleClass("active");
  });

  // Main Banner
  var wave1 = $('#waves-white').wavify({
    height: 60,
    bones: 6,
    amplitude: 60,
    color: '#fff',
    speed: .15
  });

  // About Us Waves Bottom
  var wave1 = $('#waves-yellow').wavify({
    height: 60,
    bones: 10,
    amplitude: 60,
    color: '#ffc20f',
    speed: .1
  });

  // Portfolio Waves Bottom
  var wave1 = $('#waves-white-1').wavify({
    height: 60,
    bones: 14,
    amplitude: 50,
    color: '#fff',
    speed: .15
  });

  // Homepage Main Banner
  var swiper = new Swiper('.swiper-container.mainSwiper', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination.swiper-pagination--mainBanner',
      clickable: true,
    },
    loop: true
  });

  // Service Swiper
  var swiper1 = new Swiper('.swiper-container.serviceSwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    simulateTouce: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // init: false,
    breakpoints: {
      640: {
        slidesPerView: 1.2,
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,

      }
    }
  });

  // Testimonials Swiper
  var swiper2 = new Swiper('.swiper-container.testimonialsSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // Our Client Swiper
  var swiper3 = new Swiper('.swiper-container.ourClientSwiper', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination.swiper-pagination--ourClients',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      }
    }
  });
});