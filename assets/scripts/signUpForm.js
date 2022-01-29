$(function() {
    $(".cta__form").submit(function (event) {
      event.preventDefault();
   
      
      let appLink = "https://script.google.com/macros/s/AKfycbzWhzK8jURmcnceYLvYkKM66mQwU3hWouK0uzCFONIBwjKZu7Mv7XLFZ1D-2wdtxlg9/exec";
      let successRespond = 'Сообщение успешно отправлено. Посмотрите результат <a target="_blank" href="https://docs.google.com/spreadsheets/d/1h0egdmC9SYfhlscE_-0vPwCmuKAYTsjwhUBWuOw0v-w/edit?usp=sharing">тут</a>';
      let errorRespond = 'Не удалось отправить сообщение. Cвяжитесь с администратором сайта по адресу <a href="mailto:smart-landing@ya.ru">smart-landing@ya.ru</a>';
      let form = $('#' + $(this).attr('id'))[0];
      let preloader = $(this).find('.preloader');
      let submitButton = $(this).find('.cta__btn');
    
      let fd = new FormData(form);
   
   
      $.ajax({
   
        url: appLink,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: function(){

        document.querySelector('.preloader').classList.remove('hide')
        document.querySelector('body').classList.add('lock')    
        submitButton.prop('disabled', true);

      },
   
    }).done(function(res, textStatus, jqXHR) {
   
      if(jqXHR.readyState === 4 && jqXHR.status === 200) {
      
       document.querySelector('.preloader').classList.add('hide')
       document.querySelector('body').classList.remove('lock')
       
      
      submitButton.prop('disabled', false);
   
       
        form.reset();
   
      } else {
        formTitle.css({
          'display': 'none'
        });
        formRespond.html(errorRespond).css('color', '#c64b4b');
        preloader.css('opacity', '0');
        setTimeout( () => {
          formTitle.css({
            'display': 'block'
          });
   
          submitButton.prop('disabled', false);
        }, 5000);
   
        console.log('Гугл не ответил статусом 200');
      }
    }).fail(function(res, textStatus, jqXHR) {
      preloader.css('opacity', '0');
      formRespond.html('Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом').css('color', '#c64b4b');
      setTimeout( () => {
        formRespond.css({
          'display': 'none'
        });
        formTitle.css({
          'display': 'block'
        });
        submitButton.prop('disabled', false); 
      }, 5000);
   
      console.log('Не удалось выполнить запрос по указанному в скрипте пути');
    }); 
  });
  }(jQuery));