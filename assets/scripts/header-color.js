let headerJoinBtnImg = document.querySelector('.header__button img')
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > document.querySelector('.first-screen').clientHeight){
        header.classList.add('white')
        headerJoinBtnImg.src = 'assets/images/icon-join-white.svg' 
    }else{
        header.classList.remove('white')
        headerJoinBtnImg.src = 'assets/images/icon-join.svg' 
    }
    
})

if(window.pageYOffset > document.querySelector('.first-screen').clientHeight){header.classList.add('white')}