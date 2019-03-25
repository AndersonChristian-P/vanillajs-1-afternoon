let idInput = document.getElementById("idInput");
let colorInput = document.getElementById("colorInput");

console.log(idInput)
console.log(colorInput)

let setCard = () => {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}

let resetCards = () => {

}