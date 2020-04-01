import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import alertReducer from './alertReducer';

export default combineReducers({ boardReducer, alertReducer });
