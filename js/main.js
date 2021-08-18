function bannerAnimation(swiper) {
  var slide = swiper.slides[swiper.activeIndex];

  var t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800
  })
  t1.add({
    targets: slide.querySelector('.sub-heading'),
    opacity: 1,
    translateY: -20,
  })
  .add({
    targets: slide.querySelector('.main-title'),
    opacity: 1,
    translateX: 20,
  },'1000')
  .add({
    targets: slide.querySelector('.btn'),
    opacity: 1,
    translateY: -20,
  }, '1400')
}

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    activeIndexChange: (swiper) => {
      bannerAnimation(swiper);
    },
    afterInit: (swiper) => {
      bannerAnimation(swiper);
    }
  }
})
