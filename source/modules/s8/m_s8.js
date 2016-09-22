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