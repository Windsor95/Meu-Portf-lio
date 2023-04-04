const btnLight = document.querySelector(".light-mode");
const navStyle = document.querySelectorAll(".js-nav-header");
const titulo01 = document.querySelector(".box-left-hero h2");
const titulo02 = document.querySelector(".box-left-hero h1");
console.log(navStyle);
function lightMode() {
  navStyle.forEach((element) => {
    element.classList.toggle("light");
  });

  document.body.classList.toggle("light");
  titulo01.classList.toggle("light");
  titulo02.classList.toggle("light");
}

btnLight.addEventListener("click", lightMode);
