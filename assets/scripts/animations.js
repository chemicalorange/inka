
gsap.registerPlugin(ScrollTrigger)

gsap.to('.one-app__brands-item', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: 'top center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: true
    },
    x:0,
    y:0,
    background: '#7171FF',
    rotation: 0, 
    duration: 0.5
})

gsap.to('.one-app__reviews-item', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: '50px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: true
    },
    opacity:0.3,
    rotation: 0, 
    duration: 0.5,
    y:0,
    x:0,
})

gsap.to('.one-app__logo, .one-app__logo img', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: '10px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: true
    },
    background: '#7171FF',
    rotation: 0, 
    duration: 2,
    delay: 0.8,
    opacity:1
})

gsap.to('.one-app__reviews-item', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: '50px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: true
    },
    
    opacity:1,
    rotation: 0, 
    duration: 0.5,
    delay: 0.8,
    
})

gsap.to('.one-app__description', {
    scrollTrigger: {
        trigger: '.one-app__reviews',
        start: '50px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: true
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

