const button = document.querySelector(".button");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  button.classList.toggle("-menu-open");
  menu.classList.toggle("-open");
});
