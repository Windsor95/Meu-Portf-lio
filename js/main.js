const btnLight = document.querySelector('.light-mode');
const btnDark = document.querySelector('.dark-mode');
const navStyle = document.querySelectorAll('.js-nav-header');
const titulo01 = document.querySelector('.box-left-hero h2');
const titulo02 = document.querySelector('.box-left-hero h1');
const header = document.querySelector('.header');

function lightMode() {
  navStyle.forEach(element => {
    element.classList.add('light');
  });

  header.classList.add('light');
  document.body.classList.add('light');
  titulo01.classList.add('light');
  titulo02.classList.add('light');
  document.querySelector('.s-portfolio').classList.add('light');
  document.querySelector('.s-portfolio h2').style.color = '#000000';
  document.querySelector('.s-habilidades').classList.add('light');
  document.querySelector('.s-habilidades h2').style.color = '#000000';
  document.querySelector('.s-sobre').classList.add('light');
  document.querySelector('.s-sobre h2').style.color = '#000000';
  document.querySelector('.s-sobre p').style.color = '#1692c5';
  //document.querySelector('.s-hobbies').classList.add('light');
  //document.querySelector('.s-hobbies h2').style.color = '#000000';
  document.querySelector('.s-contatos').classList.add('light');
  document.querySelector('.s-contatos h2').style.color = '#000000';
}

function darkMode() {
  navStyle.forEach(element => {
    element.classList.remove('light');
  });

  header.classList.remove('light');
  document.body.classList.remove('light');
  titulo01.classList.remove('light');
  titulo02.classList.remove('light');
  document.querySelector('.s-portfolio').classList.remove('light');
  document.querySelector('.s-portfolio h2').style.color = '#ffffff';
  document.querySelector('.s-habilidades').classList.remove('light');
  document.querySelector('.s-habilidades h2').style.color = '#ffffff';
  document.querySelector('.s-sobre').classList.remove('light');
  document.querySelector('.s-sobre h2').style.color = '#ffffff';
  document.querySelector('.s-sobre p').style.color = '#1692c5';
  //document.querySelector('.s-hobbies').classList.remove('light');
  //document.querySelector('.s-hobbies h2').style.color = '#ffffff';
  document.querySelector('.s-contatos').classList.remove('light');
  document.querySelector('.s-contatos h2').style.color = '#ffffff';
}

function openMenu() {
  const changeBtn = document.querySelector('.js-btn-mob');
  if (
    changeBtn.src === './img/openMenuMob.svg' ||
    changeBtn.src === 'http://127.0.0.1:5501/img/openMenuMob.svg'
  ) {
    changeBtn.setAttribute('src', './img/closeMenuMob.svg');
  } else {
    changeBtn.setAttribute('src', './img/openMenuMob.svg');
  }
}

function designColorInitial() {
  document.querySelector('.design-portfolio-blue').classList.add('active');

  document
    .querySelector('.design-portfolio-light-blue')
    .classList.add('active');

  document.querySelector('.design-portfolio-white').classList.add('active');
}

function designColorFinal() {
  setTimeout(() => {
    document.querySelector('.design-portfolio-blue').classList.remove('active');
  }, 750);
  setTimeout(() => {
    document
      .querySelector('.design-portfolio-light-blue')
      .classList.remove('active');
  }, 500);
  setTimeout(() => {
    document
      .querySelector('.design-portfolio-white')
      .classList.remove('active');
  }, 250);
}

const home = document.querySelector('.js-back-home');
const portfolio = document.querySelector('.s-portfolio');
const habilidades = document.querySelector('.s-habilidades');
const sobre = document.querySelector('.s-sobre');
//const hobbies = document.querySelector('.s-hobbies');
const contatos = document.querySelector('.s-contatos');

function backHome(event) {
  habilidades.classList.remove('active');
  sobre.classList.remove('active');
  portfolio.classList.remove('active');
  contatos.classList.remove('active');
  home.classList.add('active');
  designColorFinal();
}

function openProjetos(event) {
  if (portfolio.classList.contains('active')) {
    portfolio.classList.remove('active');
    designColorFinal();
  } else {
    habilidades.classList.remove('active');
    sobre.classList.remove('active');
    // hobbies.classList.remove('active');
    contatos.classList.remove('active');
    portfolio.classList.add('active');
    designColorInitial();
  }
}

function openHabilidades(event) {
  console.log(habilidades);
  if (habilidades.classList.contains('active')) {
    habilidades.classList.remove('active');
    designColorFinal();
  } else {
    portfolio.classList.remove('active');
    sobre.classList.remove('active');
    // hobbies.classList.remove('active');
    contatos.classList.remove('active');
    habilidades.classList.add('active');
    designColorInitial();
  }
}

function openSobre(event) {
  if (sobre.classList.contains('active')) {
    sobre.classList.remove('active');
    designColorFinal();
  } else {
    portfolio.classList.remove('active');
    habilidades.classList.remove('active');
    // hobbies.classList.remove('active');
    contatos.classList.remove('active');
    sobre.classList.add('active');
    designColorInitial();
  }
}
//function openHobbies(event) {
//  if (hobbies.classList.contains('active')) {
//    hobbies.classList.remove('active');
//    designColorFinal();
//  } else {
//    portfolio.classList.remove('active');
//    habilidades.classList.remove('active');
//    sobre.classList.remove('active');
//    contatos.classList.remove('active');
//    hobbies.classList.add('active');
//    designColorInitial();
//  }
//}
function openContatos(event) {
  if (contatos.classList.contains('active')) {
    contatos.classList.remove('active');
    designColorFinal();
  } else {
    portfolio.classList.remove('active');
    habilidades.classList.remove('active');
    sobre.classList.remove('active');
    // hobbies.classList.remove('active');
    contatos.classList.add('active');
    designColorInitial();
  }
}

const text = document.querySelector('.change-text');
text.innerHTML = 'WINDSOR';
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Desenvolvedor';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'UX/UI Designer';
  }, 8000);
  setTimeout(() => {
    text.textContent = 'Ilustrador';
  }, 12000);
};

textLoad();
setInterval(textLoad, 12000);

btnLight.addEventListener('click', lightMode);
btnDark.addEventListener('click', darkMode);
