import { UPDATE_SCORE } from './actionTypes';

export const updateScore = scoreBoard => dispatch => {
  return dispatch({
    type: UPDATE_SCORE,
    payload: scoreBoard
  });
};
