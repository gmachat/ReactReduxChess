import { collisionDetectionNSEW } from './collisionDetectionNSEW';
import { collisionDetectionDiagonal } from './collisionDetectionDiagonal';

const collisionDetection = (state, payload) => {
  const selectedSquareRow = parseInt(state.selectedSquare[0]);
  const selectedSquareColumn = parseInt(state.selectedSquare[1]);

  switch (state.selectedPiece.name.split(' ')[1]) {
    case 'Queen':
      return (
        collisionDetectionDiagonal(
          state,
          payload,
          selectedSquareRow,
          selectedSquareColumn
        ) ||
        collisionDetectionNSEW(
          state,
          payload,
          selectedSquareRow,
          selectedSquareColumn
        )
      );
    case 'Rook':
      return collisionDetectionNSEW(
        state,
        payload,
        selectedSquareRow,
        selectedSquareColumn
      );
    case 'Bishop':
      return collisionDetectionDiagonal(
        state,
        payload,
        selectedSquareRow,
        selectedSquareColumn
      );
    case 'Pawn':
      return collisionDetectionNSEW(
        state,
        payload,
        selectedSquareRow,
        selectedSquareColumn
      );
    default:
      return false;
  }
};

export default collisionDetection;
