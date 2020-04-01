import { SELECT_MOVE } from './actionTypes';

export const selectMove = square => dispatch => {
  return dispatch({
    type: SELECT_MOVE,
    payload: {
      row: square.dataset.row,
      column: square.dataset.column,
      selected: true
    }
  });
};
