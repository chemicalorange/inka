
gsap.registerPlugin(ScrollTrigger)

gsap.to('.one-app__brands-item, .one-app__reviews-item', {
    scrollTrigger: {
        trigger: '.one-app__brands-item',
        start: '50px center',
        end: 'bottom',
        toggleActions: 'restart pause reverse reverse',
        scrub: true
    },
    x:0,
    y:0,
    rotation: 0, 
    duration: 0.5
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

