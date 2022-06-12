//slider

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn__left');
const btnRight = document.querySelector('.slider__btn__right');
const maxSlide = slides.length;
currSlide = 0;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
    console.log(s);
  });
};

const nextSlide = function (slide) {
  currSlide === maxSlide - 1 ? (currSlide = 0) : currSlide++;
  goToSlide(currSlide);
};

const pervSlide = function (slide) {
  currSlide === 0 ? (currSlide = maxSlide - 1) : currSlide--;
  goToSlide(currSlide);
};

const initSlide = function () {
  goToSlide(0);
  currSlide = 0;
};

initSlide();

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', pervSlide);
