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
  let diamonds = document.getElementById("diamonds")
  let hearts = document.getElementById("hearts")
  let clubs = document.getElementById("clubs")
  let spades = document.getElementById("spades")
  diamonds.style.color = "";
  hearts.style.color = "";
  clubs.style.color = "";
  spades.style.color = "";
}

//can we reset all cards with a single button push?

// const card = document.getElementsByTagName('section')

  // for (let i = 0; i < 5; i++) {
  //   card[i].style.color = "";
  // }

//   .color = "";
// }
