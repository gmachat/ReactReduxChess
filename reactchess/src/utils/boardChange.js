import { boardCopy } from '../utils/boardCopy';
import { getTimeStamp } from '../utils/getTimeStamp';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const boardChange = (state, payload, startTime) => {
  const row = parseInt(payload.row);
  const column = parseInt(payload.column);
  const selectedSquareRow = parseInt(state.selectedSquare[0]);
  const selectedSquareColumn = parseInt(state.selectedSquare[1]);

  const newBoard = boardCopy(state.board);
  if (state.selectedPiece && state.selectedSquare[0]) {
    newBoard[row][column] = state.selectedPiece;
    newBoard[selectedSquareRow][selectedSquareColumn] = null;
    state.selectedPiece.hasMoved = true;

    const logEntry = [
      ...state.log,
      `${
        state.board[row][column] !== null
          ? `${state.selectedPiece.name} takes `
          : `${state.selectedPiece.name} moves to `
      }${
        state.board[row][column]
          ? `${state.board[row][column].name} at Square-${letters[row]}${column} `
          : `Square-${letters[row]}${column} `
      }(${getTimeStamp(startTime)})`
    ];
    return { ...state, board: newBoard, log: logEntry };
  } else {
    console.log('herreeeees the problmen');
    return { ...state, selectedSquare: [payload.row, payload.column] };
  }
};
