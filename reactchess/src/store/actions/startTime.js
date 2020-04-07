import { START_TIME } from './actionTypes';

export const startTime = time => dispatch => {
  console.log('time start dispatched');
  return dispatch({
    type: START_TIME,
    payload: time
  });
};
