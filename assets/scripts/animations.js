const oneApp = document.querySelector('.oneApp')
const brandItems = document.querySelectorAll('.one-app__brands-item')
const reviewsItems = document.querySelectorAll('.one-app__reviews-item')


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

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".one-app",
      scrub: true,
      pin: true,
      start: "-30px top",
      end: "+=100%"
    },
    duration: 3
  });


tl.to(brandItems, {y:0, x:0, rotate: 0}, 1)
  .to(brandItems, {border: 'none', background: '#7171FF', boxShadow: 'none', scale: 1.3}, 2)
  .to('.one-app__brands-item img', {opacity: 0}, 2)
  .to('.one-app__logo img', {opacity: 1}, 2)
  .to('.one-app__brands', {overflow: 'hidden'}, 3)
  .to(reviewsItems, {opacity: 0}, 4)
  .to(reviewsItems, {x:0, y:0}, 5)
  .to(reviewsItems, {opacity: 1}, 6)


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


