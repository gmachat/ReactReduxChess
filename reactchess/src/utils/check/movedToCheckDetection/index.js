import { movedToCheckDetectionNSEW } from './movedTocheckDetectionNSEW';
import { movedToCheckDetectionDiagonal } from './movedToCheckDetectionDiagonal';
import { movedToCheckDetectionKnights } from './movedToCheckDetectionKnights';
import { boardCopy } from '../../../utils/boardCopy';

const movedToCheckDetection = (state, currentPlayer, newMove) => {
  let king;
  const newBoard = boardCopy(state.board);
  if (state.selectedSquare[0] !== null) {
    newBoard[newMove.row][newMove.column] = state.selectedPiece;
    newBoard[state.selectedSquare[0]][state.selectedSquare[1]] = null;
  }

  if (state.selectedPiece && state.selectedPiece.type === 'king') {
    king = { ...state.selectedPiece, location: [newMove.row, newMove.column] };
    console.log(king);
  } else {
    king = {
      ...state.pieces[currentPlayer === 'White' ? 'whiteKing' : 'blackKing'],
    };
  }

  let checkResults = [];

  const NSEWresult = movedToCheckDetectionNSEW(king, newBoard);
  const diagonalResult = movedToCheckDetectionDiagonal(king, newBoard);
  const knightsResult = movedToCheckDetectionKnights(king, newBoard);

  console.log('diagonal result', diagonalResult);
  console.log('NSEW result', NSEWresult);

  checkResults = checkResults.concat(
    NSEWresult && NSEWresult,
    diagonalResult && diagonalResult,
    knightsResult && knightsResult
  );
  console.log('checkResults', checkResults);

  if (checkResults.length > 0) {
    console.log('CHECK RESULTSwhen hit', checkResults);
    return checkResults;
  } else {
    return null;
  }
};

export default movedToCheckDetection;
