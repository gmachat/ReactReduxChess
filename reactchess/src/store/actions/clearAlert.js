import { CLEAR_ALERT } from './actionTypes';

export const clearAlert = () => dispatch => {
  return dispatch({
    type: CLEAR_ALERT
  });
};
