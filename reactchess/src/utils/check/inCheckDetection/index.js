import { checkDetectionNSEW } from './checkDetectionNSEW';
import { checkDetectionDiagonal } from './checkDetectionDiagonal';

const checkDetection = (state, { row, column }, currentPlayer) => {
  const selectedSquareRow = parseInt(state.selectedSquare[0]);
  const selectedSquareColumn = parseInt(state.selectedSquare[1]);
  const updatedPiece = {
    ...state.pieces[currentPlayer === 'White' ? 'blackKing' : 'whiteKing'],
  };
  console.log('check detection function');
  console.log(updatedPiece);
  const pieceName = updatedPiece.id;

  if (
    checkDetectionNSEW(
      state,
      { row, column },
      selectedSquareRow,
      selectedSquareColumn
    ) ||
    checkDetectionDiagonal(
      state,
      { row, column },
      selectedSquareRow,
      selectedSquareColumn
    )
  ) {
    console.log('found something');
    updatedPiece.inCheck = true;
    const updatedPieces = { ...state.pieces };
    updatedPieces[pieceName] = updatedPiece;

    return { ...state, pieces: updatedPieces };
  } else {
    return { ...state };
  }
};

export default checkDetection;
