import {
  SELECT_MOVE,
  SELECT_PIECE,
  TAKE_PIECE,
  CLEAR_SELECTION,
  HOVERED_PIECE,
  CLEAR_HOVER,
  UPDATE_SCORE,
  CASTLE,
  CHECK_CHECK
} from '../actions/actionTypes';
import { board } from '../pieces/startingBoard';
import { squareVisualSelector } from '../../utils/squareVisualSelector';
import { boardChange } from '../../utils/boardChange';
import { castle } from '../../utils/castle/castle';
import pieces from '../pieces/pieces';
import checkDetection from '../../utils/check/inCheckDetection';

const initialState = {
  selectedSquare: [null, null],
  selectedPiece: null,
  hoveredPiece: null,
  hoveredSquare: [null, null],
  board: board,
  takenWhitePieces: [],
  takenBlackPieces: [],
  log: [],
  pieces: pieces
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_SELECTION:
      return squareVisualSelector(state, CLEAR_SELECTION, payload);
    case SELECT_PIECE:
      return squareVisualSelector(state, SELECT_PIECE, payload);
    case HOVERED_PIECE:
      return {
        ...state,
        hoveredPiece: state.board[payload.row][payload.column],
        hoveredSquare: [payload.row, payload.column]
      };
    case CLEAR_HOVER:
      return { ...state, hoveredPiece: null, hoveredSquare: [null, null] };
    case SELECT_MOVE:
      return boardChange(
        state,
        payload.targetSquare,
        payload.startTime,
        payload.currentPlayer
      );
    case TAKE_PIECE:
      return boardChange(
        state,
        payload.targetPiece,
        payload.startTime,
        payload.currentPlayer
      );
    case CASTLE:
      return castle(state, payload);
    case UPDATE_SCORE:
      return {
        ...state,
        board: payload.newBoard,
        takenWhitePieces: payload.takenWhitePieces,
        takenBlackPieces: payload.takenBlackPieces
      };
    case CHECK_CHECK:
      return checkDetection(state, payload.checkPiece, payload.currentPlayer);
    default:
      return state;
  }
};
