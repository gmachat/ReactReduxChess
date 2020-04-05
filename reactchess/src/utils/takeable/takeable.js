import { movementChecks } from '../moveable/movementChecks';
import collisionDetector from '../moveable/collisionDetection';

export const takeable = (state, payload) => {
  const { selectedPiece } = state;
  const { row, column } = payload;
  const {
    moveOneVertical,
    moveOneHorizontal,
    moveDiagonal,
    moveNSEW,
    moveDiagonalSingle,
    selectedSquareRow,
    selectedSquareColumn
  } = movementChecks(state, payload);

  switch (selectedPiece.name.split(' ')[1]) {
    case 'Pawn':
      let backwards =
        selectedPiece.color === 'white'
          ? selectedSquareRow < row
          : selectedSquareRow > row;
      if (moveDiagonalSingle && backwards) {
        if (collisionDetector(state, payload)) return false;
        selectedPiece.hasMoved = true;
        return true;
      }
      return false;

    case 'Rook':
      if (moveNSEW) {
        if (collisionDetector(state, payload)) return false;
        return true;
      }
      return false;
    case 'Knight':
      if (
        (Math.abs(row - selectedSquareRow) === 2 &&
          Math.abs(column - selectedSquareColumn) === 1) ||
        (Math.abs(row - selectedSquareRow) === 1 &&
          Math.abs(column - selectedSquareColumn) === 2)
      ) {
        return true;
      }
      return false;
    case 'Bishop':
      if (moveDiagonal) {
        if (collisionDetector(state, payload)) return false;
        return true;
      }
      return false;
    case 'King':
      if (moveDiagonalSingle || moveOneVertical || moveOneHorizontal) {
        return true;
      }
      return false;
    case 'Queen':
      if (moveNSEW || moveDiagonal) {
        if (collisionDetector(state, payload)) return false;
        return true;
      }
      return false;
    default:
      console.log('empty');
      break;
  }
};
