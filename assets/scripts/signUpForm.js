
    $(".cta__form").submit(function (event) {
      event.preventDefault();
   
      
      let appLink = "https://script.google.com/macros/s/AKfycbzWhzK8jURmcnceYLvYkKM66mQwU3hWouK0uzCFONIBwjKZu7Mv7XLFZ1D-2wdtxlg9/exec";
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
        
        if(fd.get('honeypot').length) {
          return false;
        } else {
          fd.delete('honeypot');
        }

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var address = form.querySelector('.cta__input').value;
        if(reg.test(address) == false) {
            form.classList.add('cta__form_error')
            document.querySelector('.preloader').classList.add('hide')
            document.querySelector('body').classList.remove('lock')
            document.querySelector('.cta__error').style.visibility = "visible"   
            return false
        }else{
          document.querySelector('.cta__error').style.visibility = "hidden" 
          form.classList.remove('cta__form_error')  
          return true
        }

      },
   
    }).done(function(res, textStatus, jqXHR) {
   
      if(jqXHR.readyState === 4 && jqXHR.status === 200) {
      
       document.querySelector('.preloader').classList.add('hide')
       document.querySelector('body').classList.remove('lock')
       
      
      submitButton.prop('disabled', false);
   
       
        form.reset();
   
      } else {
        
   
        console.log('Гугл не ответил статусом 200');
      }
    }).fail(function(res, textStatus, jqXHR) {
      
      console.log('Не удалось выполнить запрос по указанному в скрипте пути');
    }); 
  });
