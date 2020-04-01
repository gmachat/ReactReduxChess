import { HOVERED_PIECE } from './actionTypes';

export const hoveredPiece = square => dispatch => {
  return dispatch({
    type: HOVERED_PIECE,
    payload: {
      row: square.dataset.row,
      column: square.dataset.column,
      selected: true
    }
  });
};
