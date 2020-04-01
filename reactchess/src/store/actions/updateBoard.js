import { UPDATE_BOARD } from './actionTypes';

export const updateBoard = newBoard => dispatch => {
  return dispatch({
    type: UPDATE_BOARD,
    payload: newBoard
  });
};
