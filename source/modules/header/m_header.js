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