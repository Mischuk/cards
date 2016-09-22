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