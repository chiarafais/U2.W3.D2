//ESERCIZIO 1
const form = document.querySelector("form");
const input = document.querySelector("input");
const names = document.querySelector("#names");
const removeBtn = document.querySelector("#remove-btn");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nomi = input.value;
  localStorage.setItem("name", nomi);
  console.log("SALVATO");
  names.innerText = nomi;
  form.reset();
});
const savedName = localStorage.getItem("name");

if (savedName) {
  names.innerText = savedName;
}
removeBtn.addEventListener("click", () => {
  localStorage.removeItem("name");
  names.innerText = "";
});

//ESERCIZIO 2
let numero = 0;
if (sessionStorage.getItem("number")) {
  numero = sessionStorage.getItem("number");
}
const element = document.getElementById("number");
setInterval(function () {
  numero++;
  sessionStorage.setItem("number", numero);
  element.innerText = numero;
}, 1000);
