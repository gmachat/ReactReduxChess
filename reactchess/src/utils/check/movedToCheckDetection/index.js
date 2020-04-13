import { movedToCheckDetectionNSEW } from './movedTocheckDetectionNSEW';
import { movedToCheckDetectionDiagonal } from './movedToCheckDetectionDiagonal';

const movedToCheckDetection = (
  state,
  { row, column, letters },
  currentPlayer
) => {
  console.log(row, column, letters);
  const selectedSquareRow = parseInt(state.selectedSquare[0]);
  const selectedSquareColumn = parseInt(state.selectedSquare[1]);
  const king = {
    ...state.pieces[currentPlayer === 'White' ? 'whiteKing' : 'blackKing'],
  };
  const pieceName = king.id;
  console.log('piecename un index', pieceName);

  const NSEWresult = movedToCheckDetectionNSEW(state, king);

  const diagonalResult = movedToCheckDetectionDiagonal(
    state,
    { row, column },
    selectedSquareRow,
    selectedSquareColumn
  );

  console.log('diagonal result', diagonalResult);
  console.log('NSEW result', NSEWresult);

  if (NSEWresult && NSEWresult.checkPiece) {
    console.log('NSEW CHECK when hit', NSEWresult);
    return NSEWresult;
  } else if (diagonalResult && diagonalResult.checkPiece) {
    console.log('diagonalresult', diagonalResult);
    return diagonalResult;
  } else {
    return 'not in check';
  }
};

export default movedToCheckDetection;
