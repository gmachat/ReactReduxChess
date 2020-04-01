import { CLEAR_HOVER } from './actionTypes';

export const clearHover = square => dispatch => {
  return dispatch({
    type: CLEAR_HOVER
  });
};
