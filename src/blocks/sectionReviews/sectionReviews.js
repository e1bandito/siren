import Swiper from 'swiper';

const reviewsSlider = function () {
  const $slider = document.querySelector('.js-reviews-slider');
  let swiper = null;

  const init = () => {
    if (swiper !== null || $slider === null)
      return;

    swiper = new Swiper($slider, {
      slidesPerView: 3,
      spaceBetween: 20,
      slideClass: 'js-slide',
      wrapperClass: 'js-wrapper',
      loop: true,
      navigation: {
        nextEl: '.sectionReviews__sliderBtn_next',
        prevEl: '.sectionReviews__sliderBtn_prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        }
      },
      pagination: {
        el: '.js-pagination',
        type: 'bullets',
        bulletClass: 'sectionReviews__bullet',
        bulletActiveClass: 'sectionReviews__bullet_active',
        clickable: true,
      },
    });
  }

  init();
}

export default reviewsSlider;
