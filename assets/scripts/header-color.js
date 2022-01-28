window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > document.querySelector('.first-screen').clientHeight){
        header.classList.add('white')
    }else{
        header.classList.remove('white')
    }
    
})

if(window.pageYOffset > document.querySelector('.first-screen').clientHeight){header.classList.add('white')}