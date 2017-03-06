$('.certificates-list .items').on('mouseleave', function(){
  $('.certificates-list .item').removeClass('focused');
});

function selectCards() {
  // Присвоение уникального идентификатора каждому сертификату
  unique = 0;

  function footerbottom() {
    var viewport = $(window).height();
    var page = $('.mm-page').height();

    if (viewport > page) {
      $('html').addClass('stack-footer');
    } else {
      $('html').removeClass('stack-footer');        
    }
  }  

  // Инициалзиция входной суммы для клиента
  var initial_sum = $('#total-sum').attr('data-client-sum');
  $('#total-sum, #initial-sum').text(initial_sum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
  $('.certificates-list .item .bottom .get-popup-action').on('click', function(){
    // Определение стоимости выбранного сертификата
    getCardSum = $(this).parents('.desc').find('.top').find('.selectric .label').text();
    cardSum = +(getCardSum.replace(/\s/g, ''));
    // Зависимости для добавления в следующие разделы
    selectedImage = $(this).parents('.item').find('.image img').attr('src');
    selectedName = $(this).parents('.item').find('.image img').attr('data-title');
  });

  $('.choose-submit').on('click', function(){
    unique++;
    // Определение количества средств на балансе
    var getTotalSum = $('#total-sum').text();
    var totalSum = +(getTotalSum.replace(/\s/g, ''));
    // Определение количества выбранных сертификатов
    var totalItems = +($('#total-items').text());
    // Вычисляем оставшуюся сумму средств после добавления сертификата
    var balance = totalSum - cardSum;
    var balanceTriads = balance.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
    if ( balance >= 0 ) {
      $('#total-sum').text(balanceTriads);
      totalItems++;
      $('#total-items').text(totalItems);

      // Добавление товаров
      $('#popup-cards .items').append('<div class="item" data-id="certificate-'+unique+'"><div class="image"><img src="'+selectedImage+'"/></div><div class="desc"><a data-sum-item="'+cardSum+'" class="remove-popup-cards-item" href="#">Убрать</a></div></div>');
      if ( $('#popup-cards .items .item').length > 0 ) {
        $('#popup-cards .no-items').hide();
        $('.m_activate-cards .step-1 .lead .desc .next-step').show();
      } else {
        $('#popup-cards .no-items').show();
        $('.m_activate-cards .step-1 .lead .desc .next-step').hide();
      }
      $('.step-2 .selected-certificates').append('<li data-id="certificate-'+unique+'">«'+selectedName+'» – '+getCardSum+' руб.</li>');
      // Заканчиваем
      $.magnificPopup.close();
    } else {
      $.magnificPopup.close();
      setTimeout(function(){
        $('#limit-trigger').trigger('click');
      },100);
    }
  });

  // Удаление товара
  $('body').on('click', '.remove-popup-cards-item', function(){
    // Стоимость сертификата
    var sum = +($(this).attr('data-sum-item'));
    // Определение количества средств на балансе
    var getTotalSum = $('#total-sum').text();
    var totalSum = +(getTotalSum.replace(/\s/g, ''));
    // Определение количества выбранных сертификатов
    var totalItems = +($('#total-items').text());
    // Возвращение суммы сертификата на общий баланс и изменение счетчика выбранных сертификатов
    var balance = totalSum + sum;
    var balanceTriads = balance.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
    $('#total-sum').text(balanceTriads);
    totalItems--;
    $('#total-items').text(totalItems);

    var unq = $(this).parents('.item').attr('data-id');
    $('.selected-certificates li').each(function(){
      if ( $(this).attr('data-id') == unq ) {
        $(this).remove();
      }
    });
    // Удаление
    $(this).parents('.item').remove();
    // Остались ли добавленные сертификаты    
    if ( $('#popup-cards .items .item').length > 0 ) {
      $('#popup-cards .no-items').hide();
      $('.m_activate-cards .step-1 .lead .desc .next-step').show();
    } else {
      $('#popup-cards .no-items').show();
      $('.m_activate-cards .step-1 .lead .desc .next-step').hide();
    };
    return false;
  });

  $('.step-1 .next-step').on('click', function(){
    $('#remaining-balance, #popup-remaining .remaining b').text($('#total-sum').text());
    if ( $('#total-sum').text() == 0 ) {
      // Переходим ко второму шагу в форме
      $('.m_activate-cards .step-1').fadeOut('300', function(){
        $('.m_activate-cards .step-2').fadeIn('300', function(){
          footerbottom();          
        });
        $("html, body").animate({ scrollTop: 0 }, 0);        
        return false;
      });
    } else {
      $('#rem-trigger').trigger('click');
    }
    return false;
  });

  // Переходим ко второму шагу в форме
  $('body').on('click', '#popup-remaining .submit a', function(){
    $.magnificPopup.close();
    $('.m_activate-cards .step-1').fadeOut('300', function(){
      $('.m_activate-cards .step-2').fadeIn('300', function(){
        footerbottom();
      });
      $("html, body").animate({ scrollTop: 0 }, 0);      
      return false;
    });
  });

  $('.step-2 .backward a').on('click', function(){
    $('.m_activate-cards .step-2').fadeOut('300', function(){
      $('.m_activate-cards .step-1').fadeIn('300', function(){
        footerbottom();
      });
      $("html, body").animate({ scrollTop: 0 }, 0);      
      return false;
    });
  });
} 
if ( $('#initial-sum').length ) {
  selectCards();  
}


function mobilecardtabs() {
  $('.faq-item-header a').on('click', function(){
    if ( $(this).hasClass('open') ) {
      return false;
    } else {
      $('.faq-item-header a').removeClass('open');
      $(this).addClass('open');
      $('.faq-item-body').slideUp('300');
      $(this).parent().next().slideDown('300');
    }
  });

  $('.tab-header .item a').on('click', function(){
    var eq = $(this).parent().index();
    $('.tab-header .item').removeClass('current');
    $(this).parent().addClass('current');
    $('.tab-content .item').fadeOut(0);
    $('.tab-content .item').eq(eq).fadeIn(0);
  });
}
mobilecardtabs();

function footerbottomouter() {
  var viewport = $(window).height();
  var page = $('.mm-page').height();

  if (viewport > page) {
    $('html').addClass('stack-footer');
  } else {
    $('html').removeClass('stack-footer');        
  }
}  
$(window).resize(footerbottomouter);