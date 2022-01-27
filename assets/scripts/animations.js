const oneApp = document.querySelector('.oneApp')
const brandItems = document.querySelectorAll('.one-app__brands-item')
const reviewsItems = document.querySelectorAll('.one-app__reviews-item')

let counterAnimation = 0;

const oneAppAnimation = () =>{
    for(let item of brandItems){
        setTimeout(()=>{
            item.style.transform = "translate(0, 0)"
        }, 5)
        setTimeout(()=>{
            item.classList.add('showBefore')
            item.style.border = "none"
            item.querySelector('img').style.opacity = '0'
            item.style.background = "none"
            item.style.boxShadow = "none"
            item.style.transform = "scale(1.3, 1.3)"
            document.querySelector('.one-app__logo img').style.opacity = '1'
        }, 500)    
    }
    
    setTimeout(()=>{
        reviewsItems.forEach(item => item.style.opacity = 0)
    }, 1000)
    
    setTimeout(()=>{
        reviewsItems.forEach(item => item.style.transform = 'translate(0, 0)')
    }, 1200)
    
    setTimeout(()=>{
        reviewsItems.forEach(item => item.style.opacity = 1)
    }, 1500)
}

window.addEventListener('scroll', () => {
    if(counterAnimation === 0){
        if(window.pageYOffset > document.querySelector('.first-screen').clientHeight - 160){
            oneAppAnimation()
            counterAnimation = 1
        }
    }
})

if(window.pageYOffset > document.querySelector('.first-screen').clientHeight - 130){
    oneAppAnimation()
    counterAnimation = 1
}



gsap.registerPlugin(ScrollTrigger)

gsap.to('.one-app__description', {
    scrollTrigger: {
        trigger: '.one-app__reviews',
        start: '50px center',
        end: 'bottom',
    },
    
    opacity:1,
    duration: 0.5,
    
})


let banners = document.querySelectorAll('.banner');

for(let banner of banners){
    let bannerContent = banner.querySelector('.banner__content')

    gsap.to(bannerContent, {
        scrollTrigger:{
            trigger: banner,
            start: '10px center',
            end: 'bottom',
        },
        opacity:1,
        y:0,
        duration: 0.5
    })
}

let roadmapMarkers = document.querySelectorAll('.roadmap__marker')

for (let marker of roadmapMarkers){
    gsap.to(marker, {
        scrollTrigger: {
            trigger: marker,
            start: '1px center',
            end: 'bottom',
            toggleActions: 'restart pause reverse reverse',
            scrub: 1,
        },
        
        x: +500,
        duration: 1
    })
}


