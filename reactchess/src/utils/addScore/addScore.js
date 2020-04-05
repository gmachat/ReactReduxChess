import { boardCopy } from '../boardCopy';

export const addScore = (state, payload) => {
  const { board, takenWhitePieces, takenBlackPieces } = state;
  let newTaken;
  const { row, column } = payload;
  const newBoard = boardCopy(board);
  const taken = newBoard[row][column];

  if (taken.color === 'black') {
    newTaken = [...takenBlackPieces, taken];
    return { newBoard, takenBlackPieces: newTaken, takenWhitePieces };
  } else if (taken.color === 'white') {
    newTaken = [...takenWhitePieces, taken];
    return { newBoard, takenWhitePieces: newTaken, takenBlackPieces };
  }
};
