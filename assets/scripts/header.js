
window.addEventListener('load', ()=>{
        document.querySelector('.preloader').classList.add('hide')
        document.querySelector('body').classList.remove('lock')
})


const header = document.querySelector('.header')
const burgerMenu = document.querySelector('.header__menu')
const nav = document.querySelector('.header__nav')
const navItems = document.querySelectorAll('.nav__has-child')

burgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active')
    header.classList.add('white')
    nav.classList.toggle('nav_active')
    navItems.forEach( item2 => item2.classList.remove('active'))
    navItems[0].classList.add('active')
    document.querySelector('body').classList.toggle('lock')
})


for(let item of navItems){
    item.addEventListener('click', ()=>{
        navItems.forEach( item2 => item2.classList.remove('active'))
        item.classList.add('active')
        
    })
}