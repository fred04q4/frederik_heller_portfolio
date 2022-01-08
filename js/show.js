let knap = document.querySelector(".knap");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");

knap.addEventListener("click", () => {
  button.classList.toggle("knap-3");
  text1.classList.toggle("hide");
  text2.classList.toggle("hide");
});
