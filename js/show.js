const knap = document.querySelector(".knap");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");

knap.addEventListener("click", () => {
  button.classList.toggle("knap-3");
  text1.classList.toggle("hide");
  text2.classList.toggle("hide");
});
