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

    //=include modules.js
});