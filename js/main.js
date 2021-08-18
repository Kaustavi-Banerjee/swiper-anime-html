const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: () => {
      var t1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 800
      })
      t1.add({
        targets: '.sub-heading',
        opacity: 1,
        translateY: -20,
      })
      .add({
        targets: '.main-title',
        opacity: 1,
        translateX: 20,
      },'1000')
      .add({
        targets: '.btn',
        opacity: 1,
        translateY: -20,
      }, '1400')
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
