//row and column are destructured from the payload containing the target square
import collisionDetection from './collisionDetection';
import { movementChecks } from './movementChecks';

export const moveable = (state, payload) => {
  const { board, selectedSquare, selectedPiece } = state;
  const { row, column } = payload;
  const newBoard = [...board];
  const {
    moveOneVertical,
    moveOneHorizontal,
    moveDiagonal,
    moveNSEW,
    moveDiagonalSingle,
    selectedSquareRow,
    selectedSquareColumn
  } = movementChecks(state, payload);
  const movePieceSpot = () => {
    newBoard[row][column] = selectedPiece;
    newBoard[selectedSquare[0]][selectedSquare[1]] = null;
  };

  switch (selectedPiece && selectedPiece.name.split(' ')[1]) {
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
        if (collisionDetection(state, payload)) return { ...state };
        selectedPiece.hasMoved = true;
        movePieceSpot();
        return { ...state, board: board };
      } else {
        return { ...state, board: newBoard };
      }
    case 'Rook':
      if (moveNSEW) {
        if (collisionDetection(state, payload)) return { ...state };
        movePieceSpot();
        return { ...state, board: board };
      } else {
        console.log("can't move that way dawg");
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
        if (collisionDetection(state, payload)) return { ...state };
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
        if (collisionDetection(state, payload)) return { ...state };
        movePieceSpot();
        return { ...state, board: board };
      } else {
        return { ...state, board: newBoard };
      }
    default:
      // return { ...state, selectedSquare: [row, column] };
      break;
  }
  return { ...state, selectedSquare: [row, column] };
};
