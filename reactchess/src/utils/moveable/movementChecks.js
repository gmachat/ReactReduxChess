export const movementChecks = (state, payload) => {
  const selectedSquareRow = parseInt(state.selectedSquare[0]);
  const selectedSquareColumn = parseInt(state.selectedSquare[1]);
  return {
    moveOneVertical:
      Math.abs(payload.row - selectedSquareRow) === 1 &&
      Math.abs(payload.column - selectedSquareColumn) === 0,
    moveOneHorizontal:
      Math.abs(payload.column - selectedSquareColumn) === 1 &&
      Math.abs(payload.row - selectedSquareRow) === 0,
    moveDiagonal:
      Math.abs(payload.row - selectedSquareRow) ===
      Math.abs(payload.column - selectedSquareColumn),
    moveNSEW:
      parseInt(payload.row) === selectedSquareRow ||
      parseInt(payload.column) === selectedSquareColumn,
    moveDiagonalSingle:
      Math.abs(payload.row - selectedSquareRow) === 1 &&
      Math.abs(payload.column - selectedSquareColumn) === 1,
    selectedSquareColumn,
    selectedSquareRow
  };
};
