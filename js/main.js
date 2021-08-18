const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: () => {
      anime({
        targets: '.sub-heading',
        translateY: -20,
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 800
      });
    },

    sliderMove: () => {
      anime({
        targets: '.sub-heading',
        translateY: -20,
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 800
      });
    }
  }
})

// swiper.on('init', function () {
//   anime({
//     targets: '.sub-heading',
//     translateY: -20,
//     opacity: 1,
//     easing: 'easeInOutQuad',
//     duration: 800
//   });
// });

// swiper.on('slideChange', function () {
//   anime({
//     targets: '.sub-heading',
//     translateY: -20,
//     opacity: 1,
//     easing: 'easeInOutQuad',
//     duration: 800
//   });
// });
