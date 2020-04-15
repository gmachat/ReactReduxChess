import { checkDetectionNSEW } from './checkDetectionNSEW';
import { checkDetectionDiagonal } from './checkDetectionDiagonal';
import { checkDetectionKnights } from './inCheckDetectionKnights';
import { boardCopy } from '../../../utils/boardCopy';

const checkDetection = (state, currentPlayer, newMove) => {
  let king;
  const newBoard = boardCopy(state.board);
  if (state.selectedSquare[0] !== null) {
    newBoard[newMove.row][newMove.column] = state.selectedPiece;
    newBoard[state.selectedSquare[0]][state.selectedSquare[1]] = null;
  }

  if (state.selectedPiece && state.selectedPiece.type === 'king') {
    king = {
      ...state.selectedPiece,
      location: [newMove.row, newMove.column],
    };
    console.log(king);
  } else {
    king = {
      ...state.pieces[currentPlayer === 'Black' ? 'whiteKing' : 'blackKing'],
    };
  }

  let checkResults = [];

  const NSEWresult = checkDetectionNSEW(king, newBoard);
  const diagonalResult = checkDetectionDiagonal(king, newBoard);
  const knightsResult = checkDetectionKnights(king, newBoard);

  console.log('diagonal result for incheck detect', diagonalResult);
  console.log('NSEW result for in check detect', NSEWresult);

  checkResults = checkResults.concat(
    NSEWresult && NSEWresult,
    diagonalResult && diagonalResult,
    knightsResult && knightsResult
  );
  console.log('InCheckKing checkResults', checkResults);

  if (checkResults.length > 0) {
    console.log('CHECK RESULTSwhen hit for in check detect', checkResults);
    return checkResults;
  } else {
    return null;
  }
};

export default checkDetection;
