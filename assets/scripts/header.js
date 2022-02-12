
window.addEventListener('load', ()=>{
        document.querySelector('.preloader').classList.add('hide')
        document.querySelector('body').classList.remove('lock')
        let pathPage = document.location.href
        if(pathPage.includes('#')){
          let blockID = pathPage.split('/').pop().replace('index.html#', "")
          console.log(blockID)
          setTimeout( scrollTo(blockID), 100)
        }
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

document.querySelectorAll('.nav__sub-menu a').forEach(item => {
    item.addEventListener('click', ()=>{
        document.querySelector('body').classList.remove('lock')
        nav.classList.remove('nav_active')
        burgerMenu.classList.remove('active')
    })
})

const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    scrollTo(blockID)
    
  })
}

const redirect = (anchor) => {
  document.location.href = 'index.html' + anchor
}

const scrollTo = (blockID) => {
  if(blockID == 'roadmap'){
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }else{
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
  
}




