import { START_TIME } from './actionTypes';

export const startTime = time => dispatch => {
  return dispatch({
    type: START_TIME,
    payload: time
  });
};
