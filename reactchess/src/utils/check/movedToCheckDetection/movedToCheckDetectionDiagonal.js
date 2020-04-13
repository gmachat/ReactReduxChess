export const movedToCheckDetectionDiagonal = (
  state,
  payload,
  selectedSquareRow,
  selectedSquareColumn
) => {
  console.log('payload', state);
  const { board, selectedPiece } = state;
  const { row, column } = payload;
  console.log(Math.abs(parseInt(column)), selectedSquareColumn);
  for (let i = 0; i < Math.abs(parseInt(column) - selectedSquareColumn); i++) {
    const eachColumn =
      parseInt(column) - selectedSquareColumn > 0
        ? selectedSquareColumn + i
        : selectedSquareColumn - i;
    const eachRow =
      parseInt(row) - selectedSquareRow > 0
        ? selectedSquareRow + i
        : selectedSquareRow - i;
    console.log('test');
    console.log(board);
    console.log(board[eachRow][eachColumn]);
    if (
      board[eachRow][eachColumn] !== null &&
      board[eachRow][eachColumn] !== selectedPiece
    ) {
      return {
        byPiece: board[eachRow][eachColumn],
        checkPiece: true,
      };
    }
    return { checkPiece: false };
  }
};
