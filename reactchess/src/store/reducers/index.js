import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import alertReducer from './alertReducer';
import gameReducer from './gameReducer';

export default combineReducers({ boardReducer, alertReducer, gameReducer });
