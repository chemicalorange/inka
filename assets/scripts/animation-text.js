gsap.registerPlugin(ScrollTrigger)

let banners = document.querySelectorAll('.banner');

for(let banner of banners){
    let bannerContent = banner.querySelector('.banner__content')
    let bannerImage = banner.querySelector('.banner__image')

    gsap.to(bannerContent,{
        scrollTrigger:{
            trigger: banner,
            start: '20px center',
            end: "400px",
        },
        opacity:1,
        y:0,
        duration: 0.5
    })

    gsap.to(bannerImage,{
        scrollTrigger:{
            trigger: banner,
            start: '20px center',
            end: "400px",
        },
        opacity:1,
        y:0,
        duration: 0.5
    })
}