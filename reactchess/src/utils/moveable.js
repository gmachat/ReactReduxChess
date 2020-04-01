//row and column are destructured from the payload containing the target square

export const moveable = (
  board,
  selectedSquare,
  selectedPiece,
  { row, column }
) => {
  const newBoard = [...board];
  const selectedSquareRow = parseInt(selectedSquare[0]);
  const selectedSquareColumn = parseInt(selectedSquare[1]);
  //if that square is not currently occupied
  if (newBoard[row][column] === null) {
    switch (selectedPiece.name.split(' ')[1]) {
      case 'Pawn':
        let backwards =
          selectedPiece.color === 'white'
            ? selectedSquareRow < row
            : selectedSquareRow > row;
        if (
          (Math.abs(row - selectedSquareRow) === 1 ||
            (Math.abs(row - selectedSquareRow) === 2 &&
              selectedPiece.hasMoved === false)) &&
          column - selectedSquareColumn === 0 &&
          backwards
        ) {
          selectedPiece.hasMoved = true;
          newBoard[selectedSquare[0]][selectedSquare[1]] = null;
          newBoard[row][column] = selectedPiece;
          return { board: board, moved: true };
        } else {
          return { newBoard, moved: false };
        }
      case 'Rook':
        if (
          parseInt(row) === selectedSquareRow ||
          parseInt(column) === selectedSquareColumn
        ) {
          newBoard[selectedSquare[0]][selectedSquare[1]] = null;
          newBoard[row][column] = selectedPiece;
          return { board: board };
        } else {
          return { newBoard, moved: false };
        }
      case 'Knight':
        if (
          (Math.abs(row - selectedSquareRow) === 2 &&
            Math.abs(column - selectedSquareColumn) === 1) ||
          (Math.abs(row - selectedSquareRow) === 1 &&
            Math.abs(column - selectedSquareColumn) === 2)
        ) {
          newBoard[selectedSquare[0]][selectedSquare[1]] = null;
          newBoard[row][column] = selectedPiece;
          return { board: board };
        } else {
          return { newBoard, moved: false };
        }

      case 'Bishop':
        if (
          Math.abs(row - selectedSquareRow) ===
          Math.abs(column - selectedSquareColumn)
        ) {
          newBoard[selectedSquare[0]][selectedSquare[1]] = null;
          newBoard[row][column] = selectedPiece;
          return { board: board };
        } else {
          return { newBoard, moved: false };
        }
      case 'King':
        if (
          (Math.abs(row - selectedSquareRow) === 1 &&
            Math.abs(column - selectedSquareColumn) === 1) ||
          Math.abs(row - selectedSquareRow) === 1 ||
          Math.abs(column - selectedSquareColumn) === 1
        ) {
          newBoard[selectedSquare[0]][selectedSquare[1]] = null;
          newBoard[row][column] = selectedPiece;
          return { board: board };
        } else {
          return { newBoard, moved: false };
        }

      case 'Queen':
        if (
          Math.abs(row - selectedSquareRow) ===
            Math.abs(column - selectedSquareColumn) ||
          parseInt(row) === selectedSquareRow ||
          parseInt(column) === selectedSquareColumn
        ) {
          newBoard[selectedSquare[0]][selectedSquare[1]] = null;
          newBoard[row][column] = selectedPiece;
          return { board: board };
        } else {
          return { newBoard, moved: false };
        }
      default:
        console.log('empty');
        break;
    }

    return newBoard;
  } else if (newBoard[row][column] !== null) {
    console.log('you must attack right now');
  }

  // board[selectedSquare[0]][selectedSquare[1]]
};
