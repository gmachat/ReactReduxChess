//row and column are destructured from the payload containing the target square

export const moveable = (state, payload) => {
  const { board, selectedSquare, selectedPiece } = state;
  const { row, column } = payload;
  const newBoard = [...board];
  const selectedSquareRow = parseInt(selectedSquare[0]);
  const selectedSquareColumn = parseInt(selectedSquare[1]);
  const movePieceSpot = () => {
    newBoard[row][column] = selectedPiece;
    newBoard[selectedSquare[0]][selectedSquare[1]] = null;
  };
  const moveOneVertical =
    Math.abs(row - selectedSquareRow) === 1 &&
    Math.abs(column - selectedSquareColumn) === 0;
  const moveOneHorizontal =
    Math.abs(column - selectedSquareColumn) === 1 &&
    Math.abs(row - selectedSquareRow) === 0;
  const moveDiagonal =
    Math.abs(row - selectedSquareRow) ===
    Math.abs(column - selectedSquareColumn);
  const moveNSEW =
    parseInt(row) === selectedSquareRow ||
    parseInt(column) === selectedSquareColumn;
  const moveDiagonalSingle =
    Math.abs(row - selectedSquareRow) === 1 &&
    Math.abs(column - selectedSquareColumn) === 1;

  switch (selectedPiece.name.split(' ')[1]) {
    case 'Pawn':
      let backwards =
        selectedPiece.color === 'white'
          ? selectedSquareRow < row
          : selectedSquareRow > row;
      if (
        (moveOneVertical ||
          (Math.abs(row - selectedSquareRow) === 2 &&
            selectedPiece.hasMoved === false)) &&
        column - selectedSquareColumn === 0 &&
        backwards
      ) {
        selectedPiece.hasMoved = true;
        movePieceSpot();
        return { ...state, board: board };
      } else {
        return { ...state, board: newBoard };
      }
    case 'Rook':
      if (moveNSEW) {
        movePieceSpot();
        return { ...state, board: board };
      } else {
        return { ...state, board: newBoard };
      }
    case 'Knight':
      if (
        (Math.abs(row - selectedSquareRow) === 2 &&
          Math.abs(column - selectedSquareColumn) === 1) ||
        (Math.abs(row - selectedSquareRow) === 1 &&
          Math.abs(column - selectedSquareColumn) === 2)
      ) {
        movePieceSpot();
        return { ...state, board: board };
      } else {
        return { ...state, board: newBoard };
      }

    case 'Bishop':
      if (moveDiagonal) {
        movePieceSpot();
        return { ...state, board: board };
      } else {
        return { ...state, board: newBoard };
      }
    case 'King':
      if (moveDiagonalSingle || moveOneVertical || moveOneHorizontal) {
        movePieceSpot();
        return { ...state, board: board };
      } else {
        return { ...state, board: newBoard };
      }
    case 'Queen':
      if (moveNSEW || moveDiagonal) {
        movePieceSpot();
        return { ...state, board: board };
      } else {
        return { ...state, board: newBoard };
      }
    default:
      console.log('empty');
      break;
  }

  return { ...state, board: newBoard };

  // board[selectedSquare[0]][selectedSquare[1]]
};
