function partnersCarousel() {
  $('.partners-carousel').slick({
      arrows: true,
      dots: true,
      infinite: false,
      appendDots:$('.partners-carousel-dots')
  });
};
partnersCarousel();