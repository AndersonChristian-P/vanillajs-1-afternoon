let board = [];

let play = (clickedID) => {
  let player = document.getElementById("player");
  let clickedElement = document.getElementById(clickedID);
  if (player.innerText === "X") {
    player.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedID] = "X";
  } else {
    player.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedID] = "O";
  }
  checkWin();
  console.log(board);
};

let checkWin = () => {
  let boardFull = true;

  let topLeft = board[0];
  let topCenter = board[1];
  let topRight = board[2];
  let centerLeft = board[3];
  let centerCenter = board[4];
  let centerRight = board[5];
  let bottomLeft = board[6];
  let bottomCenter = board[7];
  let bottomRight = board[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(topLeft + " wins!");
  } else if (centerLeft !== undefined && centerLeft === centerCenter && centerLeft === centerRight) {
    alert(centerLeft + " wins!")
  } else if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(bottomLeft + " wins!")
  } else if (topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft) {
    alert(topLeft + " wins!")
  } else if (topCenter !== undefined && topCenter === centerCenter && topCenter === bottomCenter) {
    alert(topCenter + " wins!")
  } else if (topRight !== undefined && topRight === centerRight && topRight === bottomRight) {
    alert(topRight + " wins!")
  } else if (topLeft !== undefined && topLeft === centerCenter && topLeft === bottomRight) {
    alert(topLeft + " wins!")
  } else if (topRight !== undefined && topRight === centerCenter && topRight === bottomLeft) {
    alert(topRight + " wins!")
  }

  for (let i = 0; i < 9; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }

  if (boardFull) {
    alert("Cats Game!")
  }

}

