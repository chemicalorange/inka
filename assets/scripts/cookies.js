function checkCookies(){
    let cookieDate = localStorage.getItem('cookieDate')
    let cookieNotification = document.querySelector('.cookies')
    let cookieBtn = cookieNotification.querySelector('.btn-accept')
    let cookieBtnClose = cookieNotification.querySelector('.btn-close')

    if( !cookieDate || (+cookieDate + 31536000000) < Date.now() ){
        cookieNotification.classList.add('show');
    }

   
    cookieBtn.addEventListener('click', function(){
        localStorage.setItem( 'cookieDate', Date.now() )
        cookieNotification.classList.remove('show')
    })

    cookieBtnClose.addEventListener('click', function(){
        cookieNotification.classList.remove('show')
    })
}
checkCookies();