 // Write a function to print a chess board of size n
// e.g if n is 8 it should print an 8x8 board. User # to represent black squares and ' '
// to represent white squares

function printChessBoard(n) {
    let board = "";
  
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if ((row + col) % 2 === 0) {             
          board += " ";
        } else {
          board += "#";
        }
      }
      board += "\n";
    }
  
    console.log(board);
  }
  
  let k = 8;
  printChessBoard(k); 
  