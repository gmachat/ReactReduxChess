import { CLEAR_SELECTION } from '../store/actions/actionTypes';

export const squareVisualSelector = (state, type, payload) => {
  if (
    state.selectedSquare[0] &&
    state.selectedSquare[1] &&
    type === CLEAR_SELECTION
  ) {
    document
      .getElementById(`sq-${state.selectedSquare[0]}${state.selectedSquare[1]}`)
      .classList.remove('selected');
    return {
      ...state,
      selectedSquare: [null, null],
      selectedPiece: null
    };
  } else {
    document
      .getElementById(`sq-${payload.row}${payload.column}`)
      .classList.add('selected');
    return {
      ...state,
      selectedSquare: [payload.row, payload.column],
      selectedPiece: state.board[payload.row][payload.column]
    };
  }
};
