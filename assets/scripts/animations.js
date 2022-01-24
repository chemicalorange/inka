
gsap.registerPlugin(ScrollTrigger)

gsap.to('.one-app__brands-item', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: '10px center',
        end: 'center',
        toggleActions: 'restart pause reverse reverse',
        scrub: 0.1,
    },
    x:0,
    y:0,
    background: '#7171FF',
    rotation: 0, 
    duration: 0.3,
    scale: (1.1, 1.1),
    borderRadius: 0,
    border: 'none'
})

gsap.to('.one-app__brands-item img', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: 'top center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: 0.1,
    },
    duration: 1,
    opacity: 0
})


gsap.to('.one-app__reviews-item', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: '50px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: 0.1,
    },
    opacity:0,
    duration: 0.3,
})

gsap.to('.one-app__reviews-item', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: '50px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
    },
    duration: 0,
    y:0,
    x:0,
    delay:0.5
})

gsap.to('.one-app__logo img', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: '10px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: 0.1,
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
        toggleActions: 'play pause reverse reverse',
        scrub: 0.1,
    },
    
    opacity:1,
    rotation: 0, 
    duration: 0.4,
    delay: 1,
    
})

gsap.to('.one-app__description', {
    scrollTrigger: {
        trigger: '.one-app__reviews',
        start: '50px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
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


