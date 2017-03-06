$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    $('#menu').mmenu({
      extensions    : [ "border-none", "pageshadow", "pagedim-black" ],
      "offCanvas": {
        "position": "right"
      },
      navbar: false,
      navbars   : {
        content : [ "close" ],
        height  : 2
      }
    });

    $('body').on('click', '.mm-listview .anchor', function(){
      var scrolled = $(this).attr('href');
      
      setTimeout(function(){
        $('html, body').animate({
          scrollTop: $(scrolled).offset().top - 50
        }, 1000);
      }, 400);
    });
    
    $('select').selectric({
      disableOnMobile: false,
      nativeOnMobile: false,
      responsive: true
    });

    $('select').on('selectric-change', function(event, element, selectric) {
      $('.certificates-list .item').removeClass('focused');
      $(this).parents('.item').addClass('focused');
    });

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

    $("#popup-action form").each(function(){
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
            success: function(responseText, statusText, xhr){
              window.location.replace("./multisertificate.html");
            }
          });
          return false;
        }
      });
    });

    $("#popup-callback form").each(function(){
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

    $('.get-popup-action').magnificPopup({
      type: 'inline'
    });
    $(document).on('click', '.choose-cancel, #popup-remaining .cancel a', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });

    

    

    //=include modules.js
});