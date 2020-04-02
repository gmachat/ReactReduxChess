export const takePiece = (state, payload) => {
  let newTaken;
  const {
    selectedSquare,
    selectedPiece,
    board,
    takenWhitePieces,
    takenBlackPieces
  } = state;
  let newBoard = [...board];
  const { row, column } = payload.targetPiece;
  const selectedSquareRow = parseInt(selectedSquare[0]);
  const selectedSquareColumn = parseInt(selectedSquare[1]);
  const taken = newBoard[row][column];

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
  const takePieceSpot = () => {
    newBoard[row][column] = selectedPiece;
    newBoard[selectedSquare[0]][selectedSquare[1]] = null;
    if (taken.color === 'black') {
      newTaken = [...takenBlackPieces, taken];
      return { ...state, board: newBoard, takenBlackPieces: newTaken };
    } else if (taken.color === 'white') {
      newTaken = [...takenWhitePieces, taken];
      return { ...state, board: newBoard, takenWhitePieces: newTaken };
    }
  };

  switch (selectedPiece.name.split(' ')[1]) {
    case 'Pawn':
      let backwards =
        selectedPiece.color === 'white'
          ? selectedSquareRow < row
          : selectedSquareRow > row;
      if (moveDiagonalSingle && backwards) {
        selectedPiece.hasMoved = true;
        return takePieceSpot();
      } else {
        return { ...state, newBoard, moved: false };
      }
    case 'Rook':
      if (moveNSEW) {
        return takePieceSpot();
      } else {
        return { ...state, newBoard, moved: false };
      }
    case 'Knight':
      if (
        (Math.abs(row - selectedSquareRow) === 2 &&
          Math.abs(column - selectedSquareColumn) === 1) ||
        (Math.abs(row - selectedSquareRow) === 1 &&
          Math.abs(column - selectedSquareColumn) === 2)
      ) {
        return takePieceSpot();
      } else {
        return { ...state, newBoard, moved: false };
      }
    case 'Bishop':
      if (moveDiagonal) {
        return takePieceSpot();
      } else {
        return { ...state, newBoard, moved: false };
      }
    case 'King':
      if (moveDiagonalSingle || moveOneVertical || moveOneHorizontal) {
        return takePieceSpot();
      } else {
        return { ...state, newBoard, moved: false };
      }
    case 'Queen':
      if (moveNSEW || moveDiagonal) {
        return takePieceSpot();
      } else {
        return { ...state, newBoard, moved: false };
      }
    default:
      console.log('empty');
      break;
  }
};
