$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('<b>%H</b> <span>часы</span>  <b>%M</b> <span>минуты</span>'));
  });
});