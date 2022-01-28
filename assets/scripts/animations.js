const oneApp = document.querySelector('.oneApp')
const brandItems = document.querySelectorAll('.one-app__brands-item')
const reviewsItems = document.querySelectorAll('.one-app__reviews-item')

let counterAnimation = 0;

const oneAppAnimation = () =>{
    for(let item of brandItems){
        setTimeout(()=>{
            item.classList.add('animation-st-1')
        }, 5)
        setTimeout(()=>{
            item.classList.add('animation-st-2')
            document.querySelector('.one-app__logo img').classList.add('animation-st-2')
        }, 500)    
    }
    
    setTimeout(()=>{
        reviewsItems.forEach(item => item.classList.add('animation-st-3'))
    }, 1000)
    
    setTimeout(()=>{
        reviewsItems.forEach(item => item.classList.add('animation-st-4'))
    }, 1200)
    
    setTimeout(()=>{
        reviewsItems.forEach(item => item.classList.add('animation-st-5'))
    }, 1500)
}

const clearOneAppAnimation = () =>{

    setTimeout(()=>{
        reviewsItems.forEach(item => item.classList.remove('animation-st-5'))
    }, 5)
    
    setTimeout(()=>{
        reviewsItems.forEach(item => item.classList.remove('animation-st-4'))
    }, 500)

    setTimeout(()=>{
        reviewsItems.forEach(item => item.classList.remove('animation-st-3'))
    }, 1000)

    setTimeout(()=>{
        brandItems.forEach(item => item.classList.remove('animation-st-2'))
        document.querySelector('.one-app__logo img').classList.remove('animation-st-2')
    }, 1200)

    setTimeout(()=>{
        brandItems.forEach(item => item.classList.remove('animation-st-1'))
    }, 1500)

}

window.onload = () =>{
    window.addEventListener('scroll', () => {

        if(window.pageYOffset > document.querySelector('.first-screen').clientHeight - 160){
            if(counterAnimation === 0){
                oneAppAnimation()
                counterAnimation = 1
            }
        }else if(counterAnimation == 1){
            clearOneAppAnimation()
            counterAnimation = 0
        }
    })
    
    if(window.pageYOffset > document.querySelector('.first-screen').clientHeight - 130){
        oneAppAnimation()
        counterAnimation = 1
    }
        
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


let roadmapPhases = document.querySelectorAll('.roadmap__phase')

for (let phase of roadmapPhases){
    let marker = phase.querySelector('.roadmap__marker')
    gsap.to(marker, {
        scrollTrigger: {
            trigger: marker,
            start: '1px center',
            end: 'bottom',
            toggleActions: 'restart pause reverse reverse',
            scrub: 1,
        },
        
        x: phase.clientWidth,
        duration: 1
    })
}


