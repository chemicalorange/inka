gsap.registerPlugin(ScrollTrigger)

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