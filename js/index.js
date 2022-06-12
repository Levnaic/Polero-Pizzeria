//promenjive
const promocije = document.querySelectorAll('.promocija');
const promena = document.querySelectorAll('.promena');
const promenaCont = document.querySelector('.menjanjePromocije');

//promocija
promenaCont.addEventListener('click', function (e) {
  const clicked = e.target.closest('.promena');

  if (!clicked) return;

  promena.forEach((pm) => pm.classList.remove('aktivnaPromena'));
  promocije.forEach((pr) => pr.classList.remove('aktivnaPromocija'));

  clicked.classList.add('aktivnaPromena');

  document
    .querySelector(`.promocija--${clicked.dataset.tab}`)
    .classList.add('aktivnaPromocija');
});
