let idInput = document.getElementById("idInput");
let colorInput = document.getElementById("colorInput");

console.log(idInput)
console.log(colorInput)

let setCard = () => {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}

// resets each card individually
let resetCards = () => {
  const card = document.getElementById(idInput.value);
  card.style.color = "";
}

//can we reset all cards with a single button push?
// for (let i = 0; i < .length; i++) {
//   .color = "";
// }
