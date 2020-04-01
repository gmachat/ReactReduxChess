export const takePiece = (state, payload) => {
  let newBoard = [...state.board];
  let newTaken;
  const taken = newBoard[payload.targetPiece.row][payload.targetPiece.column];
  newBoard[payload.targetPiece.row][payload.targetPiece.column] =
    payload.attacker;
  newBoard[state.selectedSquare[0]][state.selectedSquare[1]] = null;
  if (taken.color === 'black') {
    newTaken = [...state.takenBlackPieces, taken];
    return { ...state, board: newBoard, takenBlackPieces: newTaken };
  } else if (taken.color === 'white') {
    newTaken = [...state.takenWhitePieces, taken];
    return { ...state, board: newBoard, takenWhitePieces: newTaken };
  }
};
