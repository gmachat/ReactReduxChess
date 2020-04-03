import { movementChecks } from '../moveable/movementChecks';
import collisionDetector from '../moveable/collisionDetection';

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
  const taken = newBoard[row][column];
  const {
    moveOneVertical,
    moveOneHorizontal,
    moveDiagonal,
    moveNSEW,
    moveDiagonalSingle,
    selectedSquareRow,
    selectedSquareColumn
  } = movementChecks(state, payload.targetPiece);

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
        if (collisionDetector(state, payload.targetPiece)) return { ...state };
        selectedPiece.hasMoved = true;
        return takePieceSpot();
      } else {
        return { ...state, newBoard, moved: false };
      }
    case 'Rook':
      if (moveNSEW) {
        if (collisionDetector(state, payload.targetPiece)) return { ...state };
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
        if (collisionDetector(state, payload.targetPiece)) return { ...state };
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
        if (collisionDetector(state, payload.targetPiece)) return { ...state };
        return takePieceSpot();
      } else {
        return { ...state, newBoard, moved: false };
      }
    default:
      console.log('empty');
      break;
  }
};
