const swiper = new Swiper('.slide-content', {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1050: {
      slidesPerView: 2,
    },
    1550: {
      slidesPerView: 3,
    },
  }
});