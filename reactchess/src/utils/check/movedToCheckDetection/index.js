import { movedToCheckDetectionNSEW } from './movedTocheckDetectionNSEW';
import { movedToCheckDetectionDiagonal } from './movedToCheckDetectionDiagonal';

const movedToCheckDetection = (state, { row, column }, currentPlayer) => {
  const selectedSquareRow = parseInt(state.selectedSquare[0]);
  const selectedSquareColumn = parseInt(state.selectedSquare[1]);
  const updatedPiece = {
    ...state.pieces[currentPlayer === 'White' ? 'blackKing' : 'whiteKing']
  };
  const pieceName = updatedPiece.id;

  const NSEWresult = movedToCheckDetectionNSEW(
    state,
    { row, column },
    selectedSquareRow,
    selectedSquareColumn
  );
  const diagonalResult = movedToCheckDetectionDiagonal(
    state,
    { row, column },
    selectedSquareRow,
    selectedSquareColumn
  );

  if (NSEWresult && NSEWresult.checkPiece) {
    console.log('NSEW CHECK', NSEWresult);
    return NSEWresult;
  } else if (diagonalResult && diagonalResult.checkPiece) {
    console.log('diagonalresult', diagonalResult);
    return diagonalResult;
  } else {
    return 'not in check';
  }
};

export default movedToCheckDetection;
