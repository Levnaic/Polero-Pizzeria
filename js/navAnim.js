//promenjive
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('a');
const navHeight = nav.getBoundingClientRect().height;
const observeObject = document.querySelector('.observeObject');
console.log(observeObject);

//fade navbar

const handleHover = function (e) {
  if (e.target.classList.contains('navLink')) {
    const meta = e.target;
    const rodjaci = meta.closest('.nav').querySelectorAll('.navLink');

    rodjaci.forEach((el) => {
      if (el !== meta) el.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//stiki

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.4,
  //rootMargin: `-${navHeight}px`,
});

navObserver.observe(observeObject);
