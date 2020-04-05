import { boardCopy } from '../utils/boardCopy';

export const boardChange = (state, payload) => {
  const newBoard = boardCopy(state.board);
  if (state.selectedPiece && state.selectedSquare[0]) {
    newBoard[payload.row][payload.column] = state.selectedPiece;
    newBoard[state.selectedSquare[0]][state.selectedSquare[1]] = null;
    return { ...state, board: newBoard };
  } else {
    return { ...state, selectedSquare: [payload.row, payload.column] };
  }
};
