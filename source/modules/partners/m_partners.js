function partnersFilters() {
  $('.m_partners .sidebar li a').on('click', function(){
    $('.m_partners .sidebar li a').removeClass('current');
    $(this).addClass('current');


    $('.m_partners .items .item').removeClass('current');

    var filter = $(this).attr('data-filter');
    $('.m_partners .items .item').each(function(){
      if ( $(this).attr('data-filter') == filter ) {
        $(this).addClass('current');
      }
    });

    var current_item = $(this).parent().index();

    $('#partner-filters-mobile').prop('selectedIndex', current_item).selectric('refresh');
  }); 
  var $select = $('#partner-filters-mobile');
  $select.selectric({
    disableOnMobile: false,
    nativeOnMobile: false,
    responsive: true,
    maxHeight: 500
  });
  $select.on('selectric-change', function(event, element, selectric) {
    var filter = $(this).val();
    $('.m_partners .items .item').removeClass('current');
    $('.m_partners .items .item').each(function(){
      if ( $(this).attr('data-filter') == filter ) {
        $(this).addClass('current');
      }
    });

    $('.m_partners .sidebar li a').removeClass('current');
    $('.m_partners .sidebar li').each(function(){
      if ( $(this).find('a').attr('data-filter') == filter ) {
        $(this).find('a').addClass('current');
      }
    });
  });
}
partnersFilters();