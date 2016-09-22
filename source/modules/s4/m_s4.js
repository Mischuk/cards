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