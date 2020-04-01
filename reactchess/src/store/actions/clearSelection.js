import { CLEAR_SELECTION } from './actionTypes';

export const clearSelection = square => dispatch => {
  return dispatch({
    type: CLEAR_SELECTION,
    payload: {
      row: square.dataset.row,
      column: square.dataset.column,
      selected: false
    }
  });
};
