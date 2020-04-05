export const boardCopy = board => {
  let result = [];
  board.forEach(subArray => {
    result.push(subArray.slice());
  });
  return result;
};
