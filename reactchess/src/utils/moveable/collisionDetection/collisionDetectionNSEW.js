export const collisionDetectionNSEW = (
  state,
  payload,
  selectedSquareRow,
  selectedSquareColumn
) => {
  const { board, selectedPiece } = state;
  const { row, column } = payload;
  if (parseInt(row) === selectedSquareRow) {
    for (
      let i = 0;
      i < Math.abs(parseInt(column) - selectedSquareColumn);
      i++
    ) {
      if (
        board[selectedSquareRow][
          parseInt(column) - selectedSquareColumn > 0
            ? selectedSquareColumn + i
            : selectedSquareColumn - i
        ] !== null &&
        board[selectedSquareRow][
          parseInt(column) - selectedSquareColumn > 0
            ? selectedSquareColumn + i
            : selectedSquareColumn - i
        ] !== selectedPiece
      ) {
        return true;
      }
    }
  } else if (parseInt(column) === selectedSquareColumn) {
    for (let i = 0; i < Math.abs(parseInt(row) - selectedSquareRow); i++) {
      if (
        board[
          parseInt(row) - selectedSquareRow > 0
            ? selectedSquareRow + i
            : selectedSquareRow - i
        ][selectedSquareColumn] !== null &&
        board[
          parseInt(row) - selectedSquareRow > 0
            ? selectedSquareRow + i
            : selectedSquareRow - i
        ][selectedSquareColumn] !== selectedPiece
      ) {
        return true;
      }
    }
  }
};
