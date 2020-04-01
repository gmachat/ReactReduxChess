import { SELECT_PIECE } from './actionTypes';

export const selectPiece = square => dispatch => {
  return dispatch({
    type: SELECT_PIECE,
    payload: {
      row: square.dataset.row,
      column: square.dataset.column,
      selected: true
    }
  });
};
