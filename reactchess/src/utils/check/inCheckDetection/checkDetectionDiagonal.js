export const checkDetectionDiagonal = (
  state,
  payload,
  selectedSquareRow,
  selectedSquareColumn
) => {
  const { board, selectedPiece } = state;
  const { row, column } = payload;
  for (let i = 0; i < Math.abs(parseInt(column) - selectedSquareColumn); i++) {
    const eachColumn =
      parseInt(column) - selectedSquareColumn > 0
        ? selectedSquareColumn + i
        : selectedSquareColumn - i;
    const eachRow =
      parseInt(row) - selectedSquareRow > 0
        ? selectedSquareRow + i
        : selectedSquareRow - i;
    if (
      board[eachRow][eachColumn] !== null &&
      board[eachRow][eachColumn] !== selectedPiece
    ) {
      return true;
    }

    console.log('nothing here');
  }
};
