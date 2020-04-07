import { SELECT_MOVE } from './actionTypes';

export const selectMove = (square, startTime) => dispatch => {
  return dispatch({
    type: SELECT_MOVE,
    payload: {
      targetSquare: {
        row: square.dataset.row,
        column: square.dataset.column
      },
      startTime
    }
  });
};
