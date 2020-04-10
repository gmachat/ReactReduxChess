import { boardCopy } from '../utils/boardCopy';
import { getTimeStamp } from '../utils/getTimeStamp';
import movedToCheckDetection from './check/movedToCheckDetection';
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const boardChange = (state, payload, startTime, currentPlayer) => {
  const row = parseInt(payload.row);
  const column = parseInt(payload.column);
  const selectedSquareRow = parseInt(state.selectedSquare[0]);
  const selectedSquareColumn = parseInt(state.selectedSquare[1]);

  let updatedPieces = { ...state.pieces };
  let updatedPiece = updatedPieces[state.selectedPiece.id];
  const movedToCheck = movedToCheckDetection(state, payload, currentPlayer);
  const newBoard = boardCopy(state.board);

  console.log('movedtocheck check');
  console.log(
    'running check func',
    movedToCheckDetection(state, payload, currentPlayer)
  );
  if (movedToCheck && movedToCheck.true) {
    console.log('in check cant proceeed');
  }

  if (state.selectedPiece && state.selectedSquare[0]) {
    newBoard[row][column] = state.selectedPiece;
    newBoard[selectedSquareRow][selectedSquareColumn] = null;
    updatedPiece.hasMoved = true;

    const logEntry = [
      ...state.log,
      `${
        state.board[row][column] !== null
          ? `${updatedPiece.name} takes `
          : `${updatedPiece.name} moves to `
      }${
        state.board[row][column]
          ? `${state.board[row][column].name} at Square-${letters[row]}${column} `
          : `Square-${letters[row]}${column} `
      }(${getTimeStamp(startTime)})`
    ];
    updatedPieces[state.selectedPiece.id] = updatedPiece;

    return { ...state, board: newBoard, log: logEntry, pieces: updatedPieces };
  } else {
    console.log('herreeeees the problmen');
    return { ...state, selectedSquare: [payload.row, payload.column] };
  }
};
