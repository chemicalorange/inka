let swiper = new Swiper(".banner__slider", {
    pagination: {
      el: ".swiper-pagination",
      
    },
    slidesPerView: 1,

    breakpoints: {
        500: {
          slidesPerView: 2,
        },
        
      }
  })