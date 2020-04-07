import { CASTLE } from './actionTypes';

export const castle = (switchTo, startTime, currentPlayer) => dispatch => {
  return dispatch({
    type: CASTLE,
    payload: { switchTo, startTime, currentPlayer }
  });
};
