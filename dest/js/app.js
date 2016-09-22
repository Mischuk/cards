$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });


    /*! Mask for form's input */
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"X"});
    };
    inputMask();

    // Маска для телефона
    $("[name=tel]").mask("+7(999) 999-99-99");
    //

    // Обработка форма на AJAX
    $.validator.addMethod("minlenghtphone", function (value, element) {
      return value.replace(/\D+/g, '').length > 10;
    }, "Введите полный номер.");

    $.validator.addMethod("requiredphone", function (value, element) {
      return value.replace(/\D+/g, '').length > 1;
    }, "Это поле необходимо заполнить.");

    $("form").each(function(){
      $(this).validate({
        rules: {
          name: {
          required: true,
        },
        tel: {
          requiredphone: true,
          minlenghtphone: true
          }
        },
        submitHandler: function(form, event){
          event = event || window.event;
          $(form).ajaxSubmit({
            //dataType: 'script',
            error: function(){
               $('.success-trigger').trigger('click');
            },
            success: function(responseText, statusText, xhr){
              $('.form-input').val('');
              $('.success-trigger').trigger('click');
              // Появление "спасибо"
            }
          });
          return false;
        }
      });
    });

    $('.form-input').on('blur', function () {
      $(this).removeClass('error');
    });

    $('.get-popup').on('click', function () {
      var title = $(this).data('title');
      $('#modal-title').text(title);
    });

    $('.get-popup').magnificPopup({
      type: 'inline'
    });

    $('.mobile-menu-trigger').on('click', function () {

      $(this).toggleClass('open');

      $('.menu').toggleClass('open');

    });

    

    $('.menu a').on('click', function () {

      $('.mobile-menu-trigger').removeClass('open');

      $('.menu').removeClass('open');

    });

    $('.menu a[href*="#"]:not([href="#"])').click(function() {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);

          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) {

            $('html, body').animate({

              scrollTop: target.offset().top - 70

            }, 1000);

            return false;

          }

        }

      });

    

    $(window).scroll(function(){

      if ($(this).scrollTop() > 0) {

          $('.m_header').addClass('scrolled');

      } else {

          $('.m_header').removeClass('scrolled');

      }

    });

    

    function popups() {

      $('.call-popup').magnificPopup({

        type: 'inline',

        fixedContentPos: false,

        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,

        preloader: false,

        midClick: true,

        removalDelay: 300,

        mainClass: 'my-mfp-zoom-in'

      });

    };

    popups();

    

    $('[data-countdown]').each(function() {

      var $this = $(this), finalDate = $(this).data('countdown');

      $this.countdown(finalDate, function(event) {

        $this.html(event.strftime('<b>%H</b> <span>часы</span>  <b>%M</b> <span>минуты</span>'));

      });

    });

    

    $slick_slider = $('.certificates');

    settings = {

      dots: true,

      fade:true,

      arrows: false,

      adaptiveHeight: true

    }

    $slick_slider.slick(settings);

    

    // reslick only if it's not slick()

    $(window).on('load resize', function() {

      if ($(window).width() > 1200) {

        if ($slick_slider.hasClass('slick-initialized')) {

          $slick_slider.slick('unslick');

        }

        return

      }

    

      if (!$slick_slider.hasClass('slick-initialized')) {

        return $slick_slider.slick(settings);

      }

    });

    

    function loyalityCarousel() {

      var $status = $('.loyality-data .status');

      var $slickElement = $('.loyality');

    

      $slickElement.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {

          var i = (nextSlide ? nextSlide : 0) + 1;

          $status.html('<span class="current">'+i+'</span>' + '<span class="large">/</span>' + '<span class="total">'+slick.slideCount+'</span>');

    

      });

    

      $slickElement.on('beforeChange', function(event, slick, currentSlide, nextSlide){

        var eq = nextSlide;

        $('.loyality-data .desc').text($('.loyality .slide').eq(eq).attr('data-desc'));

      });

    

      $slickElement.on('init reInit', function(event, slick, currentSlide, nextSlide){

        $('.loyality-data .desc').text($('.loyality .slide').eq(0).attr('data-desc'));

      });

    

      $slickElement.slick({

          arrows: true,

          dots: true,

          infinite: false,

          appendDots:$('.loyality-dots')

      });

    };

    loyalityCarousel();

    

    function portfolioCarousel() {

      $('.portfolio-carousel').slick({

          arrows: true,

          dots: true,

          infinite: false,

          slidesToShow: 3,

          slidesToScroll: 3,

          appendDots:$('.portfolio-carousel-nav'),

          appendArrows:$('.portfolio-carousel-nav'),

          responsive: [{

    

                breakpoint: 992,

                settings: {

                  slidesToShow: 2,

                  slidesToScroll: 2,

                  arrows: false

                }

    

              }, {

    

                breakpoint: 640,

                settings: {

                  slidesToShow: 1,

                  slidesToScroll: 1,

                  arrows: false

                }

    

              }]

      });

    };

    portfolioCarousel();

    

    function animatePortfolioCarousel() {

      $(".m_s8 .body").mouseenter(function() {

        $(this).find('.end').addClass('active');

        $(this).find('li').removeClass('active');

        $(this).find('li').each(function(i){

          var row = $(this);

          setTimeout(function() {

            row.addClass('active');

          }, 150*i);

        });

      }).mouseleave(function () {

        $(this).find('.end').removeClass('active');

        $(this).find('li').removeClass('active');

      });

    };

    animatePortfolioCarousel();

    

    function partnersCarousel() {

      $('.partners-carousel').slick({

          arrows: true,

          dots: true,

          infinite: false,

          appendDots:$('.partners-carousel-dots')

      });

    };

    partnersCarousel();
});