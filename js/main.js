const btnLight = document.querySelector('.light-mode');
const btnDark = document.querySelector('.dark-mode');
const navStyle = document.querySelectorAll('.js-nav-header');
const titulo01 = document.querySelector('.box-left-hero h2');
const titulo02 = document.querySelector('.box-left-hero h1');

console.log(navStyle);

function lightMode() {
  navStyle.forEach(element => {
    element.classList.add('light');
  });

  document.body.classList.add('light');
  titulo01.classList.add('light');
  titulo02.classList.add('light');
}
function darkMode() {
  navStyle.forEach(element => {
    element.classList.remove('light');
  });

  document.body.classList.remove('light');
  titulo01.classList.remove('light');
  titulo02.classList.remove('light');
}

btnLight.addEventListener('click', lightMode);
btnDark.addEventListener('click', darkMode);
